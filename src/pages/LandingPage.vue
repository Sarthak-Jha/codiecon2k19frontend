<template>
    <main>
        <div class="parallax">
            <section class="welcome">
                <input class="search" type="text" placeholder="What are you upto today?">
            </section>
            <section class="paragraph">
                Some of the Popular Categories to look into...
                <div class="text-center">
                    <v-btn v-for="tag in tags" :key="tag" class="tag_button">{{tag}}</v-btn>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
    export default {
        name: "LandingPage",
        data () {
            return {
                tags: [
                    'all',
                    'tall',
                    'ball'
                ]
            }
        }
    }
</script>

<style scoped>
    .parallax {
        /* The image used */
        background-image: url("../assets/low_poly_smoke_purple-2560x1440.jpg");
        /* Set a specific height */
        min-height: 1000px;

        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .welcome {
        min-height: 400px;
    }
    .search {
        position: relative;
        color: #777;
        opacity: 0.6;
        background-color: #ffffff;
        filter: alpha(opacity=60);
        border-radius: 30px; 
        text-align:center;
        min-height: 50px;
        min-width: 500px;
        margin: 14vw 55vh;
        outline: none;
    }
    .paragraph {
        color: #777;
        opacity: 0.6;
        background-color: #ffffff;
        filter: alpha(opacity=60);
        text-align:center;
        min-height: 300px;
        padding:50px 80px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
    }
    
</style>
