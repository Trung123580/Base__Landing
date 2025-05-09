import {useState} from 'react'
import Button from '../components/Button'
import {useApp} from '../context/AuthProvider'
import {getDevice, handleLogin, handleLogout} from '../utils/base'
import {useSelector} from 'react-redux'
import {type RootState} from '../store/store'

const Header = () => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const {isAuthenticated} = useApp()
  const {siteConfig} = useSelector((store: RootState) => store.storeApp)
  const handleShowMenu = () => {
    setIsShow(!isShow)
  }
  const linkDowLoad = () => {
    const check = getDevice()
    if (check === 'ADR') {
      return siteConfig?.download_android_link ?? ''
    }
    if (check === 'IOS') {
      return siteConfig?.download_ios_link ?? ''
    }
    return siteConfig?.download_apk_link ?? ''
  }
  const handleClickLink = (e: any, link?: string) => {
    if (link) return
    e.preventDefault()
    alert('coming soon')
  }
  return (
    <>
      <section className="md:hidden block h-[75px] bg-red">
        <div className="max-w-[644px] mx-auto flex items-center h-full gap-x-2 px-5">
          <h1>
            <a href={'/'}>
              <img className="object-contain aspect-[100/100]" src={'/assets/header/logo.png'} width={100} height={100} alt={''}/>
            </a>
          </h1>
          <div className="flex">
            {isAuthenticated ? <Button onClick={() => handleLogout({key: ['token']})}> 
              <img className="object-contain aspect-[233/66]" src={'/assets/header/btn-logout.png'} width={233} height={66} alt={''}/>
            </Button> : <Button onClick={() => handleLogin({redirectUrl: process.env.NEXT_PUBLIC_REDIRECT_URL as string})}>
              <img className="object-contain aspect-[233/66]" src="/assets/header/btn-login.png" width={233} height={66} alt={''}/>
            </Button>}
            <a className="inline-block" onClick={(e) => handleClickLink(e, linkDowLoad())} href={linkDowLoad() ?? '#'} target="_blank">
              <img className="object-contain aspect-[233/66]" src={'/assets/header/btn-download.png'} width={233} height={66} alt={''}/>
            </a>
          </div>
          <Button className={`btnMobileMenu ${isShow ? 'active' : ''} aspect-[40/31]`} onClick={handleShowMenu}>
            <span/>
            <span/>
            <span/>
          </Button>
        </div>
      </section>
      <section className={`absolute top-[74px] h-full z-40 bg-black w-full transition-all duration-300 ${isShow ? 'block' : 'hidden'}`}>
        <div className="text-white flex flex-col *:py-[21px] *:pl-[35px] text-base font-semibold tracking-wider *:border-b-2 *:border-[#383838]">
          <a onClick={(e) => handleClickLink(e, undefined)} href={'/'}>Trang chủ</a>
          <a target="_blank" href={siteConfig?.fb_page_link ?? '#'}>Fanpage</a>
          <a target="_blank" href={siteConfig?.fb_group_link}>Group</a>
          <a target="_blank" href={siteConfig?.page_payment_url}>Nạp Tiền</a>
        </div>
      </section>
    </>
  )
}
export default Header
