import React, { useEffect, useState } from 'react';
import LocalStoregeHelper from '../../../helpers/localStorage.helper';
import ClienteService from '../../../services/clienteService';
import styles from './MinhaConta.module.css'; // Importa o CSS Module

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
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h1 className={styles.cardTitle}>Minha Conta</h1>
        </div>
        <div className={styles.cardBody}>
          <dl className={styles.row}>
            <dt className={styles.colSm3}><strong>Nome:</strong></dt>
            <dd className={styles.colSm9}>{clientes.nome}</dd>

            <dt className={styles.colSm3}><strong>Email:</strong></dt>
            <dd className={styles.colSm9}>{clientes.email}</dd>

            <dt className={styles.colSm3}><strong>CPF:</strong></dt>
            <dd className={styles.colSm9}>{clientes.cpf}</dd>

            <dt className={styles.colSm3}><strong>Data de nascimento:</strong></dt>
            <dd className={styles.colSm9}>{new Date(clientes.data_nasc).toLocaleDateString('pt-BR')}</dd>

            <dt className={styles.colSm3}><strong>Gênero:</strong></dt>
            <dd className={styles.colSm9}>
              {clientes.genero === 'F' ? 'Feminino' :
                clientes.genero === 'M' ? 'Masculino' :
                  clientes.genero === 'O' ? 'Outros' : 'Não especificado'}
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
