import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../pages/LandingPage.vue'
import Profile from '../pages/Profile.vue'
import newsfeeds from '../pages/NewsFeeds'
import loginpage from '../pages/LoginPage'
import register from '../pages/SignUp'
import Groups from '../pages/Groups'
import feedback from '../pages/FeedbackForm'
import groupForm from '../pages/GroupForm'
import postDetails from '../pages/PostDetails'
import CreatePost from "../components/CreatePost"
import PostForm from "../pages/Postform";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../pages/Profile.vue')
  },
  {
    path: '/newsfeeds',
    name: 'newsfeeds',
    component: () => import(/* webpackChunkName: "newsfeeds" */ '../pages/NewsFeeds')
  },
  {
    path: '/login',
    name: 'loginpage',
    component: () => import(/* webpackChunkName: "login" */ '../pages/LoginPage')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../pages/SignUp')
  },
  {
    path: '/groups',
    name: 'groups',
    component: () => import(/* webpackChunkName: "groups" */ '../pages/Groups')
  },
  {
    path: '/feedback',
    name: 'feedbackForm',
    component: () => import(/* webpackChunkName: "feedbackform" */ '../pages/FeedbackForm')
  },
  {
    path: '/groupform',
    name: 'groupForm',
    component: () => import(/* webpackChunkName: "groupform" */ '../pages/GroupForm')
  },
  {
    path: '/postdetails',
    name: 'postDetails',
    component: postDetails
  },
  {
    path: '/userdetail',
    name: 'UserDetail',
    component: () => import(/* webpackChunkName: "userdetail" */ '../pages/UserDetail')
  },
  {
    path: '/createpost',
    name: 'CreatePost',
    component: CreatePost
  },
  {
    path: '/postform',
    name: 'postForm',
    component: PostForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      let hash = to.hash
      return { selector: hash }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})

export default router
