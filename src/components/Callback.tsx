import {useEffect} from 'react'
import Cookies from 'js-cookie'
import { getCallBack } from '../services'
const Callback = () => {
  const searchParams = new URLSearchParams(window.location.search)
  useEffect(() => {
    (async () => {
      const response = await getCallBack({searchParams: searchParams, callBackUrl: '/callback'})
      if (!response?.data) window.history.back()
      Cookies.set('token', response?.access_token, {expires: 1 / 24})
      window.location.href = import.meta.env.VITE_APP_DOMAIN as string
    })()
  }, [])
  return <></>
}

export default Callback
