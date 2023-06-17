import React from 'react'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { Menu } from '@headlessui/react'

const Nav = () => {
    const [enabled, setEnabled] = useState(false)
    // console.log(enabled)
    
    const html = document.querySelector('html')
    // console.log(html)
    html.classList.add('scroll-smooth')

    if( enabled === true ){
        html.classList.add('dark')
    }else{
        html.classList.remove('dark')
    }

  return (
    <div className='z-50 '>
      <nav className='bg-slate-50 bg-blur-2xl bg-opacity-40 dark:bg-blur-2xl dark:bg-opacity-40 backdrop-blur-lg rounded drop-shadow-lg dark:bg-[#222222] dark:text-white shadow-lg  h-20 px-8 z-50 fixed w-full' >
        <div class="container max-w-7xl h-full m-auto flex flex-row  justify-between items-center ">
            <ul className='flex-row flex gap-10 items-center h-full max-[1000px]:hidden'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#portofolio">Portofolio</a></li>
            </ul>
            <Menu as="div" className="max-[1000px]:block hidden">
                <Menu.Button className='text-6xl'>=</Menu.Button>
                <Menu.Items className='flex flex-col gap-3 bg-white dark:bg-[#3E3E3E] shadow-xl rounded-xl absolute px-5 py-6 mt-[30px]'>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`${active && 'text-[#FF6E40]'} `}
                        href="#home"
                        >
                        Home
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`${active && 'text-[#FF6E40]'}`}
                        href="#about"
                        >
                        About
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`${active && 'text-[#FF6E40]'}`}
                        href="#contact"
                        >
                        Contact
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`${active && 'text-[#FF6E40]'}`}
                        href="#portofolio"
                        >
                        Portofolio
                        </a>
                    )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>

            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-white bg-blur-2xl bg-opacity-40' : 'bg-gradient-to-br from-cyan-500 to-blue-500'}
                relative inline-flex h-[29px] w-[65px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only ">Use setting</span>
                <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-9 bg-gradient-to-br from-cyan-500 to-blue-500'  : 'translate-x-0 '}
                    pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
            {/* relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 */}
            
            <button href="" className=' inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'>
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>Doanload CV</span>
            </button>
        </div>
      </nav>
    </div>
  )
}

export default Nav
