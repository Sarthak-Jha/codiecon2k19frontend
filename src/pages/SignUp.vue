<template>
    <div id="app">
        <v-app id="inspire">
            <v-content>
                <v-container fluid fill-height style="padding-top: 1px; padding-buttom: 1px">
                    <v-layout align-center justify-center>
                        <v-flex xs12 sm8 md4>
                            <v-card class="elevation-12">
                                <v-toolbar color="primary" dark flat>
                                    <v-toolbar-title>Register</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                </v-toolbar>
                                <v-card-text>
                                    <v-form>

                                        <v-text-field
                                            label="First Name"
                                            name="firstname"
                                            type="text"
                                            v-model="registerData.firstName"
                                        ></v-text-field>

                                        <v-text-field
                                            label="Last Name"
                                            name="lastname"
                                            type="text"
                                            v-model="registerData.lastName"
                                        ></v-text-field>

                                        <v-text-field
                                            label="Username"
                                            name="username"
                                            type="text"
                                            v-model="registerData.userName"
                                        ></v-text-field>

                                        <v-text-field
                                            id="Number"
                                            label="Number"
                                            name="Number"
                                            type="text"
                                            v-model="registerData.phnNo"
                                        ></v-text-field>

                                        <v-text-field
                                            id="Email"
                                            label="Email"
                                            name="Email"
                                            type="text"
                                            v-model="registerData.mailId"
                                        ></v-text-field>

                                        <v-text-field
                                            id="Password"
                                            label="Password"
                                            name="Password"
                                            type="password"
                                            v-model="registerData.password"
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
                                                    Already Registered ?
                                                    <router-link class="link" to="/login">
                                                        Login
                                                    </router-link>
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>


                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn @click="handleSubmit" color="primary">Register</v-btn>
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
    name: 'register',
    data () {
        return {
            registerData: {
                firstName: '',
                lastName: '',
                phnNo: '',
                password: '',
                mailId: '',
                userName: ''
            },
            successMessage: {
                status: false,
                message: ''
            },
            error: {
                status: false,
                message: ''
            }
        }
    },
    methods: {
        ...mapActions('userStore',[
            'validateRegister',
            'verifyRegister'
        ]),
        handleSubmit () {
            if (this.validate()) {
                this.registerData.phnNo = '+91'+this.registerData.phnNo
                let data = this.registerData
                this.verifyRegister({
                    data,
                    success: this.verifyRegisterSuccess,
                    fail: this.validateRegisterFail
                })
            }
        },
        verifyRegisterSuccess () {
            let data = this.registerData
            this.validateRegister({
                data,
                success: this.validateRegisterSuccess,
                fail: this.validateRegisterFail
            })
        },
        resetError () {
            this.error.status = false
            this.error.message = ''
        },
        resetSuccessMessage () {
            this.successMessage.status = false
            this.successMessage.message = ''
        },
        validateRegisterSuccess (res) {
            if (res.body.responseObject) {
                this.resetError()
                this.successMessage.status = true
                this.successMessage.message = 'Successfully registered'
                this.$router.push('/login')
            } else {
                this.resetSuccessMessage()
                this.error.status = true
                this.error.message = res.body.apiResponseStatus.message
            }
        },
        validateRegisterFail (res) {
            this.resetError()
            this.resetSuccessMessage()
            this.error.status = true
            this.error.message = res.body.apiResponseStatus.message
        },
        validate () {
            if (this.registerData.userName.trim() == '' || this.registerData.password.trim() == ''
            || this.registerData.mailId.trim() == '' || this.registerData.firstName.trim() == ''
            || this.registerData.lastName.trim() == '' || this.registerData.phnNo.trim() == '' ) {
                return false
            }
            return true
        }
    }
}
</script>

<style lang="scss" scoped>
#app{
    margin-top: 70px;
}
.link {
    text-decoration: none;
}
</style>
