import React from "react";
import { useState } from "react";
import axios from "axios";

export function CadastroProdutos() {
  const [produto, setProduto] = useState({ nome: '', descricao:'', preco:'', imagem_produto:'', categoria:'', quantidade:'' });

  function handleChange(event){
    setProduto({...produto, [event.target.name]:event.target.value});
  }

  function handleOnSubmit(event){
    event.preventDefault();
    axios.post("http://localhost:3001/produtos/", produto).then(res =>{
      console.log(res);
      alert("Produto cadastrado com sucesso");
      setProduto({ nome: '', descricao:'', preco:'', imagem_produto:'', categoria:'', quantidade:'' });
    }).catch(error => {
      console.error("Erro ao cadastrar produto:", error);
      alert("Erro ao cadastrar produto");
    });
  }

  return (
    <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <h1>Cadastro de Produtos</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ flex: '1 1 48%' }}>
              <label className='form-Label'>Nome do Produto</label>
              <input onChange={handleChange} value={produto.nome} name="nome" type='text' className='form-control' />
            </div>
            <div style={{ flex: '1 1 48%' }}>
              <label className='form-Label'>Descrição do Produto</label>
              <input onChange={handleChange} value={produto.descricao} name="descricao" type='text' className='form-control' />
            </div>
            <div style={{ flex: '1 1 48%' }}>
              <label className='form-Label'>Preço do Produto</label>
              <input onChange={handleChange} value={produto.preco} name="preco" type="number" className='form-control' />
            </div>
            <div style={{ flex: '1 1 48%' }}>
              <label className='form-Label'>Link imagem do Produto</label>
              <input onChange={handleChange} value={produto.imagem_produto} name="imagem_produto" type='text' className='form-control' />
            </div>
            <div style={{ flex: '1 1 48%' }}>
              <label className='form-Label'>Categoria do Produto</label>
              <input onChange={handleChange} value={produto.categoria} name="categoria" type='text' className='form-control' />
            </div>
            <div style={{ flex: '1 1 48%' }}>
              <label className='form-Label'>Quantidade do Produto</label>
              <input onChange={handleChange} value={produto.quantidade} name="quantidade" type="number" className='form-control' />
            </div>
            <div style={{ flex: '1 1 100%', marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
              <input className="btn btn-primary" type="submit" value="Cadastrar" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
