import React from "react"

const About = () => {
    return(
        <div name='about'className="w-full my-32">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center ">
                    <h2 className="text-5xl font-bold">Los mejores planes deportivos de la ciudad</h2>
                    <p className="text-3xl py-6 text-gray-500">Contamos con la mejor valoracion en planes de entrenamiento
                    de la ciudad, con diversos enfoques segun las necesidades de las personas. 
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
                    <div className="borde py-8 rounded-xl shadow-xl">
                        <p className="text-6xl font-bold text-red-600">100%</p>
                        <p className="text-gray-500 mt-2">Aprobacion</p>
                    </div>
                    <div className="borde py-8 rounded-xl shadow-xl">
                        <p className="text-6xl font-bold text-red-600">16/6</p>
                        <p className="text-gray-500 mt-2">Disponibilidad</p>
                    </div>
                    <div className="borde py-8 rounded-xl shadow-xl">
                        <p className="text-6xl font-bold text-red-600">+150</p>
                        <p className="text-gray-500 mt-2">Usuarios</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About