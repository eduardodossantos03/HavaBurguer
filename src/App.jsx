
import Card from './components/Cardapio'
import Footer from './components/Footer'
import Headers from './components/Header'
import NavBar from './components/NavBar/index'
import Pedido from './components/Pedido'
import Servico from './components/Servico'
import './App.css'


function App() {
  
  return (
    <>
    <NavBar/>
    <Headers/>
    <h2>Nossas Opções</h2>
    <Card/>
    <Servico/>
    <Pedido/>
    <Footer/>
    </>
  )
}

export default App
