import React, { useEffect, useState } from 'react';
import LocalStoregeHelper from '../../../helpers/localStorage.helper';
import ClienteService from '../../../services/clienteService';

export const MinhaConta = () => {
  const [clientes, setClientes] = useState([]);


  useEffect(() => {
    const fetchClientes = async () => {
      const user = LocalStoregeHelper.getUserLogged();
      const responseClient = await ClienteService.getClient(user.email);
      setClientes(responseClient.data[0]);
    };
    fetchClientes();
  }, []);

  return (
    <>
      <div class="container mt-5">
        <div class="card">
          <div class="card-header">
            <h1 class="card-title">Minha Conta</h1>
          </div>
          <div class="card-body">
            <dl class="row">
              <dt class="col-sm-3"><strong>Nome:</strong></dt>
              <dd class="col-sm-9">{clientes.nome}</dd>

              <dt class="col-sm-3"><strong>Email:</strong></dt>
              <dd class="col-sm-9">{clientes.email}</dd>

              <dt class="col-sm-3"><strong>CPF:</strong></dt>
              <dd class="col-sm-9">{clientes.cpf}</dd>

              <dt class="col-sm-3"><strong>Data de nascimento:</strong></dt>
              <dd class="col-sm-9">{new Date(clientes.data_nasc).toLocaleDateString('pt-BR')}</dd>

              <dt class="col-sm-3"><strong>Gênero:</strong></dt>
              <dd class="col-sm-9">
                {clientes.genero === 'F' ? 'Feminino' :
                  clientes.genero === 'M' ? 'Masculino' :
                    clientes.genero === 'O' ? 'Outros' : 'Não especificado'}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}