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
                            <v-text-field
                                    label="Location"
                                    name="location"
                                    type="text"
                                    v-if="showLocationField()"
                            ></v-text-field>
                            <v-text-field
                                    label="Price"
                                    name="price"
                                    type="numeric"
                                    v-if="showPriceField()"
                            ></v-text-field>
                            <v-col>
                                <v-select
                                        v-model="value"
                                        :items="items"
                                        attach
                                        chips
                                        label="Post Type"
                                        multiple
                                ></v-select>
                            </v-col>
                            <v-col>
                                <v-select
                                        v-model="value"
                                        :items="items"
                                        attach
                                        chips
                                        label="Tags"
                                        multiple
                                ></v-select>
                            </v-col>
                            <v-list-item>
                                <v-file-input
                                        :rules="rules"
                                        accept="image/png, image/jpeg, image/bmp"
                                        placeholder="Pick a group icon"
                                        prepend-icon="mdi-camera"
                                        label="Icon"
                                        v-if="showImageField()"
                                ></v-file-input>
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
            catgeoryType: [
                'Accomodation', 'Electronics', 'Household', 'Vehicles', 'Activities', 'Discussion', 'Miscllaneous',
            ],
            items: ['foo', 'bar', 'fizz', 'buzz'],
            value: [],
            rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    },
    computed: {
      ...mapGetters('postStore',['selectedCategory'])
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
