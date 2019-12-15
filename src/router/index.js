import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../pages/LandingPage.vue'

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
    component: () => import(/* webpackChunkName: "post" */ '../pages/CreatePost.vue'),
    meta      : {
			authentication: 'required'
		}
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../pages/Profile.vue'),
    meta      : {
			authentication: 'required'
		}
  },
  {
    path: '/newsfeeds',
    name: 'newsfeeds',
    component: () => import(/* webpackChunkName: "newsfeeds" */ '../pages/NewsFeeds'),
    meta      : {
			authentication: 'required'
		}
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
    component: () => import(/* webpackChunkName: "groups" */ '../pages/Groups'),
    meta      : {
			authentication: 'required'
		}
  },
  {
    path: '/feedback',
    name: 'feedbackForm',
    component: () => import(/* webpackChunkName: "feedbackform" */ '../pages/FeedbackForm'),
    meta      : {
			authentication: 'required'
		}
  },
  {
    path: '/groupform',
    name: 'groupForm',
    component: () => import(/* webpackChunkName: "groupform" */ '../pages/GroupForm'),
    meta      : {
			authentication: 'required'
		}
  },
  {
    path: '/postdetails',
    name: 'postDetails',
    component: () => import(/* webpackChunkName: "postdetails" */ '../pages/PostDetails'),
    meta      : {
			authentication: 'required'
		}
  },
  {
    path: '/userdetail',
    name: 'UserDetail',
    component: () => import(/* webpackChunkName: "userdetail" */ '../pages/UserDetail'),
    meta      : {
			authentication: 'required'
		}
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

router.beforeEach((to, from, next) => {
  let isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
  if (authenticationCheck(to) && isLoggedIn) {
    // console.log(' @@ MY SESSION (IF)= ', isLoggedIn)
    next();
  } else if (authenticationCheck(to) && !isLoggedIn){
    // console.log(' @@ MY SESSION (ELSE IF)= ', isLoggedIn)
    next({name: 'login'});
  } else {
    // console.log(' @@ MY SESSION (ELSE)= ', isLoggedIn)
    next()
  }
})

function authenticationCheck (route) {
  let flag = false
  if (route.meta.authentication === 'required') {
    flag = true
  } else {
    flag = false
  }
  return flag
}

export default router
