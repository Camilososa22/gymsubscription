import React from 'react'
import {CheckIcon} from '@heroicons/react/outline'

const AllInOne = () => {
    return (
        <div name='allinone' className='w-full my-36'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <h2 className='text-5xl font-bold text-center'>Múltiples Beneficios</h2>
                <p className='text-2xl py-8 text-gray-500 text-center'>Contamos con muchos beneficios para nuestros usuarios al preferirnos, entre los cuales destacan
                    los siguientes según el tipo de membresía.</p>

                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

                            <div className='flex'>
                                <div>
                                <CheckIcon className='w-7 mr-3 text-green-600'/>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Fija tus objetivos</h3>
                                    <p className='text-lg pt-2 pb-4'>Es importante que marques metas antes de iniciar un proceso, para evaluar tu progreso de forma acertada.</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div>
                                <CheckIcon className='w-7 mr-3 text-green-600'/>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Planifica tu rutina</h3>
                                    <p className='text-lg pt-2 pb-4'>Tu rutina es la determinante a la hora de buscar resultados, por ende es importante que esté clara y previamente analizada.</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div>
                                <CheckIcon className='w-7 mr-3 text-green-600'/>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Organiza tu tiempo</h3>
                                    <p className='text-lg pt-2 pb-4'>A la hora de entrenar organizar tu tiempo es parte esencial para llevar una mejor calidad de vida.</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div>
                                <CheckIcon className='w-7 mr-3 text-green-600'/>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Mejora tus hábitos</h3>
                                    <p className='text-lg pt-2 pb-4'>Tus hábitos vitales mejoran al iniciar una rutina de ejercicios y vida salidable.</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div>
                                <CheckIcon className='w-7 mr-3 text-green-600'/>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Sigue una dieta</h3>
                                    <p className='text-lg pt-2 pb-4'>Con una dieta personalizada, optimizas tus resultados y disminuyes el tiempo para alcanzar tus objetivos.</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div>
                                <CheckIcon className='w-7 mr-3 text-green-600'/>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Beneficio de Jacuzzi</h3>
                                    <p className='text-lg pt-2 pb-4'>Para nuestros clientes VIP, tenemos el beneficio de Jacuzzi  1 vez a la semana.</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div>
                                <CheckIcon className='w-7 mr-3 text-green-600'/>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Beneficio de Personalizados</h3>
                                    <p className='text-lg pt-2 pb-4'>Para nuestros clientes VIP, tenemos beneficio de asistencia personalizada para controlar su progreso y optimizarlo.</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div>
                                <CheckIcon className='w-7 mr-3 text-green-600'/>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Beneficio de Spa</h3>
                                    <p className='text-lg pt-2 pb-4'>Para nuestros clientes VIP, ofrecemos el servicio adicional de spa gratuito 1 vez al mes.</p>
                                </div>
                            </div>

                            

                    </div>
                
            </div>
        </div>
        
    )
}

export default AllInOne