import Cookies from 'js-cookie'
import { Store } from "vuex/types/index"

interface ILogin {
    username: string
    password: string
}

export default {
    namespaced: true,
    state: {
        token: null,
    },
    mutations: {
        setToken(state:{token:string}, token: string) {
            state.token = token;
        }
    },
    actions:{
        setLogin({commit}:Store<string>, payload: ILogin):Promise<boolean>{
            Cookies.set("token", 'asdasdasd', { expires: new Date(new Date().getTime() + 14400000), secure: true, sameSite: 'strict' })
            return Promise.resolve(true)
        },
        setLogout({commit}:Store<string>):Promise<boolean>{
            Cookies.remove("token")
            return Promise.resolve(true)
        }
    }
}