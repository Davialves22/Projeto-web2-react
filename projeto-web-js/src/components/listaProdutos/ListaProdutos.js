import React, { useEffect, useState } from "react";
import axios from "axios";
import './ListaProdutos.css'

export default function ListaProdutos() {

  const getProdutos = async () => {
    return await axios.get("http://localhost:3001/produtos");
  };

  const deleteProduto = async (id) => {
    return await axios.delete(`http://localhost:3001/produtos/${id}`);
  };

  const ProdutosList = () => {
    const [produtos, setProdutos] = useState([]);

    const fetchProdutos = async () => {
      const response = await getProdutos();
      setProdutos(response.data);
    };

    useEffect(() => {
      fetchProdutos();
    }, []);

    const handleDelete = async (id) => {
      await deleteProduto(id);
      alert("Produto deletado com sucesso")
      fetchProdutos();
    };

    return (
      <div className="listaProdutos">
        <h1>Lista de Produtos</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Link Imagem</th>
              <th>Categoria</th>
              <th>Quantidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.produto_id}>
                <td>{produto.produto_id}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.preco}</td>
                <td>{produto.imagem_produto}</td>
                <td>{produto.categoria}</td>
                <td>{produto.quantidade}</td>
                <td>
                  <button onClick={() => handleDelete(produto.produto_id)}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

  };
  return <ProdutosList />;
}
