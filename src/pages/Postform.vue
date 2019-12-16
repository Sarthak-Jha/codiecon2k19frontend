<template>
    <div class="postForm">
        <v-card>
            <v-toolbar
                    class="postForm__header"
                    dark
            >
                <v-toolbar-title>{{ this.selectedCategory.categoryName}}</v-toolbar-title>
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
                                    item-value="id"
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
                            <v-list-item @click=""
                                 v-if="showStartDateField()"
                            >
                                <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        min-width="290px"
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
                            <v-list-item @click=""
                                 v-if="showEndDateField()"
                            >
                                <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        min-width="290px"
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
                            <v-list-item></v-list-item>
                            <v-row justify="center">
                                <v-dialog v-model="dialog" persistent max-width="290">
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="primary" dark v-on="on">Submit</v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title class="headline">Are You Sure?</v-card-title>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="green darken-1" text @click="dialog = false">No</v-btn>
                                            <v-btn color="green darken-1" text @click="submitForm()">Yes</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-row>
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
            },
            dialog: false,
            currentPage: 1
        }
    },
    computed: {
      ...mapGetters('postStore',['selectedCategory','getAllLocations','getAllTags','getAllPostType','getImageUploadLink'])
    },
    methods: {
        ...mapActions('postStore', ['getUploadLinkImage','submitPostForm']),
        ...mapActions('searchStore', ['makeSearch']),
        showLocationField () {
            if(this.selectedCategory.categoryName !== 'Discussion' && this.selectedCategory.categoryName !== 'Miscllaneous') {
                return true
            }
        },
        showPriceField () {
            if(this.selectedCategory.categoryName !== 'Discussion' && this.selectedCategory.categoryName !== 'Miscllaneous') {
                return true
            }
        },
        showImageField () {
            if(this.selectedCategory.categoryName !== 'Activities' && this.selectedCategory.categoryName !== 'Miscllaneous') {
                return true
            }
        },
        showStartDateField () {
            if(this.selectedCategory.categoryName === 'Activities') {
                return true
            }
        },
        showEndDateField () {
            if(this.selectedCategory.categoryName === 'Activities') {
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
            if(this.selectedCategory.categoryName === 'Accomodation' || this.selectedCategory.categoryName === 'Electronics' || this.selectedCategory.categoryName === 'HouseHold' || this.selectedCategory.categoryName === 'Vehicles') {
                let photo = this.postImageUrl.split(",")
                let data = {
                    category: this.selectedCategory.categoryId,
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
            } else if(this.selectedCategory.categoryName === 'Activities') {
                let startEpoch = new Date(this.postStartDate).getTime()
                let endEpoch = new Date(this.postEndDate).getTime()
                let data = {
                    category: this.selectedCategory.categoryId,
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
            } else if(this.selectedCategory.categoryName === 'Discussion') {
                let photo = this.postImageUrl.split(",")
                let data = {
                    category: this.selectedCategory.categoryId,
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
                    category: this.selectedCategory.categoryId,
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
            if (!this.$route.query.category) {
                let data = {
                    'category' : 'all'
                }
                this.makeSearch({
                    data,
                    success: this.success,
                    fail: this.fail,
                    apiParam: this.currentPage
                })
            }
            this.dialog = false
            this.$router.push('/newsfeeds')
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
