import RequisicaoService from "./RequisicaoService";

const ClienteService = {

    async register(cliente) {
        return await RequisicaoService.post(`clientes`, cliente);
    },

    async login(email, pass) {
        const body = { email, pass }
        return await RequisicaoService.post(`clientes/login`, body);
    },

    async getClient(email = "") {
        const header = { email }
        return await RequisicaoService.get(`clientes`, header);
    }

}

export default ClienteService;