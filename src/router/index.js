import Vue from 'vue'
import VueRouter from 'vue-router'
const Landing = () => import(/* webpackChunkName: "landing" */ '../pages/LandingPage.vue')
const CreatePost = () => import(/* webpackChunkName: "createpost" */ '../components/CreatePost')
const PostForm = () => import(/* webpackChunkName: "postform" */'../pages/Postform')
const Profile = () => import(/* webpackChunkName: "profile" */ '../pages/Profile.vue')
const NwesFeeds = () => import(/* webpackChunkName: "newsfeeds" */ '../pages/NewsFeeds')
const Login = () => import(/* webpackChunkName: "login" */ '../pages/LoginPage')
const Register = () => import(/* webpackChunkName: "register" */ '../pages/SignUp')
const Groups = () => import(/* webpackChunkName: "groups" */ '../pages/Groups')
const FeedbackForm = () => import(/* webpackChunkName: "feedbackform" */ '../pages/FeedbackForm')
const GroupForm = () => import(/* webpackChunkName: "groupform" */ '../pages/GroupForm')
const PostDetails =  () => import(/* webpackChunkName: "postdetails" */ '../pages/PostDetails')
const UserDetail = () => import(/* webpackChunkName: "userdetail" */ '../pages/UserDetail')
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
    component: Profile,
    meta      : {
			authentication: 'required'
		}
  },
  {
    path: '/newsfeeds',
    name: 'newsfeeds',
    component: NwesFeeds,
    meta      : {
			authentication: 'required'
		}
  },
  {
    path: '/login',
    name: 'loginpage',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/groups',
    name: 'groups',
    component: Groups,
    meta      : {
			authentication: 'required'
		}
  },
  {
    path: '/feedback',
    name: 'feedbackForm',
    component: FeedbackForm,
    meta      : {
			authentication: 'required'
		}
  },
  {
    path: '/groupform',
    name: 'groupForm',
    component: GroupForm,
    meta      : {
			authentication: 'required'
		}
  },
  {
    path: '/postdetails',
    name: 'postDetails',
    component: PostDetails,
    meta      : {
			authentication: 'required'
		}
  },
  {
    path: '/userdetail',
    name: 'UserDetail',
    component: UserDetail,
    meta      : {
			authentication: 'required'
		}
  },
  {
    path: '/createpost',
    name: 'CreatePost',
    component: CreatePost,
    meta      : {
      authentication: 'required'
    }
  },
  {
    path: '/postform',
    name: 'postForm',
    component: PostForm,
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
  let isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn'))
  if (authenticationCheck(to) && isLoggedIn) {
    // console.log(' @@ MY SESSION (IF)= ', isLoggedIn)
    next();
  } else if (authenticationCheck(to) && !isLoggedIn){
    // console.log(' @@ MY SESSION (ELSE IF)= ', isLoggedIn)
    next('/login');
    // next();
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
