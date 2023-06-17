import React from 'react'
import bj from './asets/bj.png'
import bm from './asets/bm.png'
import mbkm from './asets/mbkm.png'
import port from './asets/port.png'

const dataPorto =
        [
          {
            "imgPorto": mbkm,
            "titlePorto": "MBKM UNIKAMA",
            "bodyPorto": "website untuk monitoring kegiatan mahasiswa kampus UNIKAMA",
            "urlPorto" : ""
          },

          {
            "imgPorto": bj,
            "titlePorto": "Beritane Jowo",
            "bodyPorto": "website seputar informasi teknologi dan berita viral terkini.",
            "urlPorto" : ""
          },
          {
            "imgPorto": bm,
            "titlePorto": "Belanja Mudah",
            "bodyPorto": "website toko online, yang  bertemakan belanja kebutuhan pasar cukup dirumah aja.",
            "urlPorto" : ""
          },
          {
            "imgPorto": port,
            "titlePorto": "Website Portofolio",
            "bodyPorto": "website yang saya buat 1 tahun lalu dengan HTML SCSS JS.",
            "urlPorto" : ""
          },
          {
            "imgPorto": bm,
            "titlePorto": "Belanja Mudah",
            "bodyPorto": "website toko online, yang  bertemakan belanja kebutuhan pasar cukup dirumah aja.",
            "urlPorto" : ""
          }
        ]

const Portofolio = () => {
  return (
    <div className='bg-white dark:bg-[#2B2B2B] w-full pb-32 ' id='portofolio'>
        <div className="container max-w-7xl h-auto m-auto flex flex-row justify-between gap-10 md:px-10 px-4 relative">
        <div className='aspect-square bg-gradient-to-tr blur-2xl opacity-50  rotate-90 bg-sky-400 w-[400px] h-[400px] rounded-full absolute bottom-[-100px] left-[-250px]'></div>

            <div className='mt-16 w-full overflow-hidden bg-white dark:bg-[#565656] bg-blur-2xl bg-opacity-60 dark:bg-blur-2xl dark:bg-opacity-60 backdrop-blur-lg drop-shadow-lg rounded-2xl h-auto drop-shadow-3xl py-10 md:p-14 px-6 relative top-0 '>
                
                <div className='relative w-full dark:text-white'>
                    <h2 className='font-semibold  sm:text-4xl text-2xl relative z-10 mb-4'>My Portofolio</h2>
                    <div className='w-44 sm:h-9 h-6 bg-[#EBEBEB] dark:bg-[#2B2B2B] absolute left-[-56px] top-[15px] '></div>
                    
                    <div className='mt-9 flex justify-center items-center gap-10 flex-wrap'>
                  {
                  dataPorto.map(data => { 
                    return (
                        <div className='w-80 h-80 bg-white overflow-hidden relative drop-shadow-lg rounded-xl'>
                            <img src={data.imgPorto} className='w-full relative z-0' alt="" />
                            {/* <div className='opacity-0 transition w-full absolute top-0 z-10 h-full bg-gradient-to-t from-black to-transparent hover:opacity-100 flex justify-center items-center'>
                                <a href={data.urlPorto} className='px-4 py-2 rounded-md font-semibold text-[#686868] bg-[#ffffffac]'>Read More</a>
                            </div> */}
                            <div className='w-full z-20 h-24 hover:h-40 transition transition-[height] ease-in-out delay-75 duration-500 bg-[#1B1B1B] bg-blur-2xl bg-opacity-90  backdrop-blur-lg drop-shadow-lg rounded-tl-2xl absolute bottom-0 p-3 flex flex-col'>
                                <h5 className='text-cyan-400 to-blue-500 font-semibold'>{data.titlePorto}</h5>
                                <span className='text-white text-xs leading-4 '>{data.bodyPorto}</span>
                                <a href={data.urlPorto} className='px-2 py-1 text-xs rounded-md font-semibold w-max mt-10 text-[#686868] bg-[#ffffffac]'>Read More</a>
                            </div>
                        </div>
                        )
                      })
                  }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portofolio
