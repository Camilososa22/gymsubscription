import React from "react"
import {MailIcon} from "@heroicons/react/solid"
import {FaIdCard, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaTwitch, FaWhatsapp, FaLinkedinIn, FaCopyright} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="w-full mt-24 bg-slate-900 text-gray-300 py-3 px-2">
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-gray-300 py-8">
                <div>
                    <h6 className="font-bold uppercase pt-2">Nuestras Redes</h6>
                    <ul>
                        <li className="py-1 flex hover:text-white hover:font-bold"><FaGithub className="w-5 m-1"/><a href="http://www.github.com/Camilososa22" target='_blank'>Github</a></li>
                        <li className="py-1 flex hover:text-white hover:font-bold"><FaFacebook className="w-5 m-1"/><a href="http://www.facebook.com" target='_blank'>Facebook</a></li>
                        <li className="py-1 flex hover:text-white hover:font-bold"><FaInstagram className="w-5 m-1"/><a href="http://www.instagram.com" target='_blank'>Instragram </a></li>
                        <li className="py-1 flex hover:text-white hover:font-bold"><FaTwitter className="w-5 m-1"/><a href="http://www.twitter.com" target='_blank'>Twitter </a></li>
                        <li className="py-1 flex hover:text-white hover:font-bold"><FaTwitch className="w-5 m-1"/><a href="http://www.twitch.com" target='_blank'>Twitch </a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-bold uppercase pt-2">Contacto del desarrollador</h6>
                    <ul>
                        <li className="py-1 flex hover:text-white hover:font-bold"><FaGithub className="w-5 m-1"/><a href="http://www.github.com/Camilososa22" target='_blank'>Github</a></li>
                        <li className="py-1 flex hover:text-white hover:font-bold"><FaLinkedinIn className="w-5 m-1"/><a href="https://www.linkedin.com/in/camilo-andrés-estrada-sosa-1641461b0/" target='_blank'>Linkedin</a></li>
                        <li className="py-1 flex hover:text-white hover:font-bold"><FaWhatsapp className="w-5 m-1"/><a href="http://wa.me/573148789107" target='_blank'>Whatsapp</a></li>
                        <a href="mailto:camilososa22@gmail.com"><li className="py-1 flex hover:text-white hover:font-bold"><FaIdCard className="w-5 m-1"/>Email</li></a>
                    </ul>
                </div>
                <div className="col-span-2 pt-8 md:pt-2 px-14">
                    <p className="font-bold uppercase">Escribe tu email aqui</p>
                    <p className="py-4">Contactanos para mas informacion y dudas.</p>
                    <form className="flex flex-col sm:flex-row">
                        <input className="w-30 p-1 mr-4 rounded-md mb-4 text-black" type="email" placeholder="Escribe tu email..."/>
                        <button className="p-2 mb-4">Enviar</button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-400">
                <p className="py-4">Ⓒ 2022 GitHub, Camilososa22. Todos los derechos reservados</p>
                <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                <a href="http://www.github.com/Camilososa22" target='_blank'><FaGithub className="hover:text-white"/></a>
                <a href="https://www.linkedin.com/in/camilo-andrés-estrada-sosa-1641461b0/" target='_blank'><FaLinkedinIn className="hover:text-white"/></a>
                <a href="http://wa.me/573148789107" target='_blank'><FaWhatsapp className="hover:text-white"/></a>
                </div>
            </div>
        </div>
        
        )
}

export default Footer