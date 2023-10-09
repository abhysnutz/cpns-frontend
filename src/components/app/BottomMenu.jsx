import React from 'react'

export default function BottomMenu() {
    return (
        <div className="fixed inset-x-0 bottom-0 z-40 sm:hidden">
            <div className="bg-white shadow-md border">
                <div>
                    <div role="dialog" aria-modal="true" className="fixed inset-0 flex z-50" style={{ display: 'none' }}>
                        <div className="flex-1 flex flex-col w-full h-full fixed inset-x-0 bg-gray-100 animate__animated animate__fadeInUp animate__faster">
                            <div>
                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-44 p-3">
                                    <div className="flex justify-between">
                                        <div></div>
                                        <h2 className="text-white text-base font-medium">Akun Saya</h2>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex-shrink-0 group block mt-8">
                                        <div className="flex items-center">
                                            <img src="https://ui-avatars.com/api/?name=zxczxczxc&amp;background=fff&amp;color=6366f1" alt="" className="h-11 w-11 rounded-full" /> 
                                            <div className="ml-4">
                                                <p className="text-base font-medium text-white">zxczxczxc</p>
                                                <div className="-mt-1"><span className="text-sm rounded-full font-medium text-white">abhy.riri.1@gmail.com</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="bg-white -mt-14 p-2 rounded-lg shadow">
                                        <nav className="flex-1 space-y-0.5">
                                            <a href="https://ayopppk.com/user/pembelian" className="bg-white hover:bg-gray-50 text-gray-800 group flex items-center px-1.5 py-1.5 text-sm font-medium justify-between border-b">
                                                <div className="flex items-center">
                                                    <div className="rounded-xl mr-2 border-3 p-0.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-800">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                                        </svg>
                                                    </div>
                                                    Pembelian
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </a>
                                            <a href="https://ayopppk.com/user/promo" className="bg-white hover:bg-gray-50 text-gray-800 group flex items-center px-1.5 py-1.5 text-sm font-medium justify-between border-b">
                                                <div className="flex items-center">
                                                    <div className="rounded-xl mr-2 border-3 p-0.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                                                        </svg>
                                                    </div>
                                                    Voucher Promo
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </a>
                                            <a href="https://ayopppk.com/user/referral" className="bg-white hover:bg-gray-50 text-gray-800 group flex items-center px-1.5 py-1.5 text-sm font-medium justify-between border-b">
                                                <div className="flex items-center">
                                                    <div className="rounded-xl mr-2 border-3 p-0.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                                                        </svg>
                                                    </div>
                                                    Referral &amp; Afiliasi
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </a>
                                            <a href="https://ayopppk.com/user/akun" className="bg-white hover:bg-gray-50 text-gray-800 group flex items-center px-1.5 py-1.5 text-sm font-medium justify-between border-b">
                                                <div className="flex items-center">
                                                    <div className="rounded-xl mr-2 border-3 p-0.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-700">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                        </svg>
                                                    </div>
                                                    Pengaturan Akun
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </a>
                                            <a href="https://api.whatsapp.com/send/?phone=628971576888&amp;text=Halo%20kak,%20saya%20mau%20tanya%20tentang%20&amp;app_absent=0" target="_blank" className="bg-white hover:bg-gray-50 text-gray-800 group flex items-center px-1.5 py-1.5 text-sm font-medium justify-between border-b">
                                                <div className="flex items-center">
                                                    <div className="rounded-xl mr-2 border-3 p-0.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-gray-700">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                                        </svg>
                                                    </div>
                                                    Bantuan
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </a>
                                            <a href="https://ayopppk.com/verify-email#" className="bg-white hover:bg-gray-50 text-gray-800 group flex items-center px-1.5 py-1.5 text-sm font-medium justify-between">
                                                <div className="flex items-center">
                                                    <div className="rounded-xl mr-2 border-3 p-0.5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                                        </svg>
                                                    </div>
                                                    Log out
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto py-2 px-5">
                        <div className="flex items-center justify-between flex-wrap">
                            <a href="https://ayopppk.com/user">
                                <div className="w-full flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-700 h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>
                                </div>
                                <p className="mt-1 font-medium text-xs text-gray-700">Home</p>
                            </a>
                            <a href="https://ayopppk.com/user/paket">
                                <div className="w-full flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-700 h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                    </svg>
                                </div>
                                <p className="mt-1 font-medium text-xs text-gray-700">Beli Paket</p>
                            </a>
                            <a href="https://ayopppk.com/user/paket/saya">
                                <div className="w-full flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-700 h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                    </svg>
                                </div>
                                <p className="mt-1 font-medium text-xs text-gray-700">Paket Saya</p>
                            </a>
                            <a href="https://ayopppk.com/user/tryout-event">
                                <div className="w-full flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-gray-700 h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <p className="mt-1 font-medium text-xs text-gray-700">Try Out Akbar</p>
                            </a>
                            <button>
                                <div className="w-full flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-700 h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </div>
                                <p className="mt-1 font-medium text-xs text-gray-700">Akun</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
