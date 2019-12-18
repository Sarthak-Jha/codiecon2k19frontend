
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'postDetails',
    data () {
        return {
            toggleAddComment: false,
            commentText: ''
        }
    },
    computed: {
        ...mapGetters('postStore', ['getPostDetails','getCommentList']),
        ...mapGetters('userStore', ['userSelfDetails']),
        likeCounts () {
            if(this.getPostDetails.likeCounts === undefined || this.getPostDetails.likeCounts === null) {
                return 0
            } else {
                return this.getPostDetails.likeCounts
            }
        },
        commentCounts () {
            if(this.getPostDetails.commentsCounts  === undefined || this.getPostDetails.commentsCounts === null) {
                return 0
            } else {
                return this.getPostDetails.commentsCounts
            }
        },
        toggleComment() {
            console.log("adafa")
            this.toggleAddComment = !this.toggleAddComment
        }
    },
    methods: {
        ...mapActions('postStore', ['uploadUserComment']),
        postComment () {
            let data = {
                commenterFirstName: this.userSelfDetails.firstName,
                commenterLastName: this.userSelfDetails.lastName,
                commenterImage: null,
                description: this.commentText,
                photoLink: null,
                postId: this.getPostDetails.postId
            }
            let head = {
                Authorization: 'Bearer ' + this.$session.get('token')
            }
            this.uploadUserComment({data, head})
        }
    }
}