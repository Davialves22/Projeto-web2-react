import React from "react";
import { useState } from "react";
import axios from "axios";
import ListaProdutos from "../../../components/listaProdutos/ListaProdutos";

export function CadastroProdutos() {
  const [produto, setProduto] = useState({ nome: '', descricao: '', preco: '', imagem_produto: '', categoria: '', quantidade: '' });

  const handleChange = (event) => {
    setProduto({ ...produto, [event.target.name]: event.target.value });
  }

  const handleOnSubmit = async () => {
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
      <div className='container'>
        <div>
          <h1>Cadastro de Produtos</h1>
          <form onSubmit={handleOnSubmit}>
            <div className="row">
              <div>
                <label className='form-Label' >Nome do Produto</label>
                <input onChange={handleChange} value={produto.nome} name="nome" type='text' className='form-control' required />
              </div>
              <div>
                <label className='form-Label'>Descrição do Produto</label>
                <input onChange={handleChange} value={produto.descricao} name="descricao" type='text' className='form-control' required />
              </div>
              <div>
                <label className='form-Label'>Preço do Produto</label>
                <input onChange={handleChange} value={produto.preco} name="preco" type="number" className='form-control' required />
              </div>
              <div>
                <label className='form-Label'>Link imagem do Produto</label>
                <input onChange={handleChange} value={produto.imagem_produto} name="imagem_produto" type='text' className='form-control' required />
              </div>
              <div>
                <label className='form-Label'>Categoria do Produto</label>
                <select onChange={handleChange} value={produto.categoria} name="categoria" required class="form-select" aria-label="">
                  <option selected disabled></option>
                  <option value="Pneu">Pneu</option>
                  <option value="Motor">Motor</option>
                  <option value="Bateria">Bateria</option>
                  <option value="Freio">Freio</option>
                  <option value="Suspensão">Suspensão</option>
                </select>
              </div>
              <div>
                <label className='form-Label'>Quantidade do Produto</label>
                <input onChange={handleChange} value={produto.quantidade} name="quantidade" type="number" className='form-control' required />
              </div>
              <div>
                <input className="btn btn-primary" type="submit" value="Cadastrar" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <ListaProdutos />
    </>
  );
}
