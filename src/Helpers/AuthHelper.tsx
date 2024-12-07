import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginType } from "../Models/LoginType";
import { RegisterType } from "../Models/RegisterType";



interface ProviderProps {
    user:  string | null,
    token:  string,
    login (data: LoginType ): void,
    authorizeLoginUser (data: any ): void,
    register (data: RegisterType) :void,
    logout() :void,
}

const AuthContext = createContext<ProviderProps>({
    user: null,
    token: '',
    login: () => {},
    authorizeLoginUser: ()=>{},
    register: ()=>{},
    logout: () => {}
})


const AuthProvider = ({ children }: { children: React.ReactNode}) => {
    const storedInfo =  localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null
    const [user, setUser ] = useState(storedInfo)
    const [ token, setToken ] = useState( storedInfo?.token || '')
    const navigate = useNavigate()
    const login = async (loginRequest:LoginType ) => {
        try {
            var response = await apiLogin(loginRequest)
            return response;
        } catch (error:any) {
            console.log(error)
            return error.response;
        }
    }
    const authorizeLoginUser = async (user:any ) => {
        localStorage.setItem('user',JSON.stringify(user))
        setToken(user.token)
        setUser(user)
        navigate("/")
    }
    const register = async (registerRequest:RegisterType ) => {
        try {
            var response = await apiRegister(registerRequest)
            return response;
        } catch (error:any) {
            return error.response;
        }
    }
    const logout = () => {
        setUser(null)
        setToken('')
        localStorage.removeItem('user')
        navigate('/')
    }

    return (
        <AuthContext.Provider value={{ user, token, login, authorizeLoginUser, register, logout}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}

async function apiLogin(loginRequest: LoginType) {
    var response = await axios({
        method: 'post',
        url: process.env.REACT_APP_API_URL+'/auth/login',
        data: loginRequest, 
        headers: {
         // 'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json'
        }, 
      })
      return response;
}
async function apiRegister(registerRequest: RegisterType) {
    var response = await axios({
      method: 'post',
      url: process.env.REACT_APP_API_URL+'/auth/register',
      data: registerRequest, 
      headers: {
       // 'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json'
      }, 
    })
    return response;
}