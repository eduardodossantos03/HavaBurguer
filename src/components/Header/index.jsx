import './header.css'
import imagemHeader from "../../assets/imagens/havaHeader.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-texto">
        <h1>A melhor experiência da região está aqui!</h1>
        <h2>
No HavaBurguer você encontra hambúrgueres artesanais preparados com carnes selecionadas, ingredientes frescos e receitas exclusivas que trazem o verdadeiro sabor da região.
        </h2>
      </div>

      <div className="header-imagem">
        <img src={imagemHeader} alt="Hamburguer" />
      </div>
    </div>
  )
}

export default Header;
