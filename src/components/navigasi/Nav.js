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
      <nav className='bg-slate-50 dark:bg-[#222222] dark:text-white shadow-xl  h-20 px-8 z-50 fixed w-full' >
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
                        href="/account-settings"
                        >
                        Home
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`${active && 'text-[#FF6E40]'}`}
                        href="/account-settings"
                        >
                        About
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`${active && 'text-[#FF6E40]'}`}
                        href="/account-settings"
                        >
                        Contact
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`${active && 'text-[#FF6E40]'}`}
                        href="/account-settings"
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
                className={`${enabled ? 'bg-[#FF6E40]' : 'bg-[#ff8863]'}
                relative inline-flex h-[29px] w-[65px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-9 bg-[#ffe168]'  : 'translate-x-0'}
                    pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>

            <a href="" className='px-3 py-2 bg-[#EEEEEE] dark:text-black dark:border-white dark:bg-[#EEEEEE] rounded-lg text-neutral-950 border-2 border-slate-950'>Download CV</a>
        </div>
      </nav>
    </div>
  )
}

export default Nav
