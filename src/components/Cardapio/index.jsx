import './cardapio.css'
import Card from '../Card';
import HavaMenu from "../../assets/imagens/HavaMenu.PNG";
import HavaMenu2 from "../../assets/imagens/HavaMenu2.PNG";
import HavaMenu3 from "../../assets/imagens/HavaMenu3.PNG";


const Cardapio = (props)=> {
    return(
        <div className="Cardapio">
        <Card imagem={HavaMenu} alt="porção de Batata" nome= "Diversas Porções" descricao= "Porções de Batata frita, Frango, Calabresa e muito mais! "/>
        <Card imagem={HavaMenu2} nome= "Lanches" descricao= "Diversas opções de lanches pra toda a família"/>
        <Card imagem= {HavaMenu3} nome= "Molhos Especiais" descricao= "Molhos especiais da casa que vão te surpreender  "/>
        </div>
    )
}

export default Cardapio;