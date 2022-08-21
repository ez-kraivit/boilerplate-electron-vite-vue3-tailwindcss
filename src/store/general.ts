import  { ipcRenderer } from "electron"

import { Store as IStore } from "vuex/types/index"
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
        setLogin({commit}:IStore<string>, payload: ILogin):Promise<boolean>{
            ipcRenderer.send("resize-window",{width:1000,height:750})
            ipcRenderer.send("InputDemo",payload.username)
            return Promise.resolve(true)
        },
        setLogout({commit}:IStore<string>):Promise<boolean>{
            ipcRenderer.send("resize-window",{width:500,height:600})
            return Promise.resolve(true)
        }
    }
}