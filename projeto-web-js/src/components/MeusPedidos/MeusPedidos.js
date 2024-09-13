import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MeusPedidos() {

  const getPedidos = async () => {
    return await axios.get("http://localhost:3001/pedido/2");
  };

  const PedidosList = () => {
    const [pedidos, setPedidos] = useState([]);

    const fetchPedidos = async () => {
      const response = await getPedidos();
      setPedidos(response.data);
    };

    useEffect(() => {
      fetchPedidos();
    }, []);

    return (
      <div className="listaPedidos">
        <h1>Meus Pedidos</h1>
        <table className="thead-dark">
          <thead>
            <tr>
              <th>Número do Pedido</th>
              <th>Produto</th>
              <th>Data do Pedido</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.pedido_id}>
                <td>{pedido.pedido_id}</td>
                <td>{pedido.produto_id}</td>
                <td>{pedido.data_pedido}</td>
                <td>{pedido.valor_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  return <PedidosList />;
}
