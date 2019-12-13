<template>
    <div>
        <v-toolbar
                class="nav"
        >
            <v-toolbar-title class="nav__tittle">HelpingHand</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items class="nav__content">
                <v-btn text class="nav__content__text">Newsfeeds</v-btn>
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
                        >
                            Forms
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item
                                v-for="(item, i) in items"
                                :key="i"
                                @click=""
                        >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-btn text class="nav__content__text">Myfeeds</v-btn>
                <v-menu
                        bottom
                        origin="center center"
                        transition="scale-transition"
                        class="nav__content__text"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn
                                v-on="on"
                        >
                            <v-avatar color="indigo" class="nav__content__login">
                                <v-icon dark>mdi-account-circle</v-icon>
                            </v-avatar>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item>Login</v-list-item>
                        <v-list-item>Signup</v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style lang="scss" scoped>
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
</style>
