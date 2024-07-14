import Image from 'next/image'
import CustomButton from './CustomButton'

export default function Hero() {
  return (
    <div className="lg:px-16 px-7">
      <div className='container flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
        <div className='flex-1 pt-36 padding-x'>
          <h1 className="hero__title">
            Find, book, rent a car—quick and super easy!
          </h1>
          <p className="hero__subtitle">
            Streamline your car rental experience with our effortless booking
            process.
          </p>
          <CustomButton 
            text='Explore cars' 
            type='button' 
            style='text-white rounded-full bg-primary-blue min-w-[130px] mt-10' 
            
          />
        </div>
        <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
          <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'> 
            <Image 
              src='/hero.png' 
              alt="hero" 
              fill 
              className="object-contain" 
            />
          </div>
          <div className='bg-hero-bg absolute -z-10 w-full xl:h-screen h-[590px] xl:-top-24 xl:-right-1/2 -right-1/4 bg-repeat-round' />
        </div>
      </div>
  </div>
  )
}
