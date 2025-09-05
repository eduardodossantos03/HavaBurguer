import './card.css'


const Card = (props)=> {
    return(
        <div className="Card">
        <img src={props.imagem}  />
        <h3>{props.nome}</h3>
        <p>{props.descricao}</p>
        </div>
    )
}

export default Card;