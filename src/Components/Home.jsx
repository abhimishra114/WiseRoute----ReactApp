import React, {useEffect} from 'react'
import Carousel from './Carousel';
import Typewriter from 'typewriter-effect';
import HomeScrolldown from './HomeScrolldown';
import HomeIntroduction from './HomeIntroduction';
import HomeBlock from './HomeBlock';
import HomeSlogan from './HomeSlogan';
import HomeFeatures from './HomeFeatures';
import HomeComp from './Homecomp'
import Whatwedo from './Whatwedo';
import {Link} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
const slides = [
  'https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg',
  'https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475660_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/10/14/04/21/frankfurt-1739362_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/01/13/18/55/leather-3080553_1280.jpg'
  ]
function Home() {
  useEffect(() => {
    AOS.init({duration: 3000});
}, [])
  return (
    <>
    <div className='overflow-hidden'>

    <main data-aos="flip-left" id='home' className='z-20'>
      <div className=' px-5 rounded-md lg:h-full container xl:w-2/3 mx-auto mt-20 relative'>
          <div className='text-white text-xl md:text-6xl p-5 font-bold absolute top-10 sm:top-28 lg:top-60 left-16 md:left-22 lg:left-28 z-30'>
            <Typewriter
                options={{
                  strings: ['Finance Advisors.', 'We love to Assist', 'Wise Route Financial Advisory'],
                  autoStart: true,
                  loop: true,
            }}
            />
            <h1 className='text-sm md:text-lg lg:text-xl'>Enabling Business Intelligence</h1>
            <button className='px-3 py-1 md:text-2xl text-sm text-black bg-white rounded-md'><Link to="/about">About us</Link></button>
          </div>
        <Carousel autoSlide={true}>
          {slides.map((s)=> (
            <img className='object-cover w-full' src={s} alt="" />
          ))}
        </Carousel>
      </div>
    </main>
    {/* scrolldown */}
    <HomeScrolldown/>
    {/* homeintroduction */}
    <HomeIntroduction/>
    {/* homeBlocks */}
    <HomeBlock/>
    {/* homeslogan */}
    <HomeSlogan/>
    {/* Homefeatures */}
    <HomeFeatures/>
    {/* software & clients */}
    <HomeComp/>
    {/* whatwedo */}
    <Whatwedo/>
    </div>
    </>
  );
}

export default Home;
