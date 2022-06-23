import React, { useEffect, useState } from 'react'
import links from '../links.json'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    const [scrollActive, setScrollActive] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);

    const handleToggleMenu = () => {
        setMenuIsOpen((prevValue) => !prevValue)
    }

    const handleNavlinkClick = () => {
        setMenuIsOpen(false)
    }
    

    return (
        <header
            className={
                "fixed top-0 w-full z-30 bg-white-500 transition-all " +
                (scrollActive ? " shadow-md pt-0 bg-primary" : " pt-4")
            }
        >
            <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex justify-end lg:justify-center items-center py-3 sm:py-4">

                <ul className={'nav-links ' + (menuIsOpen ? 'right-0' : '') }>
                    {links.map(({ name, href }) => (
                        <a  
                            onClick={handleNavlinkClick}
                            key={href}
                            href={href}
                            className={`text-md text-center leading-5 px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative  text-white after:bg-white lg:after:bg-primary lg:text-primary lg:hover:text-primary a ${scrollActive ? 'lg:text-white lg:hover:text-white lg:after:bg-white': ''}`}
                        >{name}</a>
                    ))}
                </ul>

                <div className='lg:hidden z-50'>
                    {menuIsOpen ? (
                        <AiOutlineClose onClick={handleToggleMenu} className='text-3xl text-white cursor-pointer transition-all hover:scale-110'/>
                    ):(
                        <AiOutlineMenu onClick={handleToggleMenu} className={'text-3xl  cursor-pointer transition-all hover:scale-110 ' + (scrollActive ? 'text-white' : 'text-primary')}/>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header