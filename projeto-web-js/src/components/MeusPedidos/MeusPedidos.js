import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListaPedidos() {

  const getPedido = async () => {
    return await axios.get("http://localhost:3001/pedido");
  };


  const PedidoList = () => {
    const [pedido, setPedido] = useState([]);

    const fetchPedido = async () => {
      const response = await getPedido();
      setPedido(response.data);
    };

    useEffect(() => {
      fetchPedidos();
    }, []);

    return (
      <div className="listaPedidos">
        <h1>Lista de Produtos</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Data da Compra</th>
              <th>Valor total</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.pedido_id}>
                <td>{pedido.nome}</td>
                <td>{pedido.descricao}</td>
                <td>{pedido.categoria}</td>
                <td>{pedido.preco}</td>
                <td>{pedido.quantidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

  };
  return <ListaPedidos />;
} 