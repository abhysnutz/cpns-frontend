import React, { useState } from 'react'

export default function Header({onStateChange}) {
    const [isMenu, setIsMenu] = useState(false)
    
    const handleClick = () => setIsMenu(!isMenu)

    return (
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden sm:flex sm:items-center hidden" onClick={onStateChange}>
                <span className="sr-only">Open sidebar</span> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
                </svg>
            </button>
            <div className="flex items-center px-4 sm:hidden">
                <img src="/images/ayopppk.svg?dd3e832aef37338c5f2fc59f875154e1" alt="ayopppk" className="h-10 w-full"/>
            </div>
            <div className="flex-1 px-4 flex justify-between">
                <div className="flex-1 flex"></div>
                <div className="ml-4 flex items-center md:ml-6">
                    <div className="ml-3 relative">
                        <div>
                            <button id="user-menu" aria-haspopup="true" className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleClick}>
                                <span className="sr-only">Open user menu</span>
                                <img src="https://ui-avatars.com/api/?name=zxczxczxc&amp;background=6366f1&amp;color=fff" alt="" className="h-8 w-8 rounded-full" />
                            </button>
                        </div>
                        {
                            isMenu ?
                                <div role="menu" aria-orientation="vertical" aria-labelledby="user-menu" className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" >
                                    <a role="menuitem" href="https://ayopppk.com/user/akun" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Akun Saya</a>
                                    <a href="#" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Keluar</a>
                                </div>
                            :
                                ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
