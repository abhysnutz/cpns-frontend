import React from 'react'

export default function MobileMenu({onStateChange}) {
    return (
        <div className="fixed inset-0 flex z-40">
            <div aria-hidden="true" className="fixed inset-0">
                            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={onStateChange}>
                        <span className="sr-only">Close sidebar</span> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="h-6 w-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex-shrink-0 flex items-center px-4">
                    <img src="https://ayopppk.com/images/ayopppk.svg" alt="AYOPPPK" className="h-8 w-full"/>
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav className="px-2 space-y-1">
                        <a href="https://ayopppk.com/user" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="xt-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                            Home
                        </a>
                        <a href="https://ayopppk.com/user/paket" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="xt-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                            Beli Paket
                        </a>
                        <a href="https://ayopppk.com/user/pembelian" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="xt-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                            </svg>
                            Pembelian
                        </a>
                        <a href="https://ayopppk.com/user/paket/saya" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="xt-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Paket Saya
                        </a>
                        <a href="https://ayopppk.com/user/tryout-event" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="xt-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            Try Out Akbar
                        </a>
                        <a href="https://ayopppk.com/user/akun" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="xt-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            Akun Saya
                        </a>
                    </nav>
                </div>
                <div className="flex-shrink-0 flex p-4">
                    <div className="flex-shrink-0 group block bg-indigo-600 rounded-lg shadow-lg w-full p-2">
                        <div className="flex w-full justify-center -mt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-12 w-12 bg-white rounded-full text-indigo-600 borde border-white">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <div className="space-y-3 mt-3">
                            <p className="text-sm font-medium text-white text-center">Apabila Anda mengalami kesulitan, klik tombol berikut</p>
                            <a href="https://api.whatsapp.com/send/?phone=628971576888&amp;text=Halo%20kak,%20saya%20mau%20tanya%20tentang%20&amp;app_absent=0" target="_blank" className="umami--click--sidebar-contact-button inline-flex w-full justify-center rounded-md border border-transparent shadow-sm px-5 py-1.5 bg-indigo-200 font-medium text-gray-700 hover:bg-indigo-300 focus:outline-none focus:ring-0 text-sm">Hubungi Kami</a>
                        </div>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="flex-shrink-0 w-14"></div>
        </div>
    )
}
