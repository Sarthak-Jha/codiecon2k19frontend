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

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/createpost',
    name: 'createpost',
    component: () => import(/* webpackChunkName: "post" */ '../pages/CreatePost.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/newsfeeds',
    name: 'newsfeeds',
    component: newsfeeds
  },
  {
    path: '/login',
    name: 'loginpage',
    component: loginpage
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/groups',
    name: 'groups',
    component: Groups
  },
  {
    path: '/feedback',
    name: 'feedbackForm',
    component: feedback
  },
  {
    path: '/groupform',
    name: 'groupForm',
    component: groupForm
  },
  {
    path: '/postdetails',
    name: 'postDetails',
    component: postDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
