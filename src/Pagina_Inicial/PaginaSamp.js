import { Outlet, Link } from "react-router-dom";
import React from 'react'
import './css/Samp.css'
import './css/SampMobile.css'
import Galinha from './img/galinha.png'
import Samp from './img/samp.jpg'

export default function HeaderAbertura(){
    function Title(){
        document.title = 'HarD | Samp'
    }
    Title()
    
    const bv =()=>{
        const el = document.getElementById('el')
        
        setInterval(function () {
            el.innerHTML = 'HarD-GhosT &reg; 2024'
    }, 1000*10); 
         el.innerHTML =  'Samp Laucher Atualizado'
           
    }
   

   function Ip(){
        alert(`IP do Servidor:
        >>Antigo:  rpg.nwdgames.net:7777
        >>Novo: 149.56.41.48:7784

        Obrigado por Estar Conosco!`)
   }
           
    
    
 
    return(
       
   <>
    <header>
    <section className='cabecalho-s'>
        <div className='cabecalho-h1-s'>
            <h1 id="el" onMouseLeave={bv} >HarD-GhosT &reg; 2024 </h1>
        </div>
        </section>
        <section className='menu-s'>
            <div className = 'menu-opcao-s'>
                <Link to='/home'><p>Inicio</p></Link>
                <Link to='/memes'><p>Memes</p></Link>
                <Link to='/videos'><p>Videos</p></Link>
                <Link to='/samp'><p>Samp</p></Link>
         </div>
        </section>
      
   </header>
   <main>
        <section className="section-s">
            <h2>GTA SAN ANDREAS ONLINE:</h2>
            <img src={Samp} alt=""/>
        </section>
        <section className="section-info-s">
            <p> SAMP é um pequeno programa que permite 
                ao usuário jogar o GTA San Andreas em rede multiplayer online com seus amigos ou em diferentes 
                servidores disponiveis. Com o GTA SAN RIP você pode economizar espaço em disco, a versão RIP não possui 
                as radios, o que reduz consideravel o tamanho de download. Sobre o GTA SAN: Agora, é o início dos anos 90.
                 Carl tem que voltar à sua casa. A sua mãe foi assassinada, a sua família tem vindo a desfazer-se e 
                 os seus amigos de infância estão a caminhar para o desastre. Jogue grátis o clássico da Rockstar 
                 no seu PC, GTA San. baixe via torrent o 
                Jogo GTA San Andreas RIP + Online completo para PC.</p>
        </section>
        <section className="section-ip-s">
            <div onClick={Ip}>
            <h2>IP do Servidor:</h2>
            <p>Antigo:  rpg.nwdgames.net:7777</p>
            <p>Novo: 149.56.41.48:7784</p>
        </div>
        </section>
        <section className="section-baixar-s">
            <div>
                <a href="https://www.nwdgames.net/arquivos"><p>Windows</p></a>
                <a href="https://www.mediafire.com/file/uvtxyfk47g0s4hc/FIVEM+APK+ATUALIZADO+????.7z/file"><p>Android</p></a>
            </div>
        </section>
    </main>
        <section className="section-botao-s">
            <div>
            <Link  to='/home' ><p>Voltar</p></Link>
            </div>
        </section>
    <footer>
        <div className="footer-hp">
        <p>HarD-GhosT &reg; 2024</p>
    </div>
    <div className="img-div-footer">
        <img id="img-footer" src={Galinha} alt="galinha"/>
    </div>
    </footer>
    <Outlet/>
</>
    )
}