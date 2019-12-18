import GroupDetails from "@/components/GroupDetails";
import {mapActions} from 'vuex'

export default {
    name: 'Groups',
    components: {
        GroupDetails
    },
    methods: {
        ...mapActions('postStore', ['allGroupsByUser'])
    },
    mounted () {
        let data = {
            Authorization: 'Bearer ' + this.$session.get('token')
        }
        this.allGroupsByUser({data})
    }
}