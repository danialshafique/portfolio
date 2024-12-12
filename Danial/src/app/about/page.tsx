import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import Image from 'next/image';
import Footer from '@/components/footer';


const About = () => {
  return (
    <>
  <main className='max-w-screen-2xl mx-auto bg-gray-300 h-auto min-h-[100vh]  flex flex-col md:flex-row font-sans pt-6  w-full overflow-hidden animate-fadeIn'>
    {/* left div */}
    <div className='w-full md:w-[40%] pt-12 flex justify-center'>
      <div className='h-[530px]  w-[350px] md:w-[450px] flex justify-center'>
        <Image
          className='h-[530px] w-[280px] '
          height={500}
          width={500}
          src="/Dani.png"
          alt=""
        />
      </div>
    </div>
    {/* right div */}
    <div className='w-full md:w-[60%] pt-20 pl-6 md:pl-10'>
      <p className='font-bold text-black text-[20px] md:text-[22px] mt-2 md:mt-3 lg:mt-4'>ABOUT ME</p>
      <h1 className='lg:text-[38px] font-bold sm:mt-6 mt-3 text-2xl'>Top Rated <span className='text-pink-800'>Front-End Web Developer</span></h1>
      <p className='text-gray-600 font-semibold sm:mt-12 mt-6 text-[16px] md:text-[17px]'>I am Danial Shafique, a Front-End Web Developer with expertise in Html, CSS, JavaScript TypeScript, and <br />Bootstrape Tailwind CSS. I create dynamic web-site that deliver seamless user experiences, <br /> driven by a passion for problem-solving and continuous learning.</p>
      {/* icon dives */}
      <div className='mt-10'>        
        <div className='flex flex-col md:flex-row md:gap-10 gap-6'>
          <div className='flex gap-2'>
            <div className='text-pink-800 font-extrabold text-3xl'><FaRegCircleCheck /></div>
            <p className='font-semibold sm:font-bold text-gray-700'>Front-End Web Expertise</p>
          </div>
          <div className="flex gap-2">
            <div className='text-pink-800 font-extrabold text-3xl'><FaRegCircleCheck /></div>
            <p className='font-semibold sm:font-bold text-gray-700'>Html, CSS,  React js, JavaScript, TypeScript, Tailwind CSS</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:gap-10 mt-6'>
          <div className="flex gap-2">
            <div className='text-pink-800 font-extrabold text-3xl'><FaRegCircleCheck /></div>
            <p className='font-semibold sm:font-bold text-gray-700'>Dynamic & Responsive Web-site</p>
          </div>
          <div className="flex gap-2">
            <div className='text-pink-800 font-extrabold text-3xl'><FaRegCircleCheck /></div>
            <p className='font-semibold sm:font-bold text-gray-700'>Innovation & Learning Focused</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <section id="about" className="bg-gray-200 py-16 px-6 sm:px-10 lg:px-20 max-w-screen-2xl mx-auto  w-full overflow-hidden animate-fadeIn">
      <h1 className='flex justify-center text-4xl font-bold text-gray-900'>Education</h1>

      {/* Education Section */}
      <div className="mt-10 max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg animate-fade-in-up">
        <h3 className="text-xl font-bold text-pink-800">Bachelors Degree in Computer Science</h3>
        <ul className="text-gray-600 mt-2  list-none">
          <li className='text-xl font-bold text-gray-800'>GC Unversity of Faisalabad</li>
          <li  className=' font-bold text-gray-500'>{'2022 - 2026 (Ongoing)'}</li>
        </ul>
      </div>
      <div className="mt-10 max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg animate-fade-in-up">
        <h3 className="text-xl font-bold text-pink-800">{'Intermediate (Pre-Engineering)'}</h3>
        <ul className="text-gray-600 mt-2  list-none">
          <li className='text-xl font-bold text-gray-800'>Government Islamia Graduate College, Faisalabad</li>
          <li  className=' font-bold text-gray-500'>{'2019 - 2021'}</li>
        </ul>
      </div>
      <div className="mt-10 max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg animate-fade-in-up">
        <h3 className="text-xl font-bold text-pink-800">Matriculation</h3>
        <ul className="text-gray-600 mt-2  list-none">
          <li className='text-xl font-bold text-gray-800'>Workers Welfare Higher Secondary School, Faisalabad</li>
          <li  className=' font-bold text-gray-500'>{'2018 - 2019'}</li>
        </ul>
      </div>


      {/* Certifications Section */}
      <h1 className='flex justify-center text-4xl font-bold text-gray-900 mt-16'>Certifications</h1>

      {/* Education Section */}
      {/* <div className="mt-10 max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg animate-fade-in-up">
        <h3 className="text-xl font-bold text-pink-800">Generative AI Web 3.0 and  Metaverse</h3>
        <ul className="text-gray-600 mt-2  list-none">
          <li className='text-xl font-bold text-gray-800'>Governor House Karachi</li>
          <li  className=' font-bold text-gray-500'>{'2024-2025 (Ongoing)'}</li>
        </ul>
      </div> */}
      <div className="mt-10 max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg animate-fade-in-up">
        <h3 className="text-xl font-bold text-pink-800">Certified Web Development</h3>
        <ul className="text-gray-600 mt-2  list-none">
          <li className='text-xl font-bold text-gray-800'>National Vocational & Technical Training Commission</li>
          <li  className=' font-bold text-gray-500'>{'2021-2021 '}</li>
        </ul>
      </div>
    </section>
  <Footer/>
</>

  )
}

export default About
