import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
function HomeSlogan() {
  useEffect(() => {
    AOS.init({duration: 3000});
}, [])
  return (
    <>
        <div data-aos="fade-down" class="bg-gradient-to-b from-dark-gray to-fade-gray rounded-lg p-8 lg:px-36 mt-8 px-10  container mx-auto">
            <div class="flex flex-col gap-4">
                <h1 class="text-lg text-primary-main-blue">“The important thing about outsourcing or global sourcing is that it becomes a very powerful tool to leverage talent, improve productivity and reduce work cycles.”</h1>
                <h1 class="ml-auto text-2xl ">- Azim Premji</h1>
            </div>
        </div>
    </>
  )
}

export default HomeSlogan