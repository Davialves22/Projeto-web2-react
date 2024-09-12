import React, { useState } from "react";
import axios from "axios";
import ListaProdutos from "../../../components/listaProdutos/ListaProdutos";
import styles from './CadastroProdutos.module.css'; // Importa o CSS Module

export function CadastroProdutos() {
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    preco: '',
    imagem_produto: '',
    categoria: '',
    quantidade: ''
  });

  const handleChange = (event) => {
    setProduto({ ...produto, [event.target.name]: event.target.value });
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault(); // Adiciona prevenção de comportamento padrão do formulário
    try {
      const res = await axios.post("http://localhost:3001/produtos", produto);
      console.log(res);
      alert("Produto cadastrado com sucesso");
      setProduto({
        nome: '',
        descricao: '',
        preco: '',
        imagem_produto: '',
        categoria: '',
        quantidade: ''
      });
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
      alert("Erro ao cadastrar produto");
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Cadastro de Produtos</h1>
          <form onSubmit={handleOnSubmit}>
            <div className="row">
              <div>
                <label className={styles.formLabel}>Nome do Produto</label>
                <input
                  onChange={handleChange}
                  value={produto.nome}
                  name="nome"
                  type='text'
                  className={styles.formControl}
                  required
                />
              </div>
              <div>
                <label className={styles.formLabel}>Descrição do Produto</label>
                <input
                  onChange={handleChange}
                  value={produto.descricao}
                  name="descricao"
                  type='text'
                  className={styles.formControl}
                  required
                />
              </div>
              <div>
                <label className={styles.formLabel}>Preço do Produto</label>
                <input
                  onChange={handleChange}
                  value={produto.preco}
                  name="preco"
                  type="number"
                  className={styles.formControl}
                  required
                />
              </div>
              <div>
                <label className={styles.formLabel}>Link imagem do Produto</label>
                <input
                  onChange={handleChange}
                  value={produto.imagem_produto}
                  name="imagem_produto"
                  type='text'
                  className={styles.formControl}
                  required
                />
              </div>
              <div>
                <label className={styles.formLabel}>Categoria do Produto</label>
                <select
                  onChange={handleChange}
                  value={produto.categoria}
                  name="categoria"
                  required
                  className={styles.formControl}
                  aria-label=""
                >
                  <option value="" disabled></option>
                  <option value="Pneu">Pneu</option>
                  <option value="Motor">Motor</option>
                  <option value="Bateria">Bateria</option>
                  <option value="Freio">Freio</option>
                  <option value="Suspensão">Suspensão</option>
                </select>
              </div>
              <div>
                <label className={styles.formLabel}>Quantidade do Produto</label>
                <input
                  onChange={handleChange}
                  value={produto.quantidade}
                  name="quantidade"
                  type="number"
                  className={styles.formControl}
                  required
                />
              </div>
              <div>
                <input
                  className={styles.btn}
                  type="submit"
                  value="Cadastrar"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <ListaProdutos />
    </>
  );
}