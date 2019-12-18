import { mapActions } from "vuex";

export default {
    name: 'register',
    data () {
        return {
            registerData: {
                firstName: '',
                lastName: '',
                phnNo: '',
                password: '',
                mailId: '',
                userName: ''
            },
            successMessage: {
                status: false,
                message: ''
            },
            error: {
                status: false,
                message: ''
            }
        }
    },
    methods: {
        ...mapActions('userStore',[
            'validateRegister',
            'verifyRegister'
        ]),
        handleSubmit () {
            if (this.validate()) {
                this.registerData.phnNo = '+91'+this.registerData.phnNo
                let data = this.registerData
                this.verifyRegister({
                    data,
                    success: this.verifyRegisterSuccess,
                    fail: this.validateRegisterFail
                })
            }
        },
        verifyRegisterSuccess () {
            let data = this.registerData
            this.validateRegister({
                data,
                success: this.validateRegisterSuccess,
                fail: this.validateRegisterFail
            })
        },
        resetError () {
            this.error.status = false
            this.error.message = ''
        },
        resetSuccessMessage () {
            this.successMessage.status = false
            this.successMessage.message = ''
        },
        validateRegisterSuccess (res) {
            if (res.body.responseObject) {
                this.resetError()
                this.successMessage.status = true
                this.successMessage.message = 'Successfully registered'
                this.$router.push('/login')
            } else {
                this.resetSuccessMessage()
                this.error.status = true
                this.error.message = res.body.apiResponseStatus.message
            }
        },
        validateRegisterFail (res) {
            this.resetError()
            this.resetSuccessMessage()
            this.error.status = true
            this.error.message = res.body.apiResponseStatus.message
        },
        validate () {
            if (this.registerData.userName.trim() == '' || this.registerData.password.trim() == ''
            || this.registerData.mailId.trim() == '' || this.registerData.firstName.trim() == ''
            || this.registerData.lastName.trim() == '' || this.registerData.phnNo.trim() == '' ) {
                return false
            }
            return true
        }
    }
}
