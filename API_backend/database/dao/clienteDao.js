const db = require("../config");

let operations = {
    list: (email) => {
        let query = 'SELECT cliente_id, nome, email, cpf, data_nasc, genero FROM clientes';
        let params = [];
        if(email) { 
            query += " WHERE email = ?";
            params = [email]
        }
        return db.promise().execute(query, params);
    },

    listEmails: () => {
        return db.promise().execute('SELECT email FROM clientes');
    },

    listSenhas: () => {
        return db.promise().execute('SELECT senha FROM clientes');
    },

    findById: (cliente_id) => {
        return db.promise().execute('SELECT * FROM clientes WHERE cliente_id = ?', [cliente_id]
        );
    },

    valid: (email, senha) => {
        return db.promise().execute(
            'SELECT email, nome FROM clientes WHERE email = ? AND senha = ?', 
            [email, senha]
        );
    },

    save: (email, senha, cpf, nome, genero, data_nasc) => {
        return db.promise().execute(
            'INSERT INTO clientes (email, senha, cpf, nome, genero, data_nasc) VALUES (?, ?, ?, ?, ?, ?)',
            [email, senha, cpf, nome, genero, data_nasc]
        );
    },

    update: (cliente_id, email, senha, cpf, nome, genero, data_nasc) => {
        return db.promise().execute(
            'UPDATE clientes SET email = ?, senha = ?, cpf = ?, nome = ?, genero = ?, data_nasc = ?  WHERE cliente_id = ?',
            [email, senha, cpf, nome, genero, data_nasc, cliente_id]
        );
    },

    remove: (cliente_id) => {
        return db.promise().execute('DELETE FROM clientes WHERE cliente_id = ?', [cliente_id]);
    },
};

module.exports = operations;