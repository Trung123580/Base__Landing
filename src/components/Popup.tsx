import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {type RootState} from '../store/store'
import {togglePopup} from '../store/storeAction'

const Popup = () => {
  const {popup: {isShow}} = useSelector((store: RootState) => store.storeAction)
  const dispatch = useDispatch()
  useEffect(() => {
    const transformWrapper: HTMLDivElement | null = document.querySelector('#scaleWrapper')
    if (isShow.status) {
      transformWrapper?.classList.add('no-scroll')
      return
    }
    if (!isShow.status && transformWrapper?.classList.contains('no-scroll')) {
      transformWrapper?.classList.remove('no-scroll')
    }
  }, [isShow.status])

  const handleRemovePopup = () => dispatch(togglePopup({
    ...isShow,
    status: false,
    popupForm: {
      thele: false,
      gift: false
    }
  }))
  if (isShow.status) {
    return (
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full right-0 bottom-0 bg-[#000]/80 z-30" onClick={handleRemovePopup}>
        
      </div>
    )
  }
  return null
}
export default Popup
