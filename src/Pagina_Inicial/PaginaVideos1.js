import React from "react";
import { Outlet, Link } from "react-router-dom";
import './css/Videos.css'
import './css/VideosMobile.css'
import Galinha from './img/galinha.png'
import HardSong from './Videos/hardsong.mp4'
import VidSup from './Videos/VID-supremo.mp4'
import Gus5 from './Videos/Gus5.mp4'
import Gus6 from './Videos/Gus6.mp4'
import MemeG from './Videos/MemeG.mp4'
import VIDCalvo from './Videos/VID-calvo.mp4'
import BebHard from './Videos/BebHard.mp4'
import Bebhard2 from './Videos/Beb-hard2.mp4'

export default function Videos1(){
    function Title(){
        document.title = 'HarD | Videos'
    }
    Title()
    return(
        <>
        <header>
                <section className='cabecalho-v'>
                <div className='cabecalho-h1-v'>
                <h1>HarD-GhosT &reg; 2023 </h1>
             </div>
             </section>
        <section className='menu-v'>
                <div className = 'menu-opcao-v'>
                <Link to='/home'><p>Inicio</p></Link>
                <Link to='/memes'><p>Memes</p></Link>
                <Link to='/videos'><p>Videos</p></Link>
                <Link to='/samp'><p>Samp</p></Link>
    </div>
    </section>
    </header>
    <main className="main-v">
        <div className="main-v-div">
        <h1>HarD-Tube</h1>
        </div>

        <div className="div-video">
            <div>
            
        <video width="380" height="240" controls="controls"  preload="metadata">
            <source src={HardSong} type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
            </video>
            <p>
                HarD Oficial Music
            </p>
            </div>
            
        <div>
            <video width="380" height="240" controls="controls" preload="metadata">
            <source src={VidSup}type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
       </video>
       <p>Musica do Maior corno da NWD</p>
       </div>
        </div>
        <div className="div-video">
            <div>
            
        <video width="380" height="240" controls="controls" preload="metadata">
            <source src={Gus5} type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
            </video>
            <p>Mano?</p>
            </div>
            
        <div>
            
            <video width="380" height="240" controls="controls" preload="metadata">
            <source src={MemeG}type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
       </video>
            <p>rsrsrsr</p>
       </div>
        </div>
        <div className="div-video"  >
            <div>
            
        <video width="380" height="240" controls="controls" preload="metadata">
            <source src={Gus6} type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
            </video>
            <p>Playboy</p>
            </div>
            
        <div>
            <video width="380" height="240" controls="controls" preload="metadata">
            <source src={VIDCalvo}type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
       </video>
       <p>HarD-Player</p>
       </div>
        </div>
        <div className="div-video" style={{paddingBottom:'80px',borderBottom:'2px solid #fff'}}>
            <div>
            
        <video width="380" height="240" controls="controls" preload="metadata">
            <source src={BebHard} type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
            </video>
            <p>Membro mais fraco:</p>
            </div>
            
        <div>
            
            <video width="380" height="240" controls="controls" preload="metadata">
            <source src={Bebhard2}type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
       </video>
            <p>...</p>
       </div>
        </div>
        
        <div className="div-bottom">
        <Link to='/videos'><p>Voltar</p></Link>
        <Link to='/home'><p>Tela Inicial</p></Link>
        </div>
      </main>

    <footer style={{backgroundColor:''}}>
            <div className="footer-hp">
                <p>HarD-GhosT &reg; 2023</p>
            </div>
            <div className="img-div-footer">
                <img id="img-footer" src={Galinha} alt="galinha"/>
            </div>
    
        </footer>
    <Outlet/>
        </>
    )
}