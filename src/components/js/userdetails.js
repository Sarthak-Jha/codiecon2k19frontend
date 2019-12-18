import { mapGetters, mapActions } from 'vuex'
import { parse } from 'path'

export default {
    name: "UserDetails",
    data () {
        return {
            self: true,
            item: {
                interest: [
                    'badminton',
                    'cricket',
                    'football'
                ]
            }
        }
    },
    mounted () {
        console.log('mounted is called here')
        if (this.$route.query.userId) {
            let apiParam = this.$route.query.userId
            let head = {
                token: this.$session.get('token')
            }
            console.log('kkkkkklaslas', apiParam)
            this.getUserById({
                head: head, 
                success: this.success, 
                fail: this.fail, 
                apiParams: apiParam
            })
        } else {
            let data = {
                Authorization: 'Bearer ' + this.$session.get('token')
            }
            this.fetchUserDetails({
                data
            })

        } 
    },
    computed:{
        ...mapGetters('userStore',['userSelfDetails']),
        ...mapGetters('postStore',['getTheUserById']),
        fullname () {
            console.log("hss", this.userSelfDetails)
            return this.userSelfDetails.firstName + ' ' + this.userSelfDetails.lastName
        },
        fullnameO () {
            return this.getTheUserById.firstName + ' ' + this.getTheUserById.lastName
        }
    },
    methods: {
        ...mapActions('postStore',['getUserById']),
        ...mapActions('userStore',[ 'fetchUserDetails' ]),
        success () {
            this.self = false
        },
        fail () {
            this.self  = true
        }
    }
}
