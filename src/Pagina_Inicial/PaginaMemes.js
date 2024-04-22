import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './css/Memes.css'
import './css/MemesMobile.css'
export default function Memes(){
    function Title(){
        document.title = 'HarD | Memes'
    }
    Title()
    const bv =()=>{
        const el = document.getElementById('el')
        
        setInterval(function () {
            el.innerHTML = 'HarD-GhosT &reg; 2024'
    }, 1000*10); 
         el.innerHTML =  'Memes da HarD'
           
    }
    return(
        <>
        <header>
            <section className='cabecalho-m'>
                <div className='cabecalho-h1-m'>
                    <h1 id="el" onMouseLeave={bv} >HarD-GhosT &reg; 2024 </h1>
                </div>
            </section>
            <section className='menu-m'>
                <div className = 'menu-opcao-m'>
                <Link to='/home'><p>Inicio</p></Link>
                <Link to='/memes'><p>Memes</p></Link>
                <Link to='/videos'><p>Videos</p></Link>
                <Link to='/samp'><p>Samp</p></Link>
                </div>
        </section>
      </header>

      <main>
            <div className='div-h2'>
                <h2>Galeria de Memes:</h2>
            </div>
            <div className='div-img'>
                <img src='./img/adm-bia.jpg' alt='adm-bia'></img>
                <img src='./img/alex.jpg' alt='alex'></img>
                <img src='./img/ana.jpg' alt='ana'></img>
                <img src='./img/bailao.jpg' alt='bailao'></img>
                <img src='./img/bebados.jpg' alt='bebados'></img>
                <img src='./img/boi.png' alt='boi'></img>

                <img src='./img/boisupremo.jpg' alt='boi'></img>
                <img src='./img/boisupremo2.jpg' alt='boi'></img>
                <img src='./img/iconic.png' alt='dino'></img>
                <img src='./img/buzzAlex.jpg' alt='buzz'></img>
                <img src='./img/cadujulius.jpg' alt='cadujulius'></img>
                <img src='./img/cadujulius2.jpg' alt='cadujulius2'></img>

                <img src='./img/cadulib.jpg' alt='cadulib'></img>
                <img src='./img/cadupm.jpg' alt='cadupm'></img>
                <img src='./img/caduPT.jpg' alt='cadupt'></img>
                <img src='./img/calvo-boi.jpg' alt='calvo-boi'></img>
                <img src='./img/calvo-pinguin.jpg' alt='calvo-pinguin'></img>
                <img src='./img/calvo-presidente.jpg' alt='calvo-presidente'></img>

                <img src='./img/calvofemia.jpg' alt='calvofemia'></img>
                <img src='./img/certificado.jpg' alt='certificado'></img>
                <img src='./img/coringa.jpg' alt='coringa'></img>
                <img src='./img/coringa2.jpg' alt='coringa2'></img>
                <img src='./img/DjCalvo.jpg' alt='Dj-Calvinho'></img>
                <img src='./img/corinthians.jpg' alt='corinthias'></img>

                <img src='./img/corno.jpg' alt='corno'></img>
                <img src='./img/cornodormindo.jpg' alt='corno-dormindo'></img>
                <img src='./img/dino-julius.jpg' alt='dino-julius'></img>
                <img src='./img/dinoassado.jpg' alt='dino-assado'></img>
                <img src='./img/dinobem.jpg' alt='dino-bem'></img>
                <img src='./img/dinoclassic.jpg' alt='dino-classic'></img>

                <img src='./img/douradoanao.jpg' alt='dourado-anao'></img>
                <img src='./img/felipe.jpg' alt='felipe'></img>
                <img src='./img/felipeemuie.jpg' alt='felipe-muie'></img>
                <img src='./img/galinha.png' alt='galinha'></img>
                <img src='./img/gustavo-mae.jpg' alt='gus-mae'></img>
                <img src='./img/gustavo.jpg' alt='gus'></img>

                <img src='./img/gustavo2.jpg' alt='gus-2'></img>
                <img src='./img/gustavo3.jpg' alt='gus-3'></img>
                <img src='./img/gustavo4.jpg' alt='gus-4'></img>
                <img src='./img/gustavo5.jpg' alt='gus-5'></img>
                <img src='./img/corno1.jpg' alt='corno'></img>
                <img src='./img/gustavovitar.jpg' alt='gus-vitar'></img>

                <img src='./img/hamsterdourado.jpg' alt='hamsterdourado'></img>
                <img src='./img/hamsterdourado2.jpg' alt='hamsterdourado-2'></img>
                <img src='./img/hamsterdourado3.png' alt='hamsterdourado-3'></img>
                <img src='./img/hard-faroeste.jpg' alt='hard-faroeste'></img>
                <img src='./img/intervencao.jpg' alt='intervenção'></img>
                <img src='./img/japim.jpg' alt='japim'></img>

                <img src='./img/lula.jpg' alt='lula'></img>
                <img src='./img/mestedazila.jpg' alt='zikador'></img>
                <img src='./img/mikeias.jpg' alt='mikeias'></img>
                <img src='./img/mikeiaschaves.jpg' alt='mikeias-chaves'></img>
                <img src='./img/mulhermendingo.jpg' alt='mulher-mendigo'></img>
                <img src='./img/oposto.jpg' alt='oposto'></img>

                <img src='./img/paulixtas.jpg' alt='paulista'></img>
                <img src='./img/policiais.jpg' alt='policiais'></img>
                <img src='./img/presidentes.jpg' alt='presidentes'></img>
                <img src='./img/prisoneiros.jpg' alt='prisioneiros'></img>
                <img src='./img/rato.jpg' alt='rato'></img>
                <img src='./img/reifelipe.jpg' alt='rei-felipe'></img>

                <img src='./img/sheikcadu.jpg' alt='cadu-sheik'></img>
                <img src='./img/sheikcoringa.jpg' alt='coringa-sheik'></img>
                <img src='./img/sheikfelipe.jpg' alt='felipe-sheik'></img>
                <img src='./img/supremo.jpg' alt='supremo'></img>
                <img src='./img/tobi.jpg' alt='tobi'></img>
                <img src='./img/tobi2.jpg' alt='tobi-2'></img>

                <img src='./img/tobibos.jpg' alt='tobi-bos'></img>
                <img src='./img/hamsterdourado4.png' alt='hamster'></img>
                <img src='./img/gustavo6.jpg' alt='bebado'></img>
                <img src='./img/cadufla.jpg' alt='cadu-fla'></img>
                <img src='./img/gustavo7.jpg' alt='assaltante'></img>
                <img src='./img/dourado-felipe.jpg' alt='dourado-felipe'></img>

                <img src='./img/tobicrime.jpg' alt='tobi-crime'></img>
                <img src='./img/darkdino.jpg' alt='dark-dino'></img>
                <img src='./img/propriedade.jpg' alt='proriedade-hard'></img>
                <img src='./img/cadugordo.jpg' alt='cadu e alex'></img>
                <img src='./img/calvajin.jpg' alt='cavaljin'></img>
                <img src='./img/dourado-felipe.jpg' alt='dourado-felipe'></img>

                <img src='./img/moto.jpg' alt='moto'></img>
                <img src='./img/rap.jpg' alt='raphael'></img>
                <img src='./img/felipebomb.jpg' alt='felipe'></img>
                <img src='./img/cadupreguica.jpg' alt='cadu-preguiça'></img>
                <img src='./img/hard-esquilos.jpg' alt='hard-esquilos'></img>

                <img src='./img/bicicleta.jpg' alt='bicicleta'></img>
                <img src='./img/coringaL.jpg' alt='coringa-L'></img>
                <img src='./img/cadu-tarzan.jpg' alt='cadu-tarzan'></img>
                <img src='./img/alex1.jpg' alt='alex'></img>
                <img src='./img/cadu-preso.jpg' alt='cadu-preso'></img>

                <img src='./img/gol.jpg' alt='gol'></img>
                <img src='./img/L.jpg' alt='L'></img>
                <img src='./img/douradoanao2.jpg' alt='dourado-anao'></img>
                <img src='./img/felipe-tocador.jpg' alt='felipe'></img>
                <img src='./img/bike2.jpg' alt='bike2'></img>

                <img src='./img/carro.jpg' alt='carro'></img>
                <img src='./img/calvo-militar.jpg' alt='calvo-pm'></img>
                <img src='./img/memeNWD.jpg' alt='nwd'></img>
                <img src='./img/curiosos.jpg' alt='curiosos'></img>
                <img src='./img/hard-pantanal.jpg' alt='hard-pantanal'></img>
                <img src='./img/gus-velho.jpg' alt='velho'></img>



////
                <img src='./img/acai-membro.jpg' alt='carro'></img>
                <img src='./img/dourado-membro.jpg' alt='calvo-pm'></img>
                <img src='./img/supremo-membro2.jpg' alt='nwd'></img>
                <img src='./img/tobiburro.jpg' alt='curiosos'></img>
                <img src='./img/tobiboso.jpg' alt='hard-pantanal'></img>
                <img src='./img/augusto-membro.jpg' alt='velho'></img>



                <img src='./img/caducrak.jpg' alt='carro'></img>
                <img src='./img/mikeiaspref.jpg' alt='calvo-pm'></img>
                <img src='./img/memecorno.jpg' alt='nwd'></img>
                <img src='./img/mikeiasvitar.jpg' alt='curiosos'></img>
                <img src='./img/mikeiasmoto.jpg' alt='hard-pantanal'></img>
                <img src='./img/tobirodas.jpg' alt='velho'></img>



                <img src='./img/gustavoovo.jpg' alt='carro'></img>
                <img src='./img/spxcp.jpg' alt='calvo-pm'></img>
                <img src='./img/mikeiascalvo.jpg' alt='nwd'></img>
                <img src='./img/alexmeme.jpg' alt='curiosos'></img>
                <img src='./img/gustavob.jpg' alt='hard-pantanal'></img>
                <img src='./img/luanb.jpg' alt='velho'></img>
            </div>
      </main>
      <section className="section-botao-m">
            <div>
            <Link  to='/home' ><p>Voltar</p></Link>
            </div>
        </section>
      <footer>
            <div className="footer-hp">
                <p>HarD-GhosT &reg; 2024</p>
             </div>
            <div className="img-div-footer">
                <img id="img-footer" src='./img/galinha.png' alt="galinha"/>
            </div>
    </footer>
            <Outlet/>
        </>
    )
}