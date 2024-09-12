import RequisicaoService from "./RequisicaoService";

const ProdutoService = {

    async getProdutos(nome = "", categoria = "") {
        const header = { nome, categoria }
        return await RequisicaoService.get(`produtos`, header);
    },
    async getProdutoById(produtoId) {
        const ret = await RequisicaoService.get(`produtos/${produtoId}`);
        return ret;
    },
}

export default ProdutoService;