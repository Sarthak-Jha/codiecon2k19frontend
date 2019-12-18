
import UserDetails from "@/components/UserDetails.vue"
import ActivityDetails from "@/components/ActivityDetails.vue"
import GroupDetails from "@/components/GroupDetails.vue"
import { mapActions, mapGetters} from 'vuex'

export default {
    name: "Profile",
    data () {
        return {
            width: 300,
            items: [
                { title: 'Profile' },
                { title: 'Groups' },
                { title: 'Activities' }
            ],
            selectedComponent: 'Profile'
        }
    },
    components: {
        UserDetails,
        ActivityDetails,
        GroupDetails
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
        },
        self () {
            if(this.$route.query.userId) {
                return false
            }
            return true
        }
    },
    methods: {
        ...mapActions('userStore',[ 'fetchUserDetails' ]),
        selectComponents(value) {
            this.selectedComponent = value
        },
        isSelected(value) {
            return this.selectedComponent === value
        }
    }
}