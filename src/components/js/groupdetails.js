import {mapGetters, mapActions}  from 'vuex'

export default {
    name: "GroupDetails",
    data: () => ({
        lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
    }),
    computed: {
        ...mapGetters('postStore',['getAllGroupsByUser'])
    },
    methods: {
        ...mapActions('searchStore', ['fetchUserList'])
    },
    mounted () {
        console.log('allah',this.getAllGroupsByUser)
        let data = {
            searchTerm: ''
        }
        this.fetchUserList({data})
    }
}