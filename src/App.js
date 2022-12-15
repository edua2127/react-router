import './App.css';
/*
  importacao dos componentes
*/
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product'
import Info from './pages/Info';
import NotFound from './pages/NotFound';
/*
  importes do REACT ROUTER
*/
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import FormularioDeBusca from './components/FormularioDeBusca';
import Search from './pages/Search';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <FormularioDeBusca />
        <Routes>
              <Route path="/" element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path="/produtos/:id/info" element={<Info/>} />
              <Route path="/produtos/:id" element={<Product/>} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
