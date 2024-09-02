const db = require("../config");

let operations = {
    list: () => {
        return db.promise().execute('SELECT * FROM clientes');
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