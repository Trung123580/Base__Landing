import {createContext, useContext, useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import {getListConfig, getRegisterQuantity, getSiteConfig, getVplayUserInfo} from '../services'
import {useDispatch} from 'react-redux'

type AuthContextType = {
  accessToken: string | null
  isAuthenticated: boolean
  vplayId: number | null
  vplayUsername: string | null
  authData?: any
  siteConfig?: any
}

const initialAuthData: AuthContextType = {
  accessToken: null,
  isAuthenticated: false,
  vplayId: null,
  vplayUsername: null,
  authData: null,
  siteConfig: null,
}

export const AuthContext = createContext({} as AuthContextType)

const AuthProvider = ({children}: { children: React.ReactNode }) => {
  const [authData, setAuthData] = useState<AuthContextType>(initialAuthData)
  const cookieToken = Cookies.get('token')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSiteConfig() as any)
    dispatch(getRegisterQuantity() as any)
    dispatch(getListConfig() as any)
  }, [dispatch])

  useEffect(() => {
    if (cookieToken) {
      const getToken = async () => {
        const vplayUserInfo = await getVplayUserInfo(cookieToken)
        const id = vplayUserInfo?.AccountID
        const username = vplayUserInfo?.AccountName
        const isAuthenticated = cookieToken ? true : false
        setAuthData({
          accessToken: cookieToken,
          isAuthenticated: isAuthenticated,
          vplayId: id,
          vplayUsername: username,
        })
      }
      getToken()
    }
  }, [cookieToken])
  return (
    <AuthContext.Provider
      value={{
        accessToken: authData.accessToken,
        isAuthenticated: authData.isAuthenticated,
        vplayId: authData.vplayId,
        vplayUsername: authData.vplayUsername,
        authData,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useApp = () => useContext(AuthContext)
export default AuthProvider
