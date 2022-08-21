import Cookies from "js-cookie";

export default function log({ next }:any){
    // if (Cookies.get("token")){
    //     console.log('มี Auth');
        
    //     return window.location.href = "/";
    // }
    return next()
}