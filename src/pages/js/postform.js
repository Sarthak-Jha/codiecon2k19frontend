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
