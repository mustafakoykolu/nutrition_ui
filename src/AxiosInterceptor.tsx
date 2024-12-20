import axios from "axios";

var _token ="";
export default function AxiosInterceptor(token:string){
    _token=token;
}
// request interceptor
axios.interceptors.request.use((config)=>{
    return config;
})