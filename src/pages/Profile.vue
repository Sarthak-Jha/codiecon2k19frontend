<template>
    <div fluid class="profiledata">
        <div class="profiledata__left box">
            <v-navigation-drawer
                :width="width"
                :value="true"
                stateless
            >
                <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
                    <v-row align="end" class="lightbox white--text pa-2 fill-height">
                        <v-col>
                            <v-avatar
                                    class="profile"
                                    size="50"
                                    tile
                            >
                                <v-img class="profile__pic" src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                            </v-avatar>
                            <div class="subheading">Jonathan Lee</div>
                        </v-col>
                    </v-row>
                </v-img>
                <v-list>
                    <template v-for="(item) in items">
                        <v-list-item :key="item.title" @click="selectComponents(item.title)">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </template>
                </v-list>
            </v-navigation-drawer>
        </div>
        <div class="profiledata__right box">
            <UserDetails v-if="isSelected('Profile')"></UserDetails>
            <ActivityDetails v-if="isSelected('Activities')"></ActivityDetails>
            <GroupDetails v-if="isSelected('Groups')"></GroupDetails>
        </div>
    </div>
</template>

<script>
    import UserDetails from "../components/UserDetails";
    import ActivityDetails from "../components/ActivityDetails";
    import GroupDetails from "../components/GroupDetails";
    import { mapActions, mapGetters} from 'vuex'

    export default {
        name: "Profile",
        data () {
            return {
                width: 300,
                items: [
                    { title: 'Profile' },
                    { title: 'Groups' },
                    { title: 'Activities' }
                ],
                selectedComponent: 'Profile'
            }
        },
        components: {
            UserDetails,
            ActivityDetails,
            GroupDetails
        },
        computed:{
            ...mapGetters('userStore',['userSelfDetails'])
        },
        methods: {
            ...mapActions([ 'fetchUserDetails' ]),
            selectComponents(value) {
                this.selectedComponent = value
            },
            isSelected(value) {
                return this.selectedComponent === value
            }
        }
    }
</script>

<style lang="scss" scoped>
    .profiledata{
        margin-top: 65px;
        min-height: 500px;
        &__right{
            width:80%;
        }
        &__left{
            min-height: 600px;
            background: white;
            width: 20%;
        }
    }
    .profile{
        &__pic{
            border-radius: 100px;
        }
    }
    .subheading{
        color: #333333;
    }
    .box{
        display: inline-block;
    }
</style>
