import React from "react";
import { Outlet, Link } from "react-router-dom";
import './css/Membros.css'
import './css/MembrosMobile.css'
import MinhaFoto from './img/minhafoto.png'
import Galinha from './img/galinha.png'


export default function Membros(){
    return(
        <>
            <header>

<section className='cabecalho'id='cabecalho' >
    <div className='cabecalho-h1' >
        <h1  id='el'>HarD-GhosT &reg; 2024 </h1>
        
    </div>
    </section>
    <section className='menu-membros'>
    <div className = 'menu-opcao-membros'>
        <Link to='/home'><p>Inicio</p></Link>
        <Link to='/memes'><p>Memes</p></Link>
        <Link to='/videos'><p>Videos</p></Link>
        <Link to='/samp'><p>Samp</p></Link>
    </div>
    </section>
   
</header>
<main>
    <section className="section-membros"> 
    
        <div>
            <h1>Lista de Membros por cargo do Clâ HarD-GhosT (Total de 24 integrantes)</h1>
        </div>

        <div className="section-membros-div">

        <div className="section-membros-div-color">
        <div>
            <h2>Fundador </h2>
            <div>
                <img src='./img/luan.png'></img>
                <h3>Ithesnoorthdor</h3>
                <p>Um dos mais bebados que já pisou nessa NWD.</p>
            </div>
        </div>
        </div>


        <div className="section-membros-div-color">
        <div>
            <h2>Dono</h2>
            <div>
                <img src='./img/felipe-membro.png'></img>
                <h3>DJ Calvinho</h3>
                <p>O maior calvo de todos os tempos é do nosso clâ!</p>
            </div>
        </div>
        </div>
        </div>
    </section>

    <section className="section-membros"> 
        <div>
            <h1>Nossos Staffs</h1>
        </div>

        <div className="section-membros-div-2">
        <div className="section-membros-div-2-color">
          
            <div>
                <img src={MinhaFoto}></img>
                <h3>[HarD]Ninja</h3>
                <p>Criador desse site e maior abuser da NWD.</p>
            </div>
        </div>

        <div className="section-membros-div-2-color"> 
    
            <div>
                <img src='./img/dourado-membro.png'></img>
                <h3>[HarD]Dourado</h3>
                <p>Maior viciado em CS e vendedor de brabas.</p>
            </div>
        </div>
        <div className="section-membros-div-2-color">
          
          <div>
              <img src='./img/mikeias-membro.png'></img>
              <h3>[HarD]TerStegen</h3>
              <p>Nosso prefeito e criador de conteúdo WEB.</p>
          </div>
      </div>
        </div>
        
     
    </section>




    <section className="section-membros"> 
        <div>
            <h1>Todos os Membros</h1>
        </div>

        <div className="section-membros-div-2">
        <div className="section-membros-div-2-color">  
          
            <div>
                <img src='./img/alex-membro.png'></img>
                <h3>[HarD]Alex</h3>
                <p>Famoso baba ovo de staff!</p>
            </div>
        </div>

        <div className="section-membros-div-2-color">
    
            <div>
                <img src='./img/supremo-membro.png'></img>
                <h3>[HarD]$upremo</h3>
                <p>O maior corno de todos os tempos!</p>
            </div>
        </div>
        <div className="section-membros-div-2-color">
          
          <div>
              <img src='./img/tobi-membro.png'></img>
              <h3>[HarD]Tobirodas</h3>
              <p>A maior lenda que pisou em nosso clâ, tobilenda é sempre lenda.</p>
          </div>
      </div>

      <div className="section-membros-div-2-color">
          
          <div>
              <img src='./img/acai-membro.png'></img>
              <h3>[HarD]TheBestAcai</h3>
              <p>Itáliano, dono de franquia de açai, chef de máfia e programador.</p>
          </div>
      </div>


    

        </div>
        
     
    </section>


    <section className="section-membros"> 
       

        <div className="section-membros-div-2">
        <div className="section-membros-div-2-color">  
          
            <div>
                <img src='./img/gustavo-membro.png'></img>
                <h3>[HarD]GustavoR</h3>
                <p>Inimigo número um de todos, maior caloteiro do clâ!</p>
            </div>
        </div>

        <div className="section-membros-div-2-color">
    
            <div>
                <img src='./img/batemam-membro.png'></img>
                <h3>[HarD]Batemam</h3>
                <p>O batmam da shopee é do nosso clâ!</p>
            </div>
        </div>
        <div className="section-membros-div-2-color">
          
          <div>
              <img src='./img/aninha-membro.png'></img>
              <h3>[HarD]Aninha</h3>
              <p>Hater numero um do felipe.</p>
          </div>
      </div>

      <div className="section-membros-div-2-color">
          
          <div>
              <img src='./img/batemam-membro.png'></img>
              <h3>[HarD]Claudio</h3>
              <p>Aparece no clã uma vez por ano pra dar boa tarde.</p>
          </div>
      </div>


    

        </div>
        
     
    </section>






    <section className="section-membros"> 
       

       <div className="section-membros-div-2">
       <div className="section-membros-div-2-color">  
         
           <div>
               <img src='./img/batemam-membro.png'></img>
               <h3>[HarD]EzequielNF</h3>
               <p>Ama voar numa azinha!</p>
           </div>
       </div>

       <div className="section-membros-div-2-color">
   
           <div>
               <img src='./img/batemam-membro.png'></img>
               <h3>[HarD]Cocada</h3>
               <p>Outro corno do nosso clâ!</p>
           </div>
       </div>
       <div className="section-membros-div-2-color">
         
         <div>
             <img src='./img/batemam-membro.png'></img>
             <h3>[HarD]Jaba</h3>
             <p>Maior Hater do nosso clâ.</p>
         </div>
     </div>

     <div className="section-membros-div-2-color">
         
         <div>
             <img src='./img/augusto-membro.png'></img>
             <h3>[HarD]Augusto</h3>
             <p>Sua irmã é demais!</p>
         </div>
     </div>


       </div>
       
    
   </section>





   <section className="section-membros"> 
       

       <div className="section-membros-div-2">
       <div className="section-membros-div-2-color">  
         
           <div>
               <img src='./img/batemam-membro.png'></img>
               <h3>[HarD]Leticia</h3>
               <p>Um ser que praticamente sua vida toda fingiu ser mulher.</p>
           </div>
       </div>

       <div className="section-membros-div-2-color">
   
           <div>
               <img src='./img/supremo-membro.png'></img>
               <h3>[HarD]Bandido</h3>
               <p>Ladrão de Galinha!</p>
           </div>
       </div>
       <div className="section-membros-div-2-color">
         
         <div>
             <img src='./img/DG-membro.png'></img>
             <h3>[HarD]DG</h3>
             <p>Mais sumido que prefeito depois de eleito.</p>
         </div>
     </div>

     <div className="section-membros-div-2-color">
         
         <div>
             <img src='./img/batemam-membro.png'></img>
             <h3>[HarD]Yan</h3>
             <p>Apareceu do nada no nosso clâ.</p>
         </div>
     </div>


   

       </div>
       
    
   </section>




   <section className="section-membros"> 
       

       <div className="section-membros-div-2">
       <div className="section-membros-div-2-color">  
         
           <div>
               <img src='./img/batemam-membro.png'></img>
               <h3>[HarD]Vitor</h3>
               <p>Amigo do bebado e do calvinho.</p>
           </div>
       </div>
       
     <div className="section-membros-div-2-color">
         
         <div>
             <img src='./img/coringa-membro.png'></img>
             <h3>[HarD]Coringa</h3>
             <p>Um dos mais crakudos do clâ.</p>
         </div>
     </div>
        
     <div className="section-membros-div-2-color">
         
         <div>
             <img src='./img/cadu-membro.png'></img>
             <h3>[HarD]Cadu</h3>
             <p>Cria mais fraco do Rio de Janeiro.</p>
         </div>
     </div>

</div>
</section>
<section className="section-voltar-membros">
    <Link style={{color:'#fff'}} to='/home'><h2>Voltar</h2></Link>
</section>
</main>
<footer className="footer-membros">
           <div className="footer-hp">
                <p>HarD-GhosT &reg; 2024</p>
            </div>
            <img id="img-footer" src={Galinha} alt="galinha"/>
        </footer>
    
        </>
    )
}