import { createRouter, createWebHashHistory } from 'vue-router';

import General from "./General"

const routes = [
    ...General,
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    const middleware:any = to.meta.middleware
    if(to.meta.middleware){
        middleware({ next , router  });
    }
    return next();
});

export default router;