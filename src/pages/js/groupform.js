import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'groupForm',
    data () {
        return {
            rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
            ],
            file: null,
            imageUrl: null,
            newData: {
                file: null,
                fileType: '',
                type: ''
            },
            groupImageURl: '',
            groupMembers: [],
            groupName: ''
        }
    },
    computed: {
        ...mapGetters('userStore', ['userSelfDetails']),
        ...mapGetters('searchStore', ['getUserList'])
    },
    methods: {
        ...mapActions('postStore', ['getUploadLinkImage', 'submitGroupForm','allGroupsByUser']),
        saveImage() {
            let reader = new FileReader()
            reader.onload = () => {
                this.imageUrl = reader.result
            }
            reader.readAsDataURL(this.file)
        },
        onUpload() {
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
            this.groupImageURl = res.body.uploadLink
        },
        submitForm () {
            let data = {
                creatorId: this.userSelfDetails.userId,
                groupName: this.groupName,
                groupImage: this.groupImageURl,
                groupMemberList: this.groupMembers,
            }
            let head = {
                token: this.$session.get('token')
            }
            this.submitGroupForm({data, head})
            data = {
                Authorization: 'Bearer ' + this.$session.get('token')
            }
            this.allGroupsByUser({data})
            this.$router.push('/groups')
        }
    }
}
