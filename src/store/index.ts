import { createStore } from "vuex"

import general from "./general"

export default createStore({
    modules:{
        general,
    } as any
})