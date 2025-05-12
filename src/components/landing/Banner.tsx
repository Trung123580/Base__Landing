import { handleConcatPathImage } from "../../utils/helpers"

const Banner = () => {
  return (
    <section className=' relative'>
      {/* banner */}
      <picture>
        <source media='(max-width: 768px)' srcSet={handleConcatPathImage({ path: "/assets/landing/768/banner.jpg" })} />
        <source media='(min-width: 769px)' srcSet={handleConcatPathImage({ path: "/assets/landing/1920/banner.jpg" })} />
        <img src={handleConcatPathImage({ path: "/assets/landing/1920/banner.jpg" })} className="w-full" alt='logo' />
      </picture>
      {/* logo-18 */}
      <picture className='absolute top-0.5 md:top-0 right-16 md:left-0'>
        <source media='(max-width: 768px)' srcSet={handleConcatPathImage({ path: "/assets/landing/768/logo-18.png" })} />
        <source media='(min-width: 769px)' srcSet={handleConcatPathImage({ path: "/assets/landing/1920/logo-18.png" })} />
        <img src={handleConcatPathImage({ path: "/assets/landing/1920/logo-18.png" })} alt='logo' />
      </picture>
      {/* logo-game */}
      <picture className='absolute top-[17px] left-[151px] md:left-[573px]'>
        <source media='(max-width: 768px)' srcSet={handleConcatPathImage({ path: "/assets/landing/768/logo-game.png" })} />
        <source media='(min-width: 769px)' srcSet={handleConcatPathImage({ path: "/assets/landing/1920/logo-game.png" })} />
        <img src={handleConcatPathImage({ path: "/assets/landing/1920/logo-game.png" })} alt='logo-game' />
      </picture>
      {/* title-banner */}
      <div className='absolute md:bottom-[46px] bottom-[107px] w-full'>
        <img src={handleConcatPathImage({ path: "/assets/landing/title-banner.png" })} className="aspect-[550/409] mx-auto" alt='title-banner' />
      </div>
    </section>
  )
}

export default Banner
