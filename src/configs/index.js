export default {
    api: { 
        base_path: {
            auth: '10.177.68.18:8079',
            post: '10.177.68.18:8091/api/v1',
            solr: '10.177.68.18:8060/api/v1',
            base: '/api/v1',
        },
        users: {
            login: '/auth/api/v1/login',
            register: '/auth/api/v1/register',
            logout: '/auth/api/v1/logout',
            checkUsername: '/auth/api/v1/checkUsername',
            session: '/auth/api/v1/session',
            validate: '/auth/api/v1/validate'
        },
        posts: {
            addPost: '/api/v1/addPost',
            deletePost: function (postId) {
                return '/api/v1/post' + postId
            },
            addComment: function (postId) {
                return `/api/v1/post/${postId}/addComment`
            },
            closePost: function (postId) {
                return `/api/v1/post/${postId}/closePost`
            },
            getCommentsByPostId: function (postId) {
                return `/api/v1/post/${postId}/getCommentsByPostId`
            },
            addLike: function (postId) {
                return `/api/v1/post/${postId}/addLike`
            },
            addGroup: '/api/v1/post/addGroup',
            addMember: function (groupId) {
                return '/api/v1/post/addMember/' + groupId
            },
            addViewCount: function (postId) {
                return '/api/v1/post/addViewCount/' + postId
            },
            deleteMember: function (groupId) {
                return '/api/v1/post/deleteMember/' + groupId
            },
            getAllCategories: '/api/v1/post/getAllCategories',
            getAllGroups: '/api/v1/post/getAllGroups',
            getAllLocations: '/api/v1/post/getAllLocations',
            getAllTags: '/api/v1/post/getAllTags',
            getFormFeilds: function (category) {
                return '/api/v1/post/getFormFeilds/' + category
            },
            getGroupsByUser: '/api/v1/post/getGroupsByUser',
            setCategory: '/api/v1/post/setCategory',
            setForm: '/api/v1/post/setForm',
            getSelf: '/api/v1/user/getSelf',
            getUserDetails: function (userId) {
                return '/api/v1/user/getUser' + userId
            }
        },
        search: {
            search: '/api/v1/search',
            userAutoComplete: '/api/v1/userAutoComplete'
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
