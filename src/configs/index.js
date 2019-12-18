export default {
    api: {
        base_path: {
            auth: '10.177.68.224',
            post: '10.177.68.18:8091/api/v1',
            solr: '10.177.68.18:8060/api/v1',
            base: '/api/v1',
        },
        users: {
            login: ':8079/auth/api/v1/login',
            register: ':8079/auth/api/v1/register',
            logout: ':8079/auth/api/v1/logout',
            checkUsername: ':8079/auth/api/v1/checkUsername',
            session: ':8079/auth/api/v1/session',
            validate: ':8079/auth/api/v1/validate'
        },
        posts: {
            addPost: ':8091/post/api/v1/addPost',
            deletePost: function (postId) {
                return ':8091/post/api/v1/post' + postId
            },
            addComment: function (postId) {
                return `:8091/post/api/v1/post/${postId}/addComment`
            },
            closePost: function (postId) {
                return `:8091/post/api/v1/post/${postId}/closePost`
            },
            getCommentsByPostId: function (postId) {
                return `:8091/post/api/v1/post/${postId}/getComments`
            },
            addLike: function (data) {
                return `:8091/post/api/v1/post/${data.postId}/like?forLike=` + data.forLike
            },
            addGroup: ':8091/post/api/v1/post/addGroup',
            addMember: function (groupId) {
                return ':8091/post/api/v1/post/addMember/' + groupId
            },
            addViewCount: function (postId) {
                return ':8091/post/api/v1/post/addViewCount/' + postId
            },
            deleteMember: function (groupId) {
                return ':8091/post/api/v1/post/deleteMember/' + groupId
            },
            getAllCategories: ':8091/post/api/v1/post/getAllCategories',
            getAllGroups: ':8091/post/api/v1/post/getAllGroups',
            getAllLocations: ':8091/post/api/v1/post/getAllLocations',
            getAllTags: ':8091/post/api/v1/post/getAllTags',
            getAllTypes: ':8091/post/api/v1/user/getAllType',
            getFormFeilds: function (category) {
                return ':8091/post/api/v1/post/getFormFeilds/' + category
            },
            getGroupsByUser: ':8091/post/api/v1/post/getGroupsByUser',
            setCategory: ':8091/post/api/v1/post/setCategory',
            setForm: ':8091/post/api/v1/post/setForm',
            getSelf: ':8091/post/api/v1/user/getSelf',
            getUserDetails: function (userId) {
                return ':8091/post/api/v1/user/getUser/' + userId
            },
            imageUpload(data) {
                return ':8091/post/image/upload?fileType=' + data.fileType + '&type=' + data.type
            },
            getPost(data) {
                return ':8091/post/api/v1/getPost/' + data.postId
            }
        },
        search: {
            search: function (pageNumber){
                return `:8060/search/api/v1/search?pageNumber=${pageNumber}&pageSize=6`
            },
            userAutoComplete: ':8060/search/api/v1/userAutoComplete?search=%20&totalSize=20'
        }

    },
    getApiPath: function (apiPath) {
        return 'http://' + this.api.base_path.auth + apiPath
    },
    getApiPathPost: function (apiPath) {
        return 'http://' + this.api.base_path.post + apiPath
    },
    getApiPathSolr: function (apiPath) {
        return 'http://' + this.api.base_path.solr + apiPath
    },

}
