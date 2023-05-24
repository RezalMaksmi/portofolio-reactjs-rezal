import React from 'react'
import { BsInstagram,BsGithub,BsYoutube,BsTiktok } from 'react-icons/bs';
import { CiFacebook } from 'react-icons/ci';
import "react-sweet-progress/lib/style.css";


const skillMe =
        [{
            "skillName": "HTML",
            "value": 90+"%",
          },
          {
            "skillName": "CSS",
            "value": 85+"%",
          },
          {
            "skillName": "JavaScript",
            "value": 75+"%",
          },
          {
            "skillName": "SASS",
            "value": 80+"%",
          },
          {
            "skillName": "TailwindCSS",
            "value": 75+"%",
          },
          {
            "skillName": "BootStrap",
            "value": 70+"%",
          },
          {
            "skillName": "ReactJS",
            "value": 70+"%",
          },
          {
            "skillName": "VueJS",
            "value": 50+"%",
          },
          {
            "skillName": "Rest API",
            "value": 70+"%",
          },
          {
            "skillName": "Microsoft Office",
            "value": 80+"%",
          },
          {
            "skillName": "Corel Draw",
            "value": 85+"%",
          }

        ]


const Aboutme = () => {                
    
  return (

    <div className='bg-white dark:bg-[#2B2B2B] w-full'>
      <div className="container max-w-7xl  h-auto m-auto flex flex-col md:flex-row justify-between gap-10 md:px-10 px-4 relative">
        <div className='max-w-6xl w-full overflow-hidden bg-white dark:bg-[#565656] rounded-2xl h-auto drop-shadow-3xl py-10 md:p-14 px-6 relative top-0'>
            <div className='relative w-full dark:text-white '>
                <h2 className='font-semibold sm:text-4xl text-2xl relative z-10 mb-4'>About Me</h2>
                <div className='w-44 sm:h-9 h-6 bg-[#EBEBEB] dark:bg-[#2B2B2B] absolute left-[-56px] top-[15px] '></div>
                <span className='sm:text-base text-xs sm:leading-5 leading-[8px]'>I am a student in Malang, East Java, who is currently studying for bachelor's degree, I am here focusing on making websites on the frontend.</span>
            </div>
            
            <div className='relative w-full mt-7 dark:text-white '>
                <h2 className='font-semibold  sm:text-4xl text-2xl relative z-10'>My Skill</h2>

                {
                  // 
                    skillMe.map(skill => {
                        return (
                        <div className='mt-7'>
                            <div className='w-44 sm:h-9 h-6 bg-[#EBEBEB] dark:bg-[#2B2B2B] absolute left-[-56px] top-[15px] '></div>
                            <div className='flex flex-row justify-between'>
                                <span className='sm:text-base text-xs'>{skill.skillName}</span>
                                <span className='sm:text-base text-xs'>{skill.value}</span>
                            </div>
                            <div className='w-full sm:h-4 h-2 mt-3 bg-slate-400 rounded-full overflow-hidden'><div className='bg-slate-900 h-full animate__slideInLeft' id='skillValue' style={{width: `${skill.value}`,}}></div></div>
                        </div>
                        )
                    })
                }
                
            </div>
        </div>
        <div className='md:max-w-[102px] flex-wrap w-full h-max bg-[#FF6E40] rounded-3xl top-40 sticky flex md:flex-col flex-row justify-center items-center gap-6 py-6 animate__animated animate__bounceInUp'>
            <a href="#home" className='sm:w-14 sm:h-14 w-10 h-10 rounded-full bg-white flex justify-center items-center sm:text-2xl text-xl text-[#FF3D3D] hover:bg-[#FF3D3D] hover:text-white'><BsInstagram /> </a>
            <a href="#home" className='sm:w-14 sm:h-14 w-10 h-10  rounded-full bg-white flex justify-center items-center sm:text-4xl text-xl text-[#3083FF] hover:bg-[#3083FF] hover:text-white'><CiFacebook /> </a>
            <a href="#home" className='sm:w-14 sm:h-14 w-10 h-10  rounded-full bg-white flex justify-center items-center sm:text-3xl text-xl text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white'><BsGithub /> </a>
            <a href="#home" className='sm:w-14 sm:h-14 w-10 h-10  rounded-full bg-white flex justify-center items-center sm:text-3xl text-xl text-[#D62222] hover:bg-[#D62222] hover:text-white'><BsYoutube /> </a>
            <a href="#home" className='sm:w-14 sm:h-14 w-10 h-10  rounded-full bg-white flex justify-center items-center sm:text-2xl text-xl text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white'><BsTiktok /> </a>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
