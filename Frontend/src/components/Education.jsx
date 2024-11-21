import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'
import { IoIosBook } from 'react-icons/io'

const Education = () => {
  return (
    <div className='mb-24'>
      <h1 className='mb-8 text-gray-200 font-bold text-center text-2xl'>
        Education
      </h1>
      <div className='mx-4 md:grid md:grid-cols-3 md:max-w-6xl md:space-x-6 md:mx-auto md:px-4'> {/* Reduced space here */}
        {/* Degree Card */}
        <div className='mb-12 max-w-96 mx-auto flex flex-col bg-blue-950 bg-opacity-50 border border-bronze shadow-lg rounded-lg overflow-hidden md:h-full'>
          <FaGraduationCap className='w-24 h-24 text-bronze mx-auto mt-4' />
          <div className='flex-grow p-4 flex flex-col'>
            <h2 className='text-xl text-center text-bronze font-bold mb-2 md:mb-8'>
              Bachelor's Degree
            </h2>
            <p className='text-gray-50 flex-grow'>
              I completed a Bachelor's degree in <span className='font-semibold text-bronze'>Cyber security</span> and <span className='font-semibold text-bronze'>Software development</span>, which provided me with a solid foundation in both cybersecurity and software development. My education focused on the analysis of digital systems, network security, and data protection techniques.
            </p>
          </div>
        </div>
        {/* Certification Card */}
        <div className='mb-12 max-w-96 mx-auto flex flex-col bg-blue-950 bg-opacity-50 border border-gold shadow-lg rounded-lg overflow-hidden md:h-full'>
          <MdSchool className='w-24 h-24 text-yellow-500 mx-auto mt-4' />
          <div className='flex-grow p-4 flex flex-col'>
            <h2 className='text-xl text-center text-yellow-500 font-bold mb-2 md:mb-8'>
              Certification in Software Engineering
            </h2>
            <p className='text-gray-50 flex-grow'>
              I earned a Software Engineering certification from Moringa School, where I gained practical experience in full-stack web development, working with technologies like <span className='font-semibold text-yellow-500'>React</span>, <span className='font-semibold text-yellow-500'>Flask</span>, and <span className='font-semibold text-yellow-500'>SQL Databases</span>. This certification strengthened my technical skills and industry readiness.
            </p>
          </div>
        </div>
        {/* Training Card */}
        <div className='mb-12 max-w-96 mx-auto flex flex-col bg-blue-950 bg-opacity-50 border border-silver shadow-lg rounded-lg overflow-hidden md:h-full'>
          <IoIosBook className='w-24 h-24 text-silver mx-auto mt-4' />
          <div className='flex-grow p-4 flex flex-col'>
            <h2 className='text-xl text-center text-silver font-bold mb-2 md:mb-8'>
              Ongoing Training
            </h2>
            <p className='text-gray-50 flex-grow'>
              Currently, I am enhancing my skills in full-stack development and exploring new technologies such as <span className='font-semibold text-silver'>NodeJS</span>, <span className='font-semibold text-silver'>Django</span>, and <span className='font-semibold text-silver'>MongoDB</span>. I am committed to continuous learning and adapting to the ever-changing tech landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
