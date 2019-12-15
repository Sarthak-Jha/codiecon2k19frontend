<template>
    <div class="postForm">
        <v-card>
            <v-toolbar
                    class="postForm__header"
                    dark
            >
                <v-toolbar-title>{{ this.selectedCategory }}</v-toolbar-title>
            </v-toolbar>
            <v-list>
                <v-list-item>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                    label="Title"
                                    name="title"
                                    type="text"
                            ></v-text-field>
                            <v-textarea
                                    label="Description"
                            ></v-textarea>
                            <v-select
                                    :items="states"
                                    label="Location"
                                    hide-details
                                    v-if="showLocationField()"
                            ></v-select>
                            <v-text-field
                                    label="Price"
                                    name="price"
                                    type="numeric"
                                    v-if="showPriceField()"
                            ></v-text-field>
                            <v-select
                                    v-model="value"
                                    :items="postTypeList"
                                    attach
                                    label="Post Type"
                            ></v-select>
                            <v-select
                                    v-model="value"
                                    :items="items"
                                    attach
                                    chips
                                    label="Tags"
                                    multiple
                            ></v-select>
                            <v-file-input
                                    :rules="rules"
                                    accept="image/png, image/jpeg, image/bmp"
                                    placeholder="Pick a Image for your post"
                                    prepend-icon="mdi-camera"
                                    label="Icon"
                                    v-if="showImageField()"
                            ></v-file-input>
                            <v-list-item @click="">
                                <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        min-width="290px"
                                        v-if="showStartDateField()"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                                v-model="date"
                                                label="Start date"
                                                readonly
                                                v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                            ref="picker"
                                            v-model="date"
                                            :max="new Date().toISOString().substr(0, 10)"
                                            min="1950-01-01"
                                            @change="save"
                                    ></v-date-picker>
                                </v-menu>
                            </v-list-item>

                            <v-list-item @click="">
                                <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        min-width="290px"
                                        v-if="showEndDateField()"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                                v-model="date"
                                                label="End date"
                                                readonly
                                                v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                            ref="picker"
                                            v-model="date"
                                            :max="new Date().toISOString().substr(0, 10)"
                                            min="1950-01-01"
                                            @change="save"
                                    ></v-date-picker>
                                </v-menu>
                            </v-list-item>
                            <v-list-item>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary">Submit</v-btn>
                                </v-card-actions>
                            </v-list-item>
                        </v-form>
                    </v-card-text>
                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'postForm',
    data () {
        return {
            rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
            ],
            postTitle: '',
            postDescription: '',
            postLocation: '',
            postPrice: '',
            postTypeList1: ['BUY', 'SELL', 'RENT'],
            postTypeList2: ['ACTIVITY', 'SEEKER', 'CONTRIBUTOR', 'OTHER'],
            postTypeList3:['DISCUSSION', 'OTHER'],
            postTypeList4: ['OTHER'],
            postTags: [],
            postTypeList: []
        }
    },
    computed: {
      ...mapGetters('postStore',['selectedCategory',''])
    },
    methods: {
        showLocationField () {
            if(this.selectedCategory !== 'Discussion Form' && this.selectedCategory !== 'Miscllaneous Form') {
                return true
            }
        },
        showPriceField () {
            if(this.selectedCategory !== 'Discussion Form' && this.selectedCategory !== 'Miscllaneous Form') {
                return true
            }
        },
        showImageField () {
            if(this.selectedCategory !== 'Activities Form' && this.selectedCategory !== 'Miscllaneous Form') {
                return true
            }
        },
        showStartDateField () {
            if(this.selectedCategory === 'Activities Form') {
                return true
            }
        },
        showEndDateField () {
            if(this.selectedCategory === 'Activities Form') {
                return true
            }
        }
    },
    mounted() {
        console.log("newewew")
        if(this.selectedCategory === 'Accomodation Form' || this.selectedCategory === 'Electronics Form' || this.selectedCategory === 'Household Form' ||this.selectedCategory === 'Vehicles Form') {
            this.postTypeList = this.postTypeList1
        } else if(this.selectedCategory === 'Activities Form') {
            this.postTypeList = this.postTypeList2
        } else if(this.selectedCategory === 'Discussion Form') {
            this.postTypeList = this.postTypeList3
        } else {
            this.postTypeList = this.postTypeList4
        }
    }
}
</script>

<style lang="scss" scoped>
.postForm{
    margin: 75px 40px 40px 40px;
    &__header{
        background-color: #1976d2;
    }
}
</style>
