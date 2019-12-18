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
                                        label="E-mail"
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

<script src='./js/loginpage.js'></script>

<style lang="scss" scoped>
    .link {
        text-decoration: none;
    }
</style>
