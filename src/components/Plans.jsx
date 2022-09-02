import React from "react"
import {CheckIcon, StarIcon} from "@heroicons/react/solid"


const Plans = () => {
    return(
        <div name='plans' className="w-full text-white my-24">
            <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

            <div className="max-w-[1240px] mx-auto py-12">
                <div className="text-center py-8 text-slate-300">
                    <h2 className="text-3xl uppercase">Planes</h2>
                    <h3 className="text-5xl font-bold text-white py-8">¡Escoje el que más se adapte a tu necesidad!</h3>
                    <p className="text-3xl">Contamos con dos tipos de planes para satisfacer las necesidades de cada tipo de público, 
                        con beneficios extras en el segundo caso incluyendo todos los del primero.</p>
                </div>

                <div className="grid md:grid-cols-2">
                    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl">
                        <span className="uppercase px-3 py-1 bg-red-200 text-red-900 rounded-2xl text-sm">Estándar</span>
                        <div>
                            <p className="text-6xl font-bold py-4 flex">$50.000<span className="text-xl text-slate-500 flex flex-col justify-end relative">/mes</span></p>
                        </div>
                        <p className="text-2xl py-8 text-slate-500 relative">Este plan incluye los siguientes beneficios:</p>
                        <div className="text-2xl relative">
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600"/>Acceso al gym en cualquier horario y sin tiempo límite.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600"/>Previa revisión de estado inicial y asistencia en todo momento.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600"/>Revisión de peso y masa corporal asistida mensualmente.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-600"/>Rutinas asignadas por el instructor encargado.</p>
                            <button className="w-full py-4 my-4 ">Comprar Ahora</button>
                        </div>
                    </div>

                    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl">
                        <span className="uppercase px-3 py-1 bg-[#FDFFDA] text-[#C0CD00] rounded-2xl text-sm">VIP🔥</span>
                        <div>
                            <p className="text-6xl font-bold py-4 flex">$150.000<span className="text-xl text-slate-500 flex flex-col justify-end relative">/mes</span></p>
                        </div>
                        <p className="text-2xl py-8 text-slate-500 relative">Este plan incluye los siguientes beneficios</p>
                        <div className="text-2xl relative">
                            <p className="flex py-4"><StarIcon className="w-8 mr-5 text-[#EFFF00]"/>Planificación personalizada de entrenamientos.</p>
                            <p className="flex py-4"><StarIcon className="w-8 mr-5 text-[#EFFF00]"/>Dieta personalizada asignada por un nutricionista.</p>
                            <p className="flex py-4"><StarIcon className="w-8 mr-5 text-[#EFFF00]"/>Acceso a Jacuzzi una vez a la semana gratuito.</p>
                            <p className="flex py-4"><StarIcon className="w-8 mr-5 text-[#EFFF00]"/>Acceso al spa una vez al mes de forma gratuita.</p>
                            <button className="w-full py-4 my-4 ">Comprar Ahora</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        )

} 

export default Plans