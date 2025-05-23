import Button from '../components/Button'
import {useSelector} from 'react-redux'
import {type RootState} from '../store/store'
import {useApp} from '../context/AuthProvider'
import {handleLogin, handleLogout} from '../utils/base'
import { handleConcatPathImage } from '../utils/helpers'
import { KEY_ENV } from '../utils/constant'

const Float = () => {
  const {siteConfig} = useSelector((store: RootState) => store.storeApp)
  const {isAuthenticated} = useApp()
  const handleClickLink = (e:any, link?: string) => {
    if (link) return
    e.preventDefault()
    alert('coming soon')
  }
  return (
    <section className="fixed top-1/2 right-0 -translate-y-1/2 z-20 md:block hidden xl:scale-100 lg:scale-[.85] md:scale-[.65] origin-top-right">
      <div className="relative w-max">
        <img className="relative z-20 object-contain aspect-[233/580]" src={handleConcatPathImage({path: '/assets/float/float-bg.png'})} width={233} height={580} alt={''}/>
        <div className="absolute top-14 left-[51px] w-[62%] z-20 h-full flex flex-col items-center gap-y-2">
          <div className='relative'>
            <img className="object-contain aspect-[105/105]" src={handleConcatPathImage({path: '/assets/float/logo.png'})} width={105} height={105} alt={''}/>
            <img className="object-contain aspect-[105/105] animation-laluot" src={handleConcatPathImage({path: '/assets/float/logo.png'})} width={105} height={105} alt={''}/>
          </div>
          <a target='_blank' href={KEY_ENV.VITE_APP_DOMAIN} className="">
            <img className="object-contain aspect-[137/43]" src={handleConcatPathImage({path: '/assets/float/trangchu.png'})} width={137} height={43} alt={''}/>
          </a>
          {isAuthenticated ?
            <Button className="" onClick={()=>handleLogout({key: ['token']})}>
              <img className="object-contain aspect-[156/44] scale-110" src={handleConcatPathImage({path: '/assets/float/logout-btn.png'})} width={156} height={44} alt={''}/>
            </Button> : <Button className="" onClick={() => handleLogin({redirectUrl: process.env.NEXT_PUBLIC_REDIRECT_URL as string})}>
              <img className="object-contain aspect-[156/44] scale-110" src={handleConcatPathImage({path: '/assets/float/login-btn.png'})} width={156} height={44} alt={''}/>
            </Button>
          }
          <a onClick={(e) => handleClickLink(e, siteConfig?.download_android_link)} href={siteConfig?.download_android_link ?? '#'} target="_blank" className="mt-1">
            <img className="object-contain aspect-[138/41] " src={handleConcatPathImage({path: '/assets/float/btn-ggplay.png'})} width={138} height={41} alt={''}/>
          </a>
          <a onClick={(e) => handleClickLink(e, siteConfig?.download_ios_link )} href={siteConfig?.download_ios_link ?? '#'} target="_blank">
            <img className="object-contain aspect-[138/41] " src={handleConcatPathImage({path: '/assets/float/btn-store.png'})} width={138} height={41} alt={''}/>
          </a>
          <a href={siteConfig?.fb_group_link ?? '#'} target="_blank" className="mt-1">
            <img className="object-contain aspect-[137/43] " src={handleConcatPathImage({path: '/assets/float/btn-group.png'})} width={137} height={43} alt={''}/>
          </a>
          <a href={siteConfig?.fb_page_link ?? '#'} target="_blank">
            <img className="object-contain aspect-[138/41] " src={handleConcatPathImage({path: '/assets/float/btn-fanpage.png'})} width={138} height={41} alt={''}/>
          </a>
          <a href={siteConfig?.page_payment_url ?? '#'} target="_blank" className="mt-1">
            <img className="object-contain aspect-[138/41] " src={handleConcatPathImage({path: '/assets/float/btn-nap.png'})} width={138} height={41} alt={''}/>
          </a>
        </div>
      </div>
    </section>
  )
}
export default Float
