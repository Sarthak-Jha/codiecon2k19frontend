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

<script src='./js/timelineitem.js'></script>

<style lang="scss" scoped>
.iconimg {
    object-fit: cover;
    width: 35px;
    height: 35px;
}
</style>