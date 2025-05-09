import React, {Suspense, useEffect, useRef} from 'react'
// import {getSystem} from '@/utils/base'
const ScaleLayout = ({children, className, transformWrapperClassName}: { transformWrapperClassName?: string, children: React.ReactNode; className?: string }) => {
  // const searchParams = useSearchParams()
  // const pathName = usePathname()
  const refWrapper = useRef<HTMLDivElement | null>(null)
  const scaleLayout = () => {
    const ww = window.innerWidth
    // const transformWrapper = document.getElementById('transformWrapper')
    if (!refWrapper.current) return
    const baseSize = ww > 768 ? (ww > 1920 ? 2560 : 1920) : 768
    const newScale = ww / baseSize
    refWrapper.current.style.transform = 'scale(' + newScale + ')'
  }
  // useEffect(() => {
  //   const scrollTo = searchParams.get("scrollTo")
  //   if (scrollTo) {
  //     document.getElementById(scrollTo)?.scrollIntoView({
  //       behavior: "smooth",
  //     })
  //   }
  // }, [searchParams])
  useEffect(() => {
    scaleLayout()
  }, [])
  useEffect(() => {
    // const transformWrapper = document.getElementById('transformWrapper')
    // // const footer = document.getElementById("footer")
    // const wrapperContent = document.querySelector(".wrapperContent")
    // const device = getSystem()
    // const checkDevice = getDevice()
    // if (transformWrapper && device !== 'PC') {
    //   transformWrapper.classList.add('isHome')
    // }
    window.addEventListener('resize', scaleLayout)
    return () => {
      window.removeEventListener('resize', scaleLayout)
    }
  }, [])

  return (
    <Suspense>
      <section className={className ?? 'h-dvh'}>
        <div id="scaleWrapper">
          <div id="transformWrapper" className={transformWrapperClassName} ref={refWrapper}>
            {children}
          </div>
        </div>
      </section>
    </Suspense>
  )
}
export default ScaleLayout
