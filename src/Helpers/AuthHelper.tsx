import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginType } from "../Models/LoginType";



interface ProviderProps {
    user:  string | null,
    token:  string,
    login (data: LoginType ): void,
    logout() :void,
}

const AuthContext = createContext<ProviderProps>({
    user: null,
    token: '',
    login: () => {},
    logout: () => {}
})

export const randomAlphaNumeric = (length: number) => {
    let s = '';
    Array.from({ length }).some(() => {
      s += Math.random().toString(36).slice(2);
      return s.length >= length;
    });
    return s.slice(0, length);
};

const AuthProvider = ({ children }: { children: React.ReactNode}) => {
    const storedInfo =  localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null
    const [user, setUser ] = useState<string | null>(storedInfo?.email)
    const [ token, setToken ] = useState( storedInfo?.token || '')
    const navigate = useNavigate()
    const login = async (loginRequest:LoginType ) => {
        var user = await apiLogin(loginRequest)
        localStorage.setItem('user',JSON.stringify(user))
        navigate('/')
    }
    const logout = () => {
        setUser(null)
        setToken('')
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{ user,token, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}

async function apiLogin(loginRequest: LoginType) {
      var user = await axios({
        method: 'post',
        url: process.env.REACT_APP_API_URL+'/auth/register',
        data: loginRequest, 
        headers: {
         // 'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json'
        }, 
      })
      return user;
}
