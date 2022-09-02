import React, {useState} from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg1 from "../assets/img1.png";
import bgIcon1 from "../assets/icon1.png";
import bgIcon2 from "../assets/icon2.png";
import bgIcon3 from "../assets/icon3.png";
import bgIcon4 from "../assets/icon4.png";

const Hero = () => {
  return (
    <div name='home' className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-[1240px] m-auto px-12">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Somos la mejor opción</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Gran Gimnasio Local
          </h1>
          <p className="text-2xl">¡Diversos planes para ti!</p>
          <button className="py-3 px-6 sm:w-[60%] my-4"><Link to="plans" smooth={true} offset={-50} duration={500}>Adquirir Planes</Link></button>
        </div>
        <div>
          <img className="w-full " src={bgImg1}></img>
        </div>
        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] mx-1
        md:left-1/2 transform md:-translate-x-1/2
        bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <p className="font-bold text-2xl">Nuestros servicios</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-gray-500"><img src={bgIcon1} className='h-6 px-1'></img>Dietas</p>
            <p className="flex px-4 py-2 text-gray-500"><img src={bgIcon2} className='h-6 px-1'></img>Ejercicios cardiacos</p>
            <p className="flex px-4 py-2 text-gray-500"><img src={bgIcon3} className='h-6 px-1'></img>Tiempos de entreno</p>
            <p className="flex px-4 py-2 text-gray-500"><img src={bgIcon4} className='h-6 px-1'></img>Diversos enfoques</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
