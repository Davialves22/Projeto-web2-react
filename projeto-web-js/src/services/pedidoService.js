import RequisicaoService from "./RequisicaoService";

const PedidoService = {

    async postProduto(pedido) {
        return await RequisicaoService.post(`pedido`, pedido);
    },

}

export default PedidoService;