<template>
    <div>
        <v-toolbar
                class="nav"
        >
            <v-toolbar-title class="nav__tittle"><router-link class="link" to="/">HelpingHand</router-link></v-toolbar-title>

            <v-spacer></v-spacer>

            <form v-if="show" id="app" action="#">
                <label :data-state="state" for="search">
                    <input type="text" placeholder="Search" @click="state = 'opan'" @blur="state='close'"/>
                    <i class="fa fa-search" @click="" aria-hidden="true"></i>
                </label>
            </form>

            <v-toolbar-items class="nav__content">
                <v-btn text class="nav__content__text"><router-link class="link" to="/newsfeeds">Newsfeeds</router-link></v-btn>
                <v-menu
                        bottom
                        origin="center center"
                        transition="scale-transition"
                        class="nav__content__text"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn
                                text
                                v-on="on"
                        ><a href="javascript:void(0)" class="link">
                            Forms
                        </a>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item> <router-link class="link" to="/newsfeeds">New Post</router-link></v-list-item>
                        <v-list-item><router-link class="link" to="/feedback">Feedback Form</router-link></v-list-item>
                    </v-list>
                </v-menu>
                <v-btn text class="nav__content__text"><router-link class="link" to="/groups">Groups</router-link></v-btn>
                <v-menu
                        bottom
                        origin="center center"
                        transition="scale-transition"
                        class="nav__content__text"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn text
                                v-on="on"
                        >
                            <v-avatar id="usericon" class="nav__content__login" style="height: 40px; min-width: 40px; width: 40px">
                                <v-icon dark>mdi-account-circle</v-icon>
                            </v-avatar>
                        </v-btn>
                    </template>

                    <v-list class="user_list" v-if="!login">
                        <v-list-item><router-link class="link" to="/login">Login</router-link></v-list-item>
                        <v-list-item><router-link class="link" to="/register">Signup</router-link></v-list-item>
                    </v-list>

                    <v-list class="user_list" v-else>
                        <v-list-item><router-link class="link" to="/profile">Profile</router-link></v-list-item>
                        <v-list-item><router-link class="link" to="/login">Logout</router-link></v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data () {
            return {
                state: "close",
                login: false
            }
        },
        computed: {
            show: function () {
                if ( window.location.pathname == '/') {
                    return false
                }
                return true
            }
        }
    }
</script>

<style lang="scss" scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
    .nav{
        background-color: lightgray;
        &__tittle{
            padding: 10px;
            font-weight: bold;
        }
        &__content{
            &__text{
            }
            &__login{
                width: 100px;
            }
            &__btn{
            }
         }
    }
    .v-toolbar__items{
        align-items: center;
    }
    .user_list {
        min-width: 150px;
        text-align: center;

    }

    #usericon {
        box-shadow: 1px 1px 5px rgba(0,0,0,0.5);

    }
    .link {
        text-decoration: none;
    }

    #app {
        padding: 0px 16px;
    }

    label {
        position: relative;
        display: inline-block;
        background-color: #fff;
        padding: 5px 12px;
        transition: all 1s ease;
        border-radius: 0;
        box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
        &::after{
            content: '';
            display: block;
            height: 2px;
            width: 80%;
            background-color: #1E88E5;
            transition: all 1s ease 0.5s;
        }
        input {
            transition: width 1s ease, opacity 0.5s ease 0.5s;
            opacity: 1;
            width: 350px;
            height: 25px;
            // border-radius: 100px;
            outline: none;
            color: darken(#1E88E5, 25)
        }
        i {
            position: absolute;
            top: 11px;
            right: 11px;
            color: #333;
            cursor: pointer;
        }
        &[data-state="close"] {
            border-radius: 30px;
            padding: 5px 5px;
            transition: all 1s ease;
            &::after {
                width: 0%;
                transition: all 0.3s ease;
            }
            i {
                pointer-events: none;
            }
            input {
                width: 28px;
                height: 25px;
                opacity:0;
                cursor: pointer;
                transition: opacity 0.5s ease, width 1s ease;
                -webkit-appearance:none
            }
        }
    }

</style>
