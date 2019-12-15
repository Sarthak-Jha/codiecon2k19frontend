export default {
    api: { 
        base_path: {
            auth: '10.177.68.18:8079/auth/api/v1',
            post: '10.177.68.18:8091/api/v1',
            solr: '10.177.68.18:8060/api/v1',
            base: '/api/v1',
        },
        users: {
            login: '/login',
            register: '/register',
            logout: '/logout',
            checkUsername: '/checkUsername',
            session: '/session',
            validate: '/validate'
        },
        posts: {
            addPost: '/addPost',
            deletePost: function (postId) {
                return '/post' + postId
            },
            addComment: function (postId) {
                return `/post/${postId}/addComment`
            },
            closePost: function (postId) {
                return `/post/${postId}/closePost`
            },
            getCommentsByPostId: function (postId) {
                return `/post/${postId}/getCommentsByPostId`
            },
            addLike: function (postId) {
                return `/post/${postId}/addLike`
            },
            addGroup: '/post/addGroup',
            addMember: function (groupId) {
                return '/post/addMember/' + groupId
            },
            addViewCount: function (postId) {
                return '/post/addViewCount/' + postId
            },
            deleteMember: function (groupId) {
                return '/post/deleteMember/' + groupId
            },
            getAllCategories: '/post/getAllCategories',
            getAllGroups: '/post/getAllGroups',
            getAllLocations: '/post/getAllLocations',
            getAllTags: '/post/getAllTags',
            getFormFeilds: function (category) {
                return '/post/getFormFeilds/' + category
            },
            getGroupsByUser: '/post/getGroupsByUser',
            setCategory: '/post/setCategory',
            setForm: '/post/setForm',
            getSelf: '/user/getSelf'
        },
        search: {
            search: '/search',
            userAutoComplete: '/userAutoComplete'
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
