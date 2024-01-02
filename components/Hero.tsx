import Image from 'next/image'
import Button from './Button'
// import 
const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
    style={{ backgroundImage: "url( '/treasure.jpg')", backgroundSize: 'cover', backgroundPosition: 'right' }}
     >
      {/* <section style={{ backgroundImage: "url( '/treasure.jpg')", opacity:'0.', backgroundSize: 'cover', backgroundPosition: 'right' }}/> */}
      {/* <div className='hero-map'/> */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 text-white hover:text-3xl ">Rustic Ridge Adventure Camp And Scavenger Hunt</h1>
        <p className="regular-16 mt-6 text-white font-extrabold xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. Rustic Ridge Adventure Camp offers an immersive outdoor experience, blending rustic charm with thrilling adventures against the scenic backdrop of a natural ridge.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-1">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-red-700">
            58k
            <span className="regular-16 text-red-500 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>


      </div>
      {/* <div className="relative z-[-20] xl:w-1/2">
          <Image 
            src="/treasure.jpg"
            alt="map"
            width={2000}
            height={500}
            className=" right-0 top-0 z-[-10] transform scale-200 bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60"
            // style={{ backgroundImage: "url( '/treasure.jpg')", backgroundSize: 'cover', backgroundPosition: 'right' }}
          />
      </div>  */}
      <div className="relative flex flex-col items-start bg-[/treasure.jpg]">
        
        <div className="relative z-20  flex w-[268px] flex-col md-5 gap-1 rounded-3xl bg-red-600 px-5 py-5">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Alps Mountains</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-20 w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Download App" 
            variant="text-red-100" 
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="text-red-100" 
          />
        </div>
      </div> 
    </section>
  )
}

export default Hero