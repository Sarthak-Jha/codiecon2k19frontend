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
            addPost: '/post/api/v1/addPost',
            deletePost: function (postId) {
                return '/post/api/v1/post' + postId
            },
            addComment: function (postId) {
                return `/post/api/v1/post/${postId}/addComment`
            },
            closePost: function (postId) {
                return `/post/api/v1/post/${postId}/closePost`
            },
            getCommentsByPostId: function (postId) {
                return `/post/api/v1/post/${postId}/getCommentsByPostId`
            },
            addLike: function (postId) {
                return `/post/api/v1/post/${postId}/addLike`
            },
            addGroup: '/post/api/v1/post/addGroup',
            addMember: function (groupId) {
                return '/post/api/v1/post/addMember/' + groupId
            },
            addViewCount: function (postId) {
                return '/post/api/v1/post/addViewCount/' + postId
            },
            deleteMember: function (groupId) {
                return '/post/api/v1/post/deleteMember/' + groupId
            },
            getAllCategories: '/post/api/v1/post/getAllCategories',
            getAllGroups: '/post/api/v1/post/getAllGroups',
            getAllLocations: '/post/api/v1/post/getAllLocations',
            getAllTags: '/post/api/v1/post/getAllTags',
            getFormFeilds: function (category) {
                return '/post/api/v1/post/getFormFeilds/' + category
            },
            getGroupsByUser: '/post/api/v1/post/getGroupsByUser',
            setCategory: '/post/api/v1/post/setCategory',
            setForm: '/post/api/v1/post/setForm',
            getSelf: '/post/api/v1/user/getSelf',
            getUserDetails: function (userId) {
                return '/post/api/v1/user/getUser' + userId
            }
        },
        search: {
            search: '/search/api/v1/search',
            userAutoComplete: '/search/api/v1/userAutoComplete'
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
