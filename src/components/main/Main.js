import React from 'react'
import './Main.css'
import rezal from './rejal.png'

const Main = () => {
  return (

    <div id='home' >
        <main className='bg-white dark:bg-[#2B2B2B] w-full'>

            
            <div className="container  max-w-7xl h-auto m-auto flex flex-row  justify-between items-center flex-wrap-reverse md:px-10 px-4">
            
                <div className='z-10 mt-40 block flex-col gap-4 max-[850px]:mt-[700px] mb-20'>
                    <h1 className='sm:text-[70px] text-4xl sm:leading-[80px] leading-[40px] dark:text-white  tracking-[0.055em] animate__bounceIn'>My Name <br></br> is <b>Rezal</b></h1>
        
        {/* <span class="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-primary to-green-400 relative -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-0 skew-x-12 rotate-90"></span> */}

                    <p className='dark:text-white max-w-sm animate__animated animate__flipInX text-base sm:mt-0 mt-1'>I am a programmer frontend Developer 2 years  of experience</p>
                   
                   <a href="" className='py-3 px-14 mt-12 bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-gradient-to-br hover:from-cyan-900 hover:to-cyan-500 inline-block rounded-full text-white shadow-md animate__animated animate__fadeInLeft'>Hire Me</a>

                    <div className='flex gap-3 max-w-xs flex-wrap mt-[106px]'>
                        <span className='py-3 px-4 bg-[#FFA757] inline-block rounded-xl text-white animate__animated animate__zoomInRight' style={{animationDelay:'.1s'}}>Java Script</span>
                        <span className='py-3 px-4 bg-[#FF7A72] inline-block rounded-xl text-white animate__animated animate__zoomInRight ' style={{animationDelay:'.10s'}}>SASS</span>
                        <span className='py-3 px-4 bg-[#54BAB9] inline-block rounded-xl text-white animate__animated animate__zoomInRight ' style={{animationDelay:'.15s'}}>React JS</span>
                        <span className='py-3 px-4 bg-[#629DD4] inline-block rounded-xl text-white animate__animated animate__zoomInRight ' style={{animationDelay:'.20s'}}>CSS</span>
                        <span className='py-3 px-4 bg-[#557899] inline-block rounded-xl text-white animate__animated animate__zoomInRight ' style={{animationDelay:'.25s'}}>Tailwindcss</span>
                    </div>
                </div>

                {/* <div className='w-2/4 h-[1011.46px] w-[554.23px]'>

                </div> */}
                
                <div className='aspect-square bg-gradient-to-tr blur-2xl opacity-40  rotate-90 bg-cyan-600 w-[300px] h-[300px] rounded-full absolute bottom-[550px] left-[-100px]'></div>
                <div className='aspect-square bg-gradient-to-tr blur-2xl opacity-70  rotate-90 bg-sky-400 w-40 h-40 rounded-full absolute bottom-[-80px] right-[50px]'></div>
            </div>
            <div className='h-[800px]  w-[100%] overflow-hidden absolute top-0'>
                
                <div className='wrapping-foto bg-sky-950 bg-blur-2xl bg-opacity-40 bg-gradient-to-br from-cyan-600 to-blue-800'>
                    <img className='bg-image drop-shadow-2xl  animate__animated animate__fadeIn' src={rezal} alt=""></img>
                </div>
                <div className='animate__animated animate__flipInX w-[199px] h-[114px] bg-[#222222] dark:bg-white absolute xl:right-[580px] sm:top-[400px] sm:right-[350px] right-[30px] top-[570px] z-20 rounded-2xl flex justify-center items-center flex-col'>
                    <h2 className='text-white dark:text-black text-[32px]'>2 YEARS </h2>
                    <span className='text-white dark:text-black tracking-[0.11em] text-xl'>Experience</span>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Main
