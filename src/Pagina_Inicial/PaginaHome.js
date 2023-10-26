import './css/style.css'
import { Outlet, Link } from "react-router-dom";
import Logo from './img/logo.jpg'
import React from 'react'
import './css/style.css'
import './css/styleMobile.css'
import Boi from './img/boi.png'
import Galinha from './img/galinha.png'
import DJCalvo from './img/DjCalvo.jpg'
import Corno from './img/corno.jpg'
import Pinguin from './img/calvo-pinguin.jpg'
import GM from './img/gm.jpg'
import Dourado from './img/hamsterdourado3.png'

export default function Home(){

    function Title(){
        document.title = 'HarD | Home'
    }
    Title()
    const bv =()=>{
        const el = document.getElementById('el')
        
        setInterval(function () {
            el.innerHTML = 'HarD-GhosT &reg; 2023'
    }, 1000*10); 
         el.innerHTML =  'HarD-GhosT lhe deseja Boas Vindas!'
           
    }
    function clique1(){
       
        const InfoBoi = document.getElementById('info-boi');
        const DivInvisivel = document.getElementById('sec-invisivel');
        DivInvisivel.classList.toggle('section-invisivel')
        InfoBoi.innerHTML = 'Maior Corno da Historia da NWD Games!'
        }
        
       function clique2(){
        const Gus = document.getElementById('gus-h3');
        const DivInvisivel = document.getElementById('sec-invisivel-1');
        DivInvisivel.classList.toggle('section-invisivel')
        Gus.innerHTML = 'Por que clicou para ver minha mãe, virgem?'
        
    }
       function clique3(){
        const DivInvisivel = document.getElementById('sec-invisivel-2');
        DivInvisivel.classList.toggle('section-invisivel')
    }
    const zap = ()=>{
        alert(`>>Link exibido apenas para alguns usuários! Por gentileza, entre via Discord ou Fale com algum Staff do nosso Clã<<`)
    }
    const cliqueDourado = ()=>{
        alert('HEHEHE, fez cócegas')
    }
    return(
    <>
   <header>

    <section className='cabecalho'>
        <div className='cabecalho-h1'>
            <h1 onMouseLeave={bv} id='el'>HarD-GhosT &reg; 2023 </h1>
        </div>
        </section>
        <section className='menu'>
        <div className = 'menu-opcao'>
            <Link href='/home'><p>Inicio</p></Link>
            <Link to='/memes'><p>Memes</p></Link>
            <Link to='/videos'><p>Videos</p></Link>
            <Link to='/samp'><p>Samp</p></Link>
        </div>
        </section>
        <section className='cargos'>
            <div className='cargos-div-img'>
                <img src={Logo}></img>
            </div>
            <div className='cargos-div'>
                <div>
                <h2>Cargos:</h2>
                </div>
                <div className="cargos-lista">
                <h3>Fundador:</h3>
                <p>Ithesnoorthdor</p>
            </div>
            <div >
            <div className="cargos-lista">
                <h3>Dono:</h3>
                <p>DJ Calvinho</p>
            </div>
          <div className="cargos-lista">
                <h3>Staff:</h3>
                <p>[HarD]TerStegen</p>
                 <p>[HarD]Ninja</p>
                <p>[HarD]Dourado</p>
        </div>
            </div>
            </div>
        </section>
   </header>

   <main>
            
            <section id="sec-invisivel" className="section-invisivel">
                <div className="invisivel">
                    <img src={Corno}alt=""/>
                </div>
            </section>
            <section class="section">
                <div className="txt">
                    <div>
                    <h3 >Seja Bem Vindo(a) ao nosso Site do clâ HarD-GhosT.</h3>
                    <img id="img-boi" onClick={clique1} src={Boi} alt="boi" style={{cursor:'pointer'}}/>
                </div>
                    <p id='info-boi'>INFO: A HarD-GhosT Foi Fundada no Ano de 2013 pelo jogador Ithesnoorthdor e atualmente está com o dono Dj Calvinho(Felipe).</p>
                </div>
                <section className='sec-dourado'>
                        <div>
                            <h3>Fala Pai, tudo Joia? O Brabo tem nome, Dourado. Forneço a braba para geral, quem quiser só chama!</h3>
                            <img onClick={cliqueDourado} src={Dourado} ></img>
                        </div>
                </section>
                <section id="sec-invisivel-1" className="section-invisivel">
                <div className="invisivel-1">
                    <img src={GM} alt=""/>
                </div>
                </section>
                <div className="txt-2">
                        <h3 id='gus-h3' >Fala seus Virgens, tlgd que a favela venceu ne? Bando de Virgens.</h3>
                        <img id='img-gustavo"' onClick={clique2} src={Galinha} alt=""/>
                </div>
                <section className="section-conteudos">
                <div className="contatos">
                    <h2>Contatos:</h2>
                    <a href="https://discord.gg/Cs9p7qPjzz" target="_blank"><p>DiscorD</p></a>
                    <p onClick={zap} >WhatsApp</p>
                    <a href="https://nwdg.forumeiros.com/" target="_blank"><p>Forum</p></a>
                </div>
                <div className="destaques">
                    <div className="destaque-div">
                    <div className="destaque-lista">
                        <h3>Destaque do Mês:</h3>
                    </div>
                    <div >
                        <div className="destaque-lista">
                        <h3>Corno:</h3>
                        <p>[HarD]$upremo</p>
                    </div>
                    <div className="destaque-lista">
                        <h3>Casado:</h3>
                        <p>[HarD]TerStegen</p>
                    </div>
                    <div className="destaque-lista">
                        <h3>Melhor Mãe:</h3>
                        <p>[HarD]Gustavo</p>
                    </div>
                    <div className="destaque-lista">
                        <h3>Bebado:</h3>
                        <p>Ithesnoorthdor</p>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section id="sec-invisivel-2" className="section-invisivel">
                <div className="invisivel-2">
                    <img src={Pinguin}alt=""/>
                </div>
            </section>
            <section className="section-reflexao">
                <div className="div-reflexao-1">
                    <h2>Reflexão</h2>
                    <p>"Nunca Zoe de uma pessoa Calva pois a sua pode chegar a qualquer momento"<br/>--- <i> DJ Calvinho</i></p>
                </div>
                <div className='div-reflexao-2'>
                    <img  id='img-calvo' onClick={clique3} src={DJCalvo} alt=""/>
                </div>
            </section>
            <section className="section-3">
                <div className="div-galeria">
                <Link to='/videos'><p>Videos</p></Link>
                <Link to='/samp'><p>Dowload</p></Link>
                <Link to='/memes' ><p>Memes</p></Link>
                
            </div>
               </section>
               </section>
           <section className="section-2">
            <div className="mais-info">
                <h2>Mais Informações:</h2>
                <p>A HarD-Ghost atualmente obtem 3 Bases Clâ, sendo 2 na Cidade de San Fierro e 1 em Las Venturas.</p>
            </div>
           </section>
          
           </main>
           <footer>
           <div className="footer-hp">
                <p>HarD-GhosT &reg; 2023</p>
            </div>
            <img id="img-footer" src={Galinha} alt="galinha"/>
        </footer>
    
           <Outlet/>
    </>
    )
}