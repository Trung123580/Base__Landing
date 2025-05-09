import dayjs from 'dayjs'
import Cookies from 'js-cookie'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import md5 from 'md5'

export const getSystem = () => {
  if (typeof window === 'undefined') return
  if (typeof navigator === 'undefined') return
  // @ts-expect-error: navigator may not be defined in some environments, but we expect it to be available in the browser.
  const userAgent = navigator?.userAgent || navigator?.vendor || window?.opera
  if (/windows phone/i.test(userAgent)) {
    return 'MB'
  }
  if (/android/i.test(userAgent)) {
    return 'MB'
  }
  // @ts-expect-error: navigator may not be defined in some environments, but we expect it to be available in the browser.
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'MB'
  }
  return 'PC'
}
export const getDevice = () => {
  if (typeof window === 'undefined') return
  if (typeof navigator === 'undefined') return
  // @ts-expect-error: navigator may not be defined in some environments, but we expect it to be available in the browser.
  const userAgent = navigator?.userAgent || navigator?.vendor || window?.opera
  if (/windows phone/i.test(userAgent)) {
    return 'WP'
  }
  if (/android/i.test(userAgent)) {
    return 'ADR'
  }
  // @ts-expect-error: navigator may not be defined in some environments, but we expect it to be available in the browser.
  if (/iPad|iPhone|iPod/.test(userAgent) && !window?.MSStream) {
    return 'IOS'
  }
  return 'PC'
}

export function idv4() {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) => (+c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))).toString(16))
}

export const formatNumber = (num: number) => {
  return num ? num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : '0'
}
export const validatePhone = (phone: string) => {
  const phoneRegex = /^(\+84|84|0)?[1-9]\d{8}$/
  return phoneRegex.test(phone)
}
export const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomString = (length: number) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return md5(result)
}
export const handleLogout = ({key}: { key: string[] }) => {
  key.forEach((key: string) => {
    Cookies.remove(key)
  })
  const redirectUrl = process.env.NEXT_PUBLIC_DOMAIN
  window.location.href = process.env.NEXT_PUBLIC_LOGIN_DOMAIN + '/api-core/v2/oidc-service/oauth2/session/end?client_id=' + process.env.NEXT_PUBLIC_APP_CLIENT_ID + '&post_logout_redirect_uri=' + redirectUrl
}
export const handleLogin = ({redirectUrl}: { redirectUrl: string }) => {
  const clientId = process.env.NEXT_PUBLIC_APP_CLIENT_ID
  const hostDomain = process.env.NEXT_PUBLIC_DOMAIN
  const urlCallBack = hostDomain + redirectUrl
  window.location.href = `${process.env.NEXT_PUBLIC_LOGIN_DOMAIN}/api-core/v2/oidc-service/oauth2/auth?client_id=${clientId}&&protocol=oauth2&response_type=code&redirect_uri=${urlCallBack}&state=${randomString(50)}&prompt=consent&scope=api_profile_get`
}
// date
export const formatViToEN = (date: string) => {
  const formatdayjs = dayjs(date).format('dddd, DD/MM/YYYY - HH:mm:ss')
  const dateData = formatdayjs.split(',')
  const firstDate = dateData[0]
  const lastDate = dateData[dateData.length - 1]
  const getHour = lastDate.split(' - ')[dateData.length - 1]
  const isDateNow = dayjs().format('DD/MM/YYYY') === lastDate.split(' - ')[0].trim()
  const tableDate = [
    {text: 'Monday', renderText: 'Thứ 2'},
    {text: 'Tuesday', renderText: 'Thứ 3'},
    {text: 'Wednesday', renderText: 'Thứ 4'},
    {text: 'Thursday', renderText: 'Thứ 5'},
    {text: 'Friday', renderText: 'Thứ 6'},
    {text: 'Saturday', renderText: 'Thứ 7'},
    {text: 'Sunday', renderText: 'Chủ Nhật'},
  ]
  const findDate = tableDate.find(({text}) => text === firstDate)
  const textCurrentDate = isDateNow ? `Hôm nay - ${getHour}` : null
  return {...findDate, lastDate, textCurrentDate, getHour}
}
export const convertDateLog = (date: string): string => {
  return dayjs(date).format('DD/MM/YYYY HH:mm')
}
export const convertDateTime = (date: string): string => {
  return dayjs(date).format('HH:mm')
}
export const convertDateNews = (date: string): string => {
  return dayjs(date).format('DD/MM/YY')
}
export const convertDateFullYear = (date: string): string => {
  return dayjs(date).format('DD/MM/YYYY')
}
// Cookies
export const setCookie = (key: string, value: string, time: string) => {
  let timeCookie = 1
  if (!key || !value || !time) {
    console.error('Invalid key, value, or time')
    return
  }
  if (time === '5p') timeCookie = 1 / 24 / 12 // 5 phút
  if (time === '10p') timeCookie = 1 / 24 / 6 // 10 phút
  if (time === '1h') timeCookie = 1 / 24 // 1 giờ
  if (time === '7d') timeCookie = 7 // 7 ngày
  if (time === '0') timeCookie = 0 // Không thời hạn
  // const domain = process.env.NEXT_PUBLIC_DOMAIN_COOKIE || 'localhost'
  try {
    Cookies.set(key, value, {
      // domain: domain,
      secure: true,
      expires: timeCookie,
    })
    console.log('Cookie set successfully')
  } catch (error) {
    console.error('Error setting cookie:', error)
  }
}
export const deleteCookie = (name: string) => {
  Cookies.remove(name, {path: '/', domain: `.${process.env.NEXT_PUBLIC_DOMAIN_COOKIE}`})
}
export const getCookie = (name: string) => {
  return Cookies.get(name) ?? ''
}
// localStorage
export const addLocalStorage = ({key, value}: { key: string, value: string }) => {
  localStorage.setItem(key, JSON.stringify(value))
}
export const getLocalStorage = (key: string) => {
  const pageName = localStorage.getItem(key)
  return pageName ? JSON.parse(pageName) : ''
}
export const deleteLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}
export const convertJsonToJs= (json: string) => {
  return json ? JSON.parse(json) : ''
}