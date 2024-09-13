import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MeusPedidos from '../../../components/MeusPedidos/MeusPedidos';

export default function MinhaConta() {

  const getClientes = async () => {
    return await axios.get("http://localhost:3001/clientes/1");
  };

  const ClientesList = () => {
    const [clientes, setClientes] = useState([]);

    const fetchClientes = async () => {
      const response = await getClientes();
      setClientes(response.data);
    };

    useEffect(() => {
      fetchClientes();
    }, []);

    return (
      <>
      <div>
        <h1>Minha Conta</h1>
        <div>
          <p><strong>Nome: </strong> {clientes.nome}</p>
          <p><strong>Email: </strong> {clientes.email}</p>
          <p><strong>CPF: </strong> {clientes.cpf}</p>
          <p><strong>Data de nascimento: </strong>{new Date(clientes.data_nasc).toLocaleDateString('pt-BR')}</p>
          <p><strong>Gênero: </strong>
            {clientes.genero === 'F' ? 'Feminino' :
              clientes.genero === 'M' ? 'Masculino' :
                clientes.genero === 'O' ? 'Outros' : 'Não especificado'}
          </p>
        </div>
      </div>
      <MeusPedidos />
      </>
    );
  }
  return <ClientesList />;
}