import Cookies from "js-cookie";

export default function log({ next }:any){
    // console.log(window.location);
    // if (!Cookies.get("token")){
    //     console.log('ไม่พบ Auth');
        
    //     return window.location.href = "/login";
    // }
    return next()
}