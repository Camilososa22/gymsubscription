import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import bgLogo from '../assets/logo.png'
import { Link, animateScroll as scroll} from 'react-scroll'


const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose = () => setNav(!nav)

    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <img className='w-60 px-5' src={bgLogo}></img>
                    <ul className='hidden md:flex'>
                    <li><Link to="home" smooth={true} duration={500}>Inicio</Link></li>
                    <li><Link to="about" smooth={true} offset={-200} duration={500}>Sobre nosotros</Link></li>
                    <li><Link to="instructors" smooth={true} offset={-50} duration={500}>Instructores</Link></li>
                    <li><Link to="allinone" smooth={true} offset={-100} duration={500}>Beneficios</Link></li>
                    <li><Link to="plans" smooth={true} offset={-50} duration={500}>Planes</Link></li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>Iniciar sesión</button>
                    <button className='px-5 py-3'>Registrarse</button>
                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>}
                
                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Inicio</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>Sobre nosotros</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="instructors" smooth={true} offset={-50} duration={500}>Instructores</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="allinone" smooth={true} offset={-100} duration={500}>Beneficios</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="plans" smooth={true} offset={-50} duration={500}>Planes</Link></li>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-red-600 px-5 py-2 mb-4'>Iniciar sesión</button>
                    <button className='px-5 py-2'>Registrarse</button>
                </div>
            </ul>

        </div>
    )
}

export default Navbar