import { useState } from 'react'
import './App.css'
import profileImg from './assets/img/rocimarp.jpg';

function App() {

    return (
        <>
            <div className="flex">
                <div className="flex-col">
                    <h1 className="text-white text-2xl">Hola, soy Rocimar</h1>
                    <h2 className="text-white text-4xl">Developer</h2>
                    <div className="flex">
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4">Ver mis proyectos</button>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 ml-2">Contactame</button>
                    </div>

                </div>
                <div className="img">
                    <img src={profileImg} alt="imgRocimar" className="rounded-full border-8 border-white w-80 h-80"/>
                </div>

            </div>

        </>
    )
}

export default App






