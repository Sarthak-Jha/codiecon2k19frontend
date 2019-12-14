<template>
    <main>
        <div class="parallax">
            <section class="welcome">
                <input class="welcome__search" type="text" placeholder="What are you upto today?">
            </section>
            <section class="paragraph">
                Some of the Popular Categories to look into...
                <div class="text-center">
                    <v-btn v-for="tag in tags" :key="tag" class="tag_button">{{tag}}</v-btn>
                </div>
            </section>
            <section>
                <div class="heading">
                    <h1>Our Solutions</h1>
                </div>
                <v-timeline>
                    <div v-for="data in timelinedata" :key="data.index">
                        <timelineitem :timelinedata="data" @categorychoosen="selectCategory">
                        </timelineitem>
                    </div>
                </v-timeline>
            </section>
        </div>
    </main>
</template>

<script>
import timelineitem from '../components/TimelineItem'

export default {
    name: "LandingPage",
    components: {
        timelineitem
    },
    data () {
        return {
            tags: [
                'all',
                'tall',
                'ball'
            ],
            timelinedata: [{
                'index': 0,
                'heading': 'Buy',
                'desc' : 'You can buy things within the organisation from the people around you',
                'img' : '../assets/categoryicon/buy.svg'
            },{
                'index': 1,
                'heading': 'Sell',
                'desc' : 'You can sell things within the organisation from the people around you',
                'img' : '../assets/categoryicon/sell.svg'
            },{
                'index': 2,
                'heading': 'Rent',
                'desc' : 'You can rent things within the organisation from the people around you',
                'img' : '../assets/categoryicon/rent.svg'
            },{
                'index': 3,
                'heading': 'Borrow',
                'desc' : 'You can borrow things within the organisation from the people around you',
                'img' : '../assets/categoryicon/loan.svg'
            },{
                'index': 4,
                'heading': 'Activity',
                'desc' : 'You can create activities like sports etc within the organisation from the people around you',
                'img' : '../assets/categoryicon/social.svg'
            },{
                'index': 5,
                'heading': 'Flat Sharing',
                'desc' : 'You can find flatmates within the organisation from the people around you',
                'img' : '../assets/categoryicon/flat.svg'
            },{
                'index': 6,
                'heading': 'And More to Come...',
                'desc' : 'We promise to keep on addding more services on discussion board...',
                'img' : '../assets/categoryicon/flat.svg'
            }]
        }
    },
    methods: {
        selectCategory (name) {

        }
    }
}
</script>

<style lang="scss" scoped>
.heading {
    align-self: center;
    background: #ffffff;
    border-radius: 10px;
    margin: 100px 500px 0px 500px;
    text-align: center;
}
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
    min-height: 500px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__search {
        position: relative;
        color: #777;
        opacity: 0.6;
        background-color: #ffffff;
        filter: alpha(opacity=60);
        border-radius: 30px;
        text-align:center;
        min-height: 50px;
        min-width: 550px;
        outline: none;
    }
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
