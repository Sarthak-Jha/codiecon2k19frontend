<template>
    <div class="userDetail">
        <v-row align="end" class="lightbox black--text pa-2 fill-height">
            <v-col>
                <v-avatar
                        class="profile"
                        size="150"
                        tile
                >
                    <v-img class="profile__pic" src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                </v-avatar>
            </v-col>
        </v-row>
        <div class="userData">{{fullname}}</div>
        <div class="userData">{{userSelfDetails.mailId}}</div>
        <div class="userData">{{userSelfDetails.phoneNumber}}</div>
        <div class="userData">Intrests:</div>
        <div class="userDataList">
            <div v-for="val in item.interest">
                <span class="list"> {{val}} </span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

    export default {
        name: "UserDetails",
        data () {
            return {
                item: {
                    interest: [
                        'badminton',
                        'cricket',
                        'football'
                    ]
                }
            }
        },
        computed:{
            ...mapGetters('userStore',['userSelfDetails']),
            fullname () {
                console.log("hss", this.userSelfDetails)
                return this.userSelfDetails.firstName + ' ' + this.userSelfDetails.lastName
            }

        },
    }
</script>

<style lang="scss" scoped>
    .userDetail{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .userData{
        color: black;
        font-family: sans-serif;
        margin: 15px;
        font-size: 18px;
        font-weight: bold;
    }
    .profile{
        &__pic{
            border-radius: 100px;
        }
    }
    .userDataList{
        color: black;
        font-family: sans-serif;
        margin: 15px;
        font-size: 18px;
        display: flex;
        flex-flow: row;
    }
    .list{
        background-color: white;
        padding: 10px;
        margin: 10px;
    }
</style>
