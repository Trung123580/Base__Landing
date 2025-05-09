import useResize from '../components/hook/useResize'

const Footer = () => {
  const {size} = useResize()
  if (size > 768) {
    return (
      <section className="flex flex-col items-center justify-center">
        <h1 className="mb-5">
          <img width={174}  className='object-contain' src={`https://website-assets-cdn.vtvlive.vn/logoVlive/Vplay-PoweredbyONLive/logo-Vplay-Primary.png`} alt='' />
          {/* <Image className="object-contain aspect-[153/47]" src={'/assets/event/logo.png'} width={153} height={47} alt={''}/> */}
          {/* <img className="object-contain aspect-[153/47]" src={'https://website-assets-cdn.vtvlive.vn/logoVlive/Vplay/logo-Vplay-Primary.png'} width={153} height={47} alt={''}/> */}
        </h1>
        <div className="roboto-medium text-xl text-center *:leading-8">
          <h3>Hotline: <a href={'tel:1900866666'}>1900866666</a> - Email: hotro@vplay.vn - Chơi quá 180 phút một ngày sẽ ảnh hưởng xấu đến sức khỏe</h3>
          <h3>Vplay phân phối độc quyền tại Việt Nam. Địa chỉ: Tầng 7, tòa nhà VTVCab, Số 3, Ngõ 84 Ngọc Khánh, Phường Ngọc Khánh, quận Ba Đình, Thành Phố Hà Nội.
          </h3>
          {/* <h3>Giấy phép phê duyệt nội dung số 372/QĐ-BTTTT cấp ngày 25/03/2024</h3> */}
        </div>
      </section>
    )
  }
  return (
    <section className="flex flex-col items-center justify-center pt-2">
      <h1>
        <img width={154}  className='object-contain' src={`https://website-assets-cdn.vtvlive.vn/logoVlive/Vplay-PoweredbyONLive/logo-Vplay-Primary.png`} alt='' />
        {/* <img className="object-contain aspect-[153/47]" src={'https://website-assets-cdn.vtvlive.vn/logoVlive/Vplay/logo-Vplay-Primary.png'} width={153} height={47} alt={''}/> */}
        {/* <Image className="object-contain aspect-[153/47] " src={'/assets/event/logo.png'} width={153} height={47} alt={''}/> */}
      </h1>
      <div className="roboto-medium text-xl text-center">
        <h3>Hotline: <a href={'tel:1900866666'}>1900866666</a> - Email: hotro@vplay.vn</h3>
        <h3>Vplay phân phối độc quyền tại Việt Nam. Địa chỉ: Tầng 7, tòa nhà VTVCab,<br></br> Số 3, Ngõ 84 Ngọc Khánh, Phường Ngọc Khánh, quận Ba Đình, Thành Phố Hà Nội.
        </h3>
        {/* <h3>Giấy phép phê duyệt nội dung số 372/QĐ-BTTTT cấp ngày 25/03/2024</h3> */}
      </div>
    </section>
  )
}
export default Footer
