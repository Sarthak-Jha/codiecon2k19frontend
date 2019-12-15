<template>
    <div id="app">
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar color="primary" dark flat>
                                <v-toolbar-title>Login</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>

                                    <v-text-field
                                        label="Username"
                                        name="login"
                                        type="text"
                                        v-model="loginData.mailId"
                                    ></v-text-field>

                                    <v-text-field
                                        id="password"
                                        label="Password"
                                        name="password"
                                        type="password"
                                        v-model="loginData.password"
                                    ></v-text-field>

                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                {{ error.message }}
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>

                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                Not registered?
                                                <router-link class="link" to="/register">
                                                    Create an account
                                                </router-link>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn @click="handleSubmit" color="primary">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'loginpage',
    data () {
        return {
            loginData: {
                mailId: '',
                password: ''
            },
            error: {
                status: false,
                message: ''
            }
        }
    },
    methods: {
        ...mapActions('userStore',[
            'validateLogin'
        ]),
        handleSubmit () {
            debugger
            let data = this.loginData
            console.log("handle Submit", data)
            if (this.validateCredentials) {
                this.validateLogin({
                    data,
                    success: this.validateLoginSuccess,
                    fail: this.validateLoginFail,
                })
            }
        },
        validateCredentials () {
            if (this.loginData.mailId.trim() == '' && this.loginData.password.trim() == '') {
                this.error.status = true
                this.error.message = "*All fields are required"
                return false
            }
            return true
        },
        validateLoginSuccess (resp) {
            if (resp.body.responseObject) {
                this.$session.set('isLoggedIn', true);
				localStorage.setItem('isLoggedIn', true);
				this.$session.set('token', resp.body.responseObject.oauth2AccessToken.access_token);
                localStorage.setItem('token', resp.body.responseObject.oauth2AccessToken.access_token);
                this.$session.set('refreshToken', resp.body.responseObject.oauth2AccessToken.refresh_token);
                localStorage.setItem('refreshToken', resp.body.responseObject.oauth2AccessToken.refresh_token);
                this.$store.commit('userStore/setUserDetails', {
					status : true,
					...resp.body.responseObject
                })
                this.$router.push('/')
            } else {
                this.$store.commit('userStore/isLoggedIn', false);
				this.error.status = true;
				this.error.message = resp.body.apiResponseStatus.message;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .link {
        text-decoration: none;
    }
</style>