'use client';
import React, {useEffect, useState} from 'react';
import './navbar.css';
import Link from 'next/link';
const Logo ='./logo.png'
import Loginbtn from '../../components/navbar-btn/navbarbtn'
import { navLinks } from '@/data/nav-data/navbardata'
import {usePathname} from "next/navigation";
import {FaBars, FaTimes} from "react-icons/fa";


const Navbar = () => {
    const pathname  = usePathname();
    const paths = ['/login', '/signup','/blogs'];
    const startWith = '/properties';
    let txt = false; 
    if (paths.includes(pathname) || pathname.startsWith(startWith)) {
        txt = true
    }
    // setting mobile nav
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);


    const handleClick = () => setClick(!click);
    // close menu on click
    const closeMenu = () => setClick(false);

    // nav scroll
    useEffect(() => { 
        const changeColor = () => {
            if (window.scrollY >= 20) {
                setColor(true);
            } else {
                setColor(false);
            }
        };
        window.addEventListener("scroll", changeColor);
    }, []);
  return (
      <div className={pathname.startsWith('/admin') ? 'hidden' : ''}>
          <div className={`navbar `}>
              <div className='navbardata'>
                  <div className="navbar-logo">
                      <img src={Logo} alt="logo" width={150}/>
                  </div>
                  <div className="navbar-links">
                      {navLinks.map((link, index) => (
                          <Link key={index} href={link.href} className={txt ? 'text-black' : 'text-white'}>
                              {link.label}
                          </Link>
                      ))}
                  </div>
                  <Loginbtn/>
              </div>
          </div>
          <div 
              className={
                  color
                      ? "relative flex justify-between items-center text-white px-6 py-[15px]  w-full md:hidden bg-black"
                      : "relative flex justify-between items-center text-white px-6 py-[15px]  w-full lg:hidden "
              }
          >
              <Link href={'/'}><img src={Logo} alt="logo" width={150}/></Link>
              {/* hamburger */}
              <div className="flex xl:hidden" onClick={handleClick}>
                  {click ? (
                      <FaTimes size={20} style={{color: "#ffffff",zIndex:"101"}}/>
                  ) : (
                      <FaBars size={20} style={{color: "#ffffff"}}/>
                  )}
              </div>
              <div
    
                  className={
                      click
                          ? " absolute top-[0] left-0 right-0 bottom-0 flex flex-col px-6 w-full  text-xl h-screen bg-black/95 text-center ease-in duration-300 overflow-y-auto items-center"
                          : " absolute top-[65px] left-[-100%] right-0 bottom-0 flex flex-col px-6  w-full text-xl h-screen bg-black/95 text-center ease-in duration-300 overflow-y-auto items-center"
                  }
              >
                  <div className="flex flex-col gap-[50px] py-[50px]">
                      {navLinks.map((link, index) => (
                          <Link key={index} href={link.href} className={txt ? 'text-black' : 'text-white'} onClick={closeMenu}>
                              {link.label}
                          </Link>
                      ))}
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Navbar;
