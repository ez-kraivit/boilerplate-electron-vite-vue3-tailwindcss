import blank from '../middleware/blank';
import auth from '../middleware/auth';

const routes = [
    {
        path: "/home",
        name: "Home",
        meta:{
            title: "Home",
            middleware: auth
        },
        component: () => import ("../views/Home.vue")
    },
    {
        path: "/",
        name: "Login",
        meta:{
            title: "Login",
            middleware: blank
        },
        component: () => import ("../views/Login.vue")
    },
    {
        path: "/register",
        name: "Register",
        meta:{
            title: "Register",
            middleware: blank
        },
        component: () => import ("../views/Register.vue")
    }
]

export default routes