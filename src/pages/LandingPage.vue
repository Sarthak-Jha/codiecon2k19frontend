<template>
    <main>
        <div class="parallax">
            <section class="welcome">
                <input class="welcome__search" type="text" placeholder="What are you upto today?">
            </section>
            <section class="paragraph">
                Some of the Popular Categories to look into...
                <section class="cards">
                    <div class="text-center"  v-for="tag in tags" :key="tag">
                        <activitycard :category="tag" @categorychoosen="selectCategory">
                        </activitycard>
                    </div>
                </section>
            </section>
            <section>
                <div class="heading">
                    <h1>Our Solutions</h1>
                </div>
                <v-timeline>
                    <div v-for="data in timelinedata" :key="data.index">
                        <timelineitem :timelinedata="data">
                        </timelineitem>
                    </div>
                </v-timeline>
            </section>
        </div>
    </main>
</template>

<script>
import timelineitem from '../components/TimelineItem'
import activitycard from '../components/ActivityCard'

export default {
    name: "LandingPage",
    components: {
        timelineitem,
        activitycard
    },
    data () {
        return {
            tags: [
                'all',
                'tall',
                'ball',
                'call',
                'zoll'
            ],
            timelinedata: [{
                'index': 0,
                'heading': 'Buy',
                'desc' : 'You can buy things within the organisation from the people around you',
            },{
                'index': 1,
                'heading': 'Sell',
                'desc' : 'You can sell things within the organisation from the people around you',
            },{
                'index': 2,
                'heading': 'Rent',
                'desc' : 'You can rent things within the organisation from the people around you',
            },{
                'index': 3,
                'heading': 'Borrow',
                'desc' : 'You can borrow things within the organisation from the people around you',
            },{
                'index': 4,
                'heading': 'Activity',
                'desc' : 'You can create activities like sports etc within the organisation from the people around you',
            },{
                'index': 5,
                'heading': 'Flat Sharing',
                'desc' : 'You can find flatmates within the organisation from the people around you',
            },{
                'index': 6,
                'heading': 'And More to Come...',
                'desc' : 'We promise to keep on addding more services on discussion board...',
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
.text-center {
    margin: 10px 10px;
}
.cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 80px;
}
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
