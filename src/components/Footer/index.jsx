import './Footer.css'

const Footer = () => {
return (
    <footer className="footer">
    <div className="footer-section">
        <h2>Entre em Contato</h2>
        <p>
            WhatsApp: (11) 97491-8784
        </p>
    </div>

    <div className="footer-section">
        <h2>Horário de atendimento</h2>
        <p>
        ⏰️ Ter à Qui 15h ás 22h00
        </p>
        <p>
        ⏰️ Sex e Sáb: 15h ás 1h00
        </p>
        <p>
        ⏰️ Dom 15h às 22h00
        </p>
    </div>

    <div className="footer-section">
        <h2>Conheça nosso instagram</h2>
        <a href="https://www.instagram.com/havaburgueroficial">@HavaBurguer</a>
    </div>

    </footer>
)
}

export default Footer
