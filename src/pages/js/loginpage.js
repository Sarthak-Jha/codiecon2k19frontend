import { mapActions } from "vuex";

export default {
    name: 'loginpage',
    data () {
        return {
            loginData: {
                mailId: '',
                password: ''
            },
            error: {
                status: false,
                message: ''
            }
        }
    },
    methods: {
        ...mapActions('userStore',[
            'validateLogin',
            'fetchUserDetails'
        ]),
        ...mapActions(
        'postStore', [
            'allGroupsByUser'
        ]),
        handleSubmit () {
            let data = this.loginData
            if (this.validateCredentials) {
                this.validateLogin({
                    data,
                    success: this.validateLoginSuccess,
                    fail: this.validateLoginFail,
                })
            }
        },
        validateCredentials () {
            if (this.loginData.mailId.trim() == '' && this.loginData.password.trim() == '') {
                this.error.status = true
                this.error.message = "*All fields are required"
                return false
            }
            return true
        },
        validateLoginSuccess (resp) {
            if (resp.body.responseObject) {
                this.$session.set('isLoggedIn', true);
				sessionStorage.setItem('isLoggedIn', true);
				this.$session.set('token', resp.body.responseObject.oauth2AccessToken.access_token);
                sessionStorage.setItem('token', resp.body.responseObject.oauth2AccessToken.access_token);
                this.$session.set('refreshToken', resp.body.responseObject.oauth2AccessToken.refresh_token);
                sessionStorage.setItem('refreshToken', resp.body.responseObject.oauth2AccessToken.refresh_token);
                this.$store.commit('userStore/setUserDetails', {
					status : true,
					...resp.body.responseObject
                })
                let data = {
                    Authorization: 'Bearer ' + this.$session.get('token')
                }
                this.fetchUserDetails({
                    data
                })
                this.allGroupsByUser({
                    data
                })
                this.$router.push('/')
            } else {
                this.$store.commit('userStore/isLoggedIn', false);
				this.error.status = true;
				this.error.message = resp.body.apiResponseStatus.message;
            }
        }
    }
}
