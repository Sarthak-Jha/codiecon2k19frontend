<template>
    <div class="container">
        <v-row justify="center">
            <v-subheader>My Groups</v-subheader>

            <v-expansion-panels popout>
                <v-expansion-panel v-if="getAllGroupsByUser.length"
                        v-for="(AllGroupsByUser, i) in getAllGroupsByUser"
                        :key="i"
                        hide-actions
                >
                    <v-expansion-panel
                            class="groupPannel"
                            type="text"
                    >
                        <v-row
                                align="center"
                                class="spacer"
                                no-gutters
                        >
                            <v-col
                                    cols="2"
                                    sm="2"
                                    md="1"
                            >
                                <v-avatar
                                        size="40px"
                                >
                                    <img
                                            v-if="message.avatar"
                                            alt="Avatar"
                                            :src="getAllGroupsByUser.groupImage"
                                    >
                                    <img
                                            v-else
                                            src="../assets/categoryicon/avatar.svg"
                                    >
                                </v-avatar>
                            </v-col>

                            <v-col
                                    class="hidden-xs-only"
                                    sm="5"
                                    md="3"
                            >
                                <strong v-html="message.name"></strong>
                            </v-col>
                        </v-row>
                    </v-expansion-panel>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>
        <div class="createGroup">
            <v-btn class="createGroup__btn"><router-link class="link" to="/groupform">Create Group</router-link></v-btn>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions}  from 'vuex'

    export default {
        name: "GroupDetails",
        data: () => ({
            lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
        }),
        computed: {
            ...mapGetters('postStore',['getAllGroupsByUser'])
        },
        mounted () {
            console.log('allah',this.getAllGroupsByUser)
        }

    }
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        justify-content: center;
        flex-flow: column;
    }
    .groupPannel{
        margin: 15px;
    }
    .createGroup{
        display: flex;
        justify-content: center;
        align-items: center;
        &__btn{
            margin: 15px;
            width: fit-content;
        }
    }
    .link {
        text-decoration: none;
    }
</style>
