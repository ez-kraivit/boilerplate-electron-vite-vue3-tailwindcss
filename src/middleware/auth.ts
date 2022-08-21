export default function log({ next , router }:any){
    // console.log(window.location);
    // if (!Cookies.get("token")){        
    //     router.push("/login");
    // }
    return next()
}