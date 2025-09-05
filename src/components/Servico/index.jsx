import './servicos.css'
import HavaLogo from '../../assets/imagens/HavaLogo.PNG'

const Servicos = ()=>{
    return(

        <div className="servico">
        <div className="texto-servico">
            <h1>
                Nossos Serviços
            </h1>
            <p>
            No HavaBurguer você encontra os lanches mais saborosos da região, preparados com ingredientes frescos, carnes de qualidade e aquele toque especial que faz toda a diferença.

Nossa missão é oferecer uma experiência completa: desde a recepção calorosa até a entrega rápida e segura do seu pedido. Aqui você pode escolher entre hambúrgueres artesanais, porções, molhos exclusivos e opções veganas, tudo pensado para agradar diferentes paladares.

Seja para uma refeição com os amigos, um delivery no conforto de casa ou até mesmo aquele lanche rápido no intervalo do trabalho, o HavaBurguer é a escolha certa para quem busca sabor, qualidade e preço justo.
            </p>
        </div>

        <div className="imagem">
            <img src={HavaLogo} alt="lOGO" srcset="" />
        </div>
        </div>
        
    )
}

export default Servicos;