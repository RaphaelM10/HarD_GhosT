import React from 'react'
import { Outlet, Link } from "react-router-dom";
import HarD from './img/hard1.png'
import './css/Abertura.css'
import './css/AberturaMobile.css'
export default function Abertura(){
    return(
        <><body className='abert'>
            <main className='main-abertura'>
            <h1>HarD-GhosT &reg; 2024 Oficial</h1>
                <img src={HarD}></img>
                
                <h3>Create by Raphael &copy; (Ninja)</h3>
                <Link to='/home' ><p>Clique para Entrar</p></Link>
            </main>
            
            <Outlet/>
            
            </body>
        </>
    )
}