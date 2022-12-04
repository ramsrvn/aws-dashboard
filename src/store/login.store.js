import { makeAutoObservable } from "mobx";
import { http } from '@/utils'
import { setToken, getToken, clearToken} from '@/utils/token'
class LoginStore {
    token = getToken || ""
    constructor(){
        makeAutoObservable(this)
    }
    login = async ({mobile,code})=>{
        const res = await http.post('http://geek.itheima.net/v1_0/authorizations',{
            mobile,
            code
        })
        console.log('登录的res',res)
        this.token = res.data.token
        setToken(this.token)
    }
    loginOut = () => {
        this.token = ''
        clearToken()
    }
}

export default LoginStore