import { createRouter, createWebHistory } from 'vue-router';

import General from "./General"

const routes = [
    ...General,
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

// router.beforeEach((to, from, next) => {
//     const middleware:any = to.meta.middleware
//     if(to.meta.middleware){
//         middleware({ next});
//     }
//     return next();
// });

export default router;