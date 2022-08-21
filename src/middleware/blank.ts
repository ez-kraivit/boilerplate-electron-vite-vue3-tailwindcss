export default function log({ next, router }:any){
    // if (Cookies.get("token")){
    //     router.push("/");
    // }
    return next()
}