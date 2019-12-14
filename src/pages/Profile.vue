<template>
    <div class="profiledata">
        <v-card
                class="mx-auto"
        >
            <v-avatar
                    class="profile"
                    size="164"
                    tile
            >
                <v-img class="profile__pic" src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
            <div class="profiledata__text">Name: <label>Mark Observer</label></div>
            <div class="profiledata__text">Address: <label>Mark Observer awfjafafa afigafiafa ,fafigafkaf akfgaifkaf.</label></div>
            <div class="profiledata__text">Contact: <label>8914xxxx90</label></div>
            <div class="profiledata__text">DOB: <label>21/09/1992</label></div>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style lang="scss" scoped>
    .profiledata{
        margin-top: 65px;
        &__text{
            margin: 20px;
            font-weight: bold;
            font-size: 20px;
            font-family: sans-serif;
        }
    }
    .mx-auto{
        display: flex;
        flex-flow: Column;
        justify-content: center;
        align-items: center;
    }
    .profile{
        &__pic{
            border-radius: 100px;
        }
    }
</style>
