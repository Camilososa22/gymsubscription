import React from "react"
import { PhoneIcon, TrendingUpIcon, ClipboardCheckIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import Img2 from '../assets/img2.jpg'

const Instructors = () => {
    return(
        <div name='instructors' className="w-full mt-24">
            <div className="w-full h-[700px] bg-gray-900/80 absolute">
                <img className='w-full h-full object-cover mix-blend-overlay' src={Img2} alt="/"></img>
            </div>

            <div className="max-w-[1240px] mx-auto text-white relative">
                <div className="px-4 py-12">
                    <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Instructores</h2>
                    <h3 className="text-5xl font-bold py-6 text-center"s>El mejor equipo de entrenadores</h3>
                    <p className="py-4 text-3xl text-slate-300">Nuestro team se compone por un grupo selecto de personas capacitadas
                     para brindar la más eficiente y acertada asistencia a los usuarios que
                     nos prefieren. Contamos con entrenadores personales, nutriólogos y profesionales de la salud.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
                    <div className="bg-white rounded-xl shadow-2xl">
                        <div className="p-8">
                            <PhoneIcon className="w-16 p-4 bg-red-600 text-white rounded-lg mt-[-4em]"/>
                            <h3 className="font-bold text-2xl my-6">Linea de atencion </h3>
                            <p className="text-gray-600 text-xl">Ofrecemos a nuestros clientes una linea de atención que funciona de lunes a viernes
                                desde las 8:00 am hasta las 5:00 pm, disponible para resolver dudas y recibir asistencia en caso de ser necesaria.</p> 
                        </div>
                        <div className="bg-slate-100 pl-8 py-4">
                            <p className="flex items-center text-red-600 font-bold">Contáctanos<ArrowSmRightIcon className="w-5 ml-2"/></p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-2xl">
                        <div className="p-8">
                            <TrendingUpIcon className="w-16 p-4 bg-red-600 text-white rounded-lg mt-[-4em]"/>
                            <h3 className="font-bold text-2xl my-6">Enfoque de metas </h3>
                            <p className="text-gray-600 text-xl">Al iniciar un proceso se definen ciertos objetivos a cumplir por parte del clientes
                            y son monitoreados de forma constante durante el tiempo pre-determinado.</p>
                        </div>
                        <div className="bg-slate-100 pl-8 py-4">
                            <p className="flex items-center text-red-600 font-bold">Contáctanos <ArrowSmRightIcon className="w-5 ml-2"/></p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-2xl">
                        <div className="p-8">
                            <ClipboardCheckIcon className="w-16 p-4 bg-red-600 text-white rounded-lg mt-[-4em]"/>
                            <h3 className="font-bold text-2xl my-6">Chequeo trimestral</h3>
                            <p className="text-gray-600 text-xl">Realizamos un chequeo personalizado a los usuarios al iniciar un proceso y cada 3 meses,
                            permitiendo mejorar su desempeño y acercándose cada vez más a sus metas.</p>
                        </div>
                        <div className="bg-slate-100 pl-8 py-4">
                            <p className="flex items-center text-red-600 font-bold">Contáctanos <ArrowSmRightIcon className="w-5 ml-2"/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Instructors