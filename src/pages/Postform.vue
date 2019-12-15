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
                                    v-model="postTitle"
                                    label="Title"
                                    name="title"
                                    type="text"
                            ></v-text-field>
                            <v-textarea
                                    v-model="postDescription"
                                    label="Description"
                            ></v-textarea>
                            <v-select
                                    :items="getAllLocations"
                                    label="Location"
                                    hide-details
                                    item-text="name"
                                    v-model="postLocation"
                                    v-if="showLocationField()"
                            ></v-select>
                            <v-text-field
                                    label="Price"
                                    name="price"
                                    type="numeric"
                                    v-model="postPrice"
                                    v-if="showPriceField()"
                            ></v-text-field>
                            <v-select
                                    v-model="postType"
                                    :items="getAllPostType"
                                    attach
                                    label="Post Type"
                            ></v-select>
                            <v-select
                                    v-model="postTags"
                                    :items="getAllTags"
                                    attach
                                    chips
                                    item-text="tagName"
                                    label="Tags"
                                    multiple
                            ></v-select>
                            <v-file-input
                                    :rules="rules"
                                    accept="image/png, image/jpeg, image/bmp"
                                    placeholder="Pick a Image for your post"
                                    prepend-icon="mdi-camera"
                                    label="Icon"
                                    v-model="file"
                                    @change="saveImage()"
                                    v-if="showImageField()"
                            ></v-file-input>
                            <v-btn color="primary" @click="onUpload" v-if="showImageField()">Upload</v-btn>
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
                                                v-model="postStartDate"
                                                label="Start date"
                                                readonly
                                                v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                            ref="picker"
                                            v-model="postStartDate"
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
                                                v-model="postEndDate"
                                                label="End date"
                                                readonly
                                                v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                            ref="picker"
                                            v-model="postEndDate"
                                            min="1950-01-01"
                                            @change="save"
                                    ></v-date-picker>
                                </v-menu>
                            </v-list-item>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" @click="submitForm()">Submit</v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card-text>
                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

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
            postTags: [],
            postType: [],
            postImageUrl: '',
            postStartDate: null,
            postEndDate: null,
            file: null,
            imageUrl: null,
            newData: {
                file: null,
                fileType: '',
                type: ''
            }
        }
    },
    computed: {
      ...mapGetters('postStore',['selectedCategory','getAllLocations','getAllTags','getAllPostType','getImageUploadLink'])
    },
    methods: {
        ...mapActions('postStore', ['getUploadLinkImage','submitPostForm']),
        showLocationField () {
            if(this.selectedCategory !== 'Discussion' && this.selectedCategory !== 'Miscllaneous') {
                return true
            }
        },
        showPriceField () {
            if(this.selectedCategory !== 'Discussion' && this.selectedCategory !== 'Miscllaneous') {
                return true
            }
        },
        showImageField () {
            if(this.selectedCategory !== 'Activities' && this.selectedCategory !== 'Miscllaneous') {
                return true
            }
        },
        showStartDateField () {
            if(this.selectedCategory === 'Activities') {
                return true
            }
        },
        showEndDateField () {
            if(this.selectedCategory === 'Activities') {
                return true
            }
        },
        saveImage () {
            let reader = new FileReader()
            reader.onload = () => {
                this.imageUrl = reader.result
            }
            reader.readAsDataURL(this.file)
        },
        onUpload () {
            this.newData.file = this.file
            this.newData.fileType = this.file.type
            this.newData.type = this.file.type
            let data = this.newData
            debugger
            this.getUploadLinkImage({
                data,
                success: this.saveUploadLink,
                fail: this.saveUploadFail
            })
        },
        saveUploadLink (res) {
            this.postImageUrl = res.body.uploadLink
        },
        submitForm () {
            if(this.selectedCategory === 'Accomodation' || this.selectedCategory === 'Electronics' || this.selectedCategory === 'HouseHold' || this.selectedCategory === 'Vehicles') {
                let photo = this.postImageUrl.split(",")
                let data = {
                    category: this.selectedCategory,
                    title: this.postTitle,
                    description: this.postDescription,
                    location: this.postLocation,
                    price: parseFloat(this.postPrice),
                    type: this.postType,
                    tags: this.postTags,
                    photoLinks: photo[0].split(",")
                }
                let head = {
                    token: this.$session.get('token')
                }
                this.submitPostForm({data, head})
            } else if(this.selectedCategory === 'Activities') {
                let startEpoch = new Date(this.postStartDate).getTime()
                let endEpoch = new Date(this.postEndDate).getTime()
                let data = {
                    category: this.selectedCategory,
                    title: this.postTitle,
                    description: this.postDescription,
                    location: this.postLocation,
                    price: parseFloat(this.postPrice),
                    type: this.postType,
                    tags: this.postTags,
                    startTime: startEpoch,
                    endTime: endEpoch
                }
                let head = {
                    token: this.$session.get('token')
                }
                this.submitPostForm({data, head})
            } else if(this.selectedCategory === 'Discussion') {
                let photo = this.postImageUrl.split(",")
                let data = {
                    category: this.selectedCategory,
                    title: this.postTitle,
                    description: this.postDescription,
                    type: this.postType,
                    tags: this.postTags,
                    photoLinks: photo[0].split(",")
                }
                let head = {
                    token: this.$session.get('token')
                }
                this.submitPostForm({data, head, success: this.emptyFields()})
            } else {
                let data = {
                    category: this.selectedCategory,
                    title: this.postTitle,
                    description: this.postDescription,
                    type: this.postType,
                    tags: this.postTags,
                }
                let head = {
                    token: this.$session.get('token')
                }
                this.submitPostForm({data, head})
            }
        },
        emptyFields() {
            this.postTitle = '',
            this.postDescription = '',
            this.postImageUrl = '',
            this.file = null,
            this.postLocation = '',
            this.postTags = [],
            this.postType = [],
            this.postStartDate = null,
            this.postEndDate = null,
            this.postPrice = ''
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
