import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/app/Sidebar'
import Useless from '../../components/app/Useless'
import Header from '../../components/app/Header'
import MobileMenu from '../../components/app/MobileMenu'

export default function Layout() {
    const [isMenuAvailable, setIsMenuAvailable] = useState('none')

    const handleClick = () => {
        isMenuAvailable == 'none' ? setIsMenuAvailable('block') : setIsMenuAvailable('none');
    }
    
    return (
        <div>
            <div className="h-screen flex overflow-hidden bg-gray-100">
                
                {/* <Useless/> */}
                <div className="lg:hidden" style={{ display:isMenuAvailable }}>
                    <MobileMenu onStateChange={handleClick}/>
                </div>
                <Sidebar/>
                
                <div className="flex flex-col w-0 flex-1 overflow-hidden">
                    <Header onStateChange={handleClick}/>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
