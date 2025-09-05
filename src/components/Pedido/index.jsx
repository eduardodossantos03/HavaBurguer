import './pedido.css'
import { useState } from 'react';

const Pedido = () => {
  const [lanche, setLanche] = useState("");
  const [usuario, setUsuario] = useState("");
  const [numero, setNumero] = useState("");
  const [endereco, setEndereco] = useState("");

function Acao(e) {
    e.preventDefault();
    const pedido = {usuario, numero, endereco, lanche}
    enviarPedido(pedido)
}

function enviarPedido(pedido){
  const numero = 11958846354
  const mensagem = 
    `Pedido de: ${usuario}\nTelefone: ${numero}\nEndereço: ${endereco}\nLanche: ${lanche}`
    const url = `https://wa.me/${11964348439}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

return (
    <div className="Pedido">
    <h2>Faça seu Pedido!</h2>

    <form onSubmit={Acao}>
        <label>Nome</label>
        <input
        type="text"
        placeholder="Qual seu nome"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        />

        <label>Telefone</label>
        <input
        type="text"
        placeholder="Qual seu número"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        />

        <label>Endereço para entrega</label>
        <input
        type="text"
        placeholder="Qual seu endereço"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        />

        <label>Escolha seu lanche</label>
        <select
          name="lanches"
          id="lanches"
          value={lanche}
          onChange={(e) => setLanche(e.target.value)}
        >
          <option value="">-- Selecione --</option>
          <option value="HavaOriginal">HavaOriginal</option>
          <option value="CheddarBacon">Cheddar Bacon</option>
          <option value="VeganoDelicia">Vegano Delícia</option>
        </select>

        <button type="submit">Enviar Pedido</button>
      </form>
    </div>
  );
};

export default Pedido;
