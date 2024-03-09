import React from "react";
import { Outlet, Link } from "react-router-dom";
import './css/Videos.css'
import './css/VideosMobile.css'
import Galinha from './img/galinha.png'
import Gus0 from './Videos/Gus0.mp4'
import Gus1 from './Videos/Gus1.mp4'
import Gus2 from './Videos/Gus2.mp4'
import Gus3 from './Videos/Gus3.mp4'
import Gus4 from './Videos/Gus4.mp4'
import Beb from './Videos/Beb.mp4'
import Beb1 from './Videos/Beb1.mp4'
import Beb2 from './Videos/Beb2.mp4'
import Beb3 from './Videos/Beb3.mp4'
import CalB from './Videos/CalB.mp4'
import VidHard from './Videos/VID-hard.mp4'
import VidCarioca from './Videos/VID-carioca.mp4'


export default function Videos(){
    function Title(){
        document.title = 'HarD | Videos'
    }
    Title()

    return(
        <>
        <header>
                <section className='cabecalho-v'>
                <div className='cabecalho-h1-v'>
                <h1>HarD-GhosT &reg; 2024 </h1>
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
            
        <video width="380" height="240" controls="controls" preload="metadata">
            <source src={Gus0} type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
            </video>
            <p>Fumante Dançando Locamente</p>
            </div>
            
        <div>
            <video width="380" height="240" controls="controls" preload="metadata">
            <source src={Gus1}type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
       </video>
       <p>Zé ruela</p>
       </div>
        </div>
        <div className="div-video">
            <div>
            
        <video width="380" height="240" controls="controls" preload="metadata">
            <source src={Beb} type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
            </video>
            <p>Bebado Forever</p>
            </div>
            
        <div>
            
            <video width="380" height="240" controls="controls" preload="metadata">
            <source src={Beb1}type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
       </video>
            <p>rsrsrsr</p>
       </div>
        </div>
        <div className="div-video">
            <div>
            
        <video width="380" height="240" controls="controls" preload="metadata">
            <source src={Beb2} type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
            </video>
            <p>Bebados da HarD</p>
            </div>
            
        <div>
            <video width="380" height="240" controls="controls" preload="metadata">
            <source src={Beb3}type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
       </video>
       <p>Cachaça faz coisa...</p>
       </div>
        </div>

        <div className="div-video">
            <div>
            
        <video width="380" height="240" controls="controls" preload="metadata">
            <source src={CalB} type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
            </video>
            <p>Conquistador de Casadas</p>
            </div>
            
        <div>
            <video width="380" height="240" controls="controls" preload="metadata">
            <source src={Gus2}type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
       </video>
       <p>Lá ele 1000x</p>
       </div>
        </div>

        <div className="div-video">
            <div>
            
        <video width="380" height="240" controls="controls" preload="metadata">
            <source src={Gus3} type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
            </video>
            <p>Se revelando</p>
            </div>
            
        <div>
            <video width="380" height="240" controls="controls" preload="metadata">
            <source src={Gus4}type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
       </video>
       <p>Gustavo na igreja</p>
       </div>
        </div>

        <div className="div-video" style={{paddingBottom:'80px',borderBottom:'2px solid #fff'}}>
            <div>
            
        <video width="380" height="240" controls="controls" preload="metadata">
            <source src={VidHard} type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
            </video>
            <p>Só ostentando</p>
            </div>
            
        <div>                   
            <video width="380" height="240" controls="controls" preload="metadata">
            <source src={VidCarioca}type="video/mp4"/>
            <object data="" width="320" height="240">
            <embed width="320" height="240" src=''/>
            </object>
       </video>
       <p>Terra do Cadu ai</p>
       </div>
        </div>
        <div className="div-bottom">
        <Link to='/home'><p>Tela Inicial</p></Link>
        <Link to='/videos2'><p>Proximo</p></Link>
        </div>
    </main>
    <footer style={{backgroundColor:''}}>
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