import RequisicaoService from "./RequisicaoService";

const ClienteService = {

    async register(cliente) {
        return await RequisicaoService.post(`clientes`, cliente);
    },

    async login(email, pass) {
        const body = { email, pass }
        return await RequisicaoService.post(`clientes/login`, body);
    },

}

export default ClienteService;