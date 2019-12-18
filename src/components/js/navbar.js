import { mapActions, mapGetters } from "vuex";

export default {
    name: "Navbar",
    data () {
        return {
            state: "close",
            currentPage: 1,
            searchTerm: ''
        }
    },
    computed: {
        ...mapGetters(
            'userStore',[
                'isLoggedIn'
        ]),
        login () {
            if(this.isLoggedIn.status || this.$session.get('isLoggedIn')) {
                return true
            } 
            return false
        },
        show: function () {
            console.log('This is my lola',window.location.pathname)
            if ( window.location.pathname === '/') {
                return false
            }
            return true
        }
    },
    methods: {
        ...mapActions('userStore',[
            'doLogout'
        ]),
        ...mapActions('searchStore',['makeSearch']),
        logout () {
            let data = {
                token: this.$session.get('token') 
            }
            this.doLogout({
                data
            })
            this.$session.destroy();
            sessionStorage.setItem('isLoggedIn', false);
            sessionStorage.setItem('token', '');
            this.$store.commit('userStore/setUserDetails', {
                status : false
            })
            this.$router.push('/')
        },
        searchNews () {
            let data = {
                'category': "ALL",
                'text': this.searchTerm
            }
            this.makeSearch({
                data,
                success: this.success,
                fail: this.fail,
                apiParam: this.currentPage
            })
            this.$router.push({ path: 'newsfeeds', query: { category : 'search' }})
        }
    }
}