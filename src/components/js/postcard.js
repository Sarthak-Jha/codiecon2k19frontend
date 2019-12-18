import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'postCard',
    props: {
        postData: {
            type: Object,
            required: true,
            default: () => {}
        }
    },
    computed: {
        getName () {
            return this.postData.posterFirstName + '' + this.postData.posterLastName
        },
        image () {
            if (this.postData.photoLinks) {
                return true
            }
            return false
        },
        showPrice () {
            if( this.postData.price == 0) {
                return false
            }
            return true
        }
    },
    methods: {
        ...mapActions('postStore', ['addLikeToPost','fetchPostDetails','fetchCommentList']),
        handleLike () {
            this.postData.alreadyLiked = !this.postData.alreadyLiked
            let data = {
                postId: this.postData.postId,
                forLike: this.postData.alreadyLiked
            }
            let head = {
                token: this.$session.get('token')
            }
            this.addLikeToPost({data, head})
            if(this.postData.alreadyLiked) {
                this.postData.likeCounts = this.postData.likeCounts + 1
            } else {
                this.postData.likeCounts = this.postData.likeCounts - 1
            }

        },
        readFullPost () {
            let data = {
                postId: this.postData.postId
            }
            let head = {
                token: this.$session.get('token')
            }
            this.fetchPostDetails({data, head})
            data = {
                postId: this.postData.postId
            }
            this.fetchCommentList({data})
            this.$router.push('/postdetails')
        },
        routeToProfile () {
            this.$router.push({ path: 'Userdetail', query: { userId : this.postData.postedBy }})
        }
    }
}
