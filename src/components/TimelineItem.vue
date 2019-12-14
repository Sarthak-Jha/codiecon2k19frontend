<template>
    <v-timeline-item large>
        <template v-slot:icon>
            <v-avatar>
            <img :src="imageArr.imageArr[index]" class="iconimg">
            </v-avatar>
        </template>
        <template v-if="alignment" v-slot:opposite>
            <v-card class="elevation-2">
                <v-card-title class="headline">{{timelinedata.heading}}</v-card-title>
                <v-card-text style="text-align: left;">{{timelinedata.desc}}</v-card-text>
            </v-card>
        </template>
        <template v-if="!alignment">
            <v-card class="elevation-2">
                <v-card-title class="headline">{{timelinedata.heading}}</v-card-title>
                <v-card-text>{{timelinedata.desc}}</v-card-text>
            </v-card>
        </template>

    </v-timeline-item>
</template>

<script>
import imageArr from '@/assets/categoryicon/icons'
export default {
    name: 'timelineitem',
    data () {
        return {
            imageArr: [],
            index: 0
        }
    },
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
    created () {
        this.imageArr = imageArr
        this.index = this.timelinedata.index
    }
}
</script>

<style>
.iconimg {
    object-fit: cover;
    width: 35px;
    height: 35px;
}
</style>