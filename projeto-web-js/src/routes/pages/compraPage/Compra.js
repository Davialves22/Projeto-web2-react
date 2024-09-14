import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './Compra.module.css';
import ProdutoService from '../../../services/produtoService';
import ClienteService from '../../../services/clienteService';
import LocalStoregeHelper from '../../../helpers/localStorage.helper';
import PedidoService from '../../../services/pedidoService';

export const Compra = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [produto, setProduto] = useState({ nome:"", descricao:"", imagem_produto:"", preco:0, categoria:"" });
    const [cliente, setCliente] = useState({ nome: "", email: "", cpf:"", data_nasc:"", genero:"" });

    useEffect(() => {
        const fetchData = async () => {
            const response = await ProdutoService.getProdutoById(id);
            setProduto(response.data);

            const user = LocalStoregeHelper.getUserLogged();
            const responseClient = await ClienteService.getClient(user.email);
            setCliente(responseClient.data[0]);
        }

        fetchData();
    }, [id]);

    const confirCompra = () => {
        const pedido = {
            produto_id: produto.produto_id,
            cliente_id: cliente.cliente_id,
            valor_total: produto.preco
        }

        PedidoService.postProduto(pedido).then((data) => {
            if (data.status === 201) {
                alert("Compra realizada com sucesso");
                navigate("/");
            }
        });
    };

    return (
        <div className={`container my-5 ${classes.container}`}>
            <div className="row">
                {/* Informações do Comprador */}
                <div className="col-md-6">
                    <div className={`card mb-3 ${classes.card}`}>
                        <div className={classes.cardHeader}>
                            <h4>Informações do Comprador</h4>
                        </div>
                        <div className={classes.cardBody}>
                            <dl className="row">
                                <dt className="col-sm-4"><strong>Nome:</strong></dt>
                                <dd className="col-sm-8">{cliente.nome}</dd>

                                <dt className="col-sm-4"><strong>Email:</strong></dt>
                                <dd className="col-sm-8">{cliente.email}</dd>

                                <dt className="col-sm-4"><strong>CPF:</strong></dt>
                                <dd className="col-sm-8">{cliente.cpf}</dd>

                                <dt className="col-sm-4"><strong>Data de Nascimento:</strong></dt>
                                <dd className="col-sm-8">{new Date(cliente.data_nasc).toLocaleDateString('pt-BR')}</dd>

                                <dt className="col-sm-4"><strong>Gênero:</strong></dt>
                                <dd className="col-sm-8">
                                    {cliente.genero === 'F' ? 'Feminino' :
                                        cliente.genero === 'M' ? 'Masculino' :
                                            cliente.genero === 'O' ? 'Outros' : 'Não especificado'}
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>

                {/* Informações do Produto */}
                <div className="col-md-6">
                    <div className={`card mb-3 ${classes.card}`}>
                        <div className={classes.cardHeader}>
                            <h4>Detalhes do Produto</h4>
                        </div>
                        <div className={classes.cardBody}>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={produto.imagem_produto} alt={produto.nome} className={classes.cardImg} width={140}/>
                                </div>
                                <div className="col-md-8">
                                    <dl className="row">
                                        <dt className="col-sm-4"><strong>Nome:</strong></dt>
                                        <dd className="col-sm-8">{produto.nome}</dd>

                                        <dt className="col-sm-4"><strong>Descrição:</strong></dt>
                                        <dd className="col-sm-8">{produto.descricao}</dd>

                                        <dt className="col-sm-4"><strong>Valor Total:</strong></dt>
                                        <dd className="col-sm-8">R$ {produto.preco.toFixed(2)}</dd>

                                        <dt className="col-sm-4"><strong>Categoria:</strong></dt>
                                        <dd className="col-sm-8">{produto.categoria}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={classes.btn} onClick={confirCompra}>Finalizar Compra</button>
            </div>
        </div>
    );
};
