<template>
    <v-timeline-item large>
        <template v-slot:icon>
            <v-avatar>
            <img :src="timelinedata.img">
            </v-avatar>
        </template>
        <template v-if="alignment" v-slot:opposite>
            <v-card class="elevation-2" @click="selectedOption(timelinedata.heading)">
                <v-card-title class="headline">{{timelinedata.heading}}</v-card-title>
                <v-card-text style="text-align: left;">{{timelinedata.desc}}</v-card-text>
            </v-card>
        </template>
        <template v-if="!alignment">
            <v-card class="elevation-2" @click="selectedOption(timelinedata.heading)">
                <v-card-title class="headline">{{timelinedata.heading}}</v-card-title>
                <v-card-text>{{timelinedata.desc}}</v-card-text>
            </v-card>
        </template>

    </v-timeline-item>
</template>

<script>
export default {
    name: 'timelineitem',
    props: {
        timelinedata: {
            type: Object,
            required: true,
            default: () => []
        }
    },
    computed: {
        alignment () {
            if (this.timelinedata.index % 2 === 0 ) {
                return true
            }
            return false
        }
    },
    methods: {
        selectedOption (id) {
            // console.log('id', id)
            this.$emit('categorychoosen', id)
        }
    }
}
</script>

<style>
.leftheading {
    text-align: left;
}
</style>