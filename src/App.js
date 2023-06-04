import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaAbertura from './Pagina_Inicial/PaginaAbertura'
import PaginaHome from './Pagina_Inicial/PaginaHome'
import PaginaSamp from './Pagina_Inicial/PaginaSamp'
import PaginaVideos from './Pagina_Inicial/PaginaVideos'
import PaginaVideos1 from './Pagina_Inicial/PaginaVideos1'
import PaginaMemes from './Pagina_Inicial/PaginaMemes'



function App() {
  return (
    <div className="App">
      <>
      
        <Routes>
        <Route  path="/" element={<PaginaAbertura/>} />
        <Route  path="/home" element={<PaginaHome/>} />
        <Route  path="/samp" element={<PaginaSamp/>} />
        <Route  path="/videos" element={<PaginaVideos/>} />
        <Route  path="/videos2" element={<PaginaVideos1/>} />
        <Route  path="/memes" element={<PaginaMemes/>} />
        </Routes>
    
        
      </>
    </div>
  );
}

export default App;
