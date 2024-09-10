import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/'
});

const RequisicaoService = {
    get(rota, header = {}) {
        return new Promise(async (resolve, reject) => {
            try {
                instance.get(rota, { headers: header }).then((data) => {
                    resolve(data);
                }).catch((error) => reject(error));
            } catch (err) {
                reject(err);
            }
        })
    },

    post(rota, body, header = {}) {
        return new Promise(async (resolve, reject) => {
            try {
                instance.post(rota, body, { headers: header, "Content-Type": "multipart/form-data" }).then((data) => {
                    resolve(data);
                }).catch((error) => reject(error));
            } catch (err) {
                reject(err);
                console.log(err)
            }
        });
    },

    update(rota, body, header = {}) {
        return new Promise(async (resolve, reject) => {
            try {
                instance.put(rota, body, { headers: header }).then((data) => {
                    resolve(data);
                }).catch((error) => reject(error));
            } catch (err) {
                reject(err);
            }
        });
    },

    delete(rota, header = {}) {
        return new Promise(async (resolve, reject) => {
            try {
                instance.delete(rota, { headers: header }).then((data) => {
                    resolve(data);
                }).catch((error) => reject(error));
            } catch (err) {
                reject(err);
            }
        });
    }
}

export default RequisicaoService;