const db = require("../config");

let operations = {
    // TODO - filtrar por nome, ou por categoria
    list: (nome, categoria) => {
        let query = 'SELECT * FROM produtos';
        let params = [];
        if(nome && categoria) { 
            query += " WHERE nome LIKE ? AND categoria = ?";
            params = [`%${nome}%`, categoria];
        } else if(nome) {
            query += " WHERE nome LIKE ?";
            params = [`%${nome}%`];
        } else if(categoria) {
            query += " WHERE categoria = ?";
            params = [categoria];
        }

        return db.promise().execute(query, params);
    },
    
    findById: (produto_id) => {
        return db.promise().execute('SELECT * FROM produtos WHERE produto_id = ?', [produto_id]
        );
    },

    findByName: (nome) => {
        return db.promise().execute('SELECT * FROM products WHERE nome LIKE ?', [`%${nome}%`]);
    },

    findByCategoria: (categoria) => {
        return db.promise().execute('SELECT * FROM produtos WHERE categoria = ?', [categoria]
        );
    },

    save: (nome, descricao, preco, imagem_produto, categoria, quantidade) => {
        return db.promise().execute(
            'INSERT INTO produtos (nome, descricao, preco, imagem_produto, categoria, quantidade) VALUES (?, ?, ?, ?, ?, ?)',
            [nome, descricao, preco, imagem_produto, categoria, quantidade]
        );
    },

    update: (produto_id, nome, descricao, preco, imagem_produto, categoria, quantidade) => {
        return db.promise().execute(
            'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, imagem_produto = ?, categoria = ?, quantidade = ?  WHERE produto_id = ?',
            [nome, descricao, preco, imagem_produto, categoria, quantidade, produto_id]
        );
    },

    sell: (produto_id) => {
        return db.promise().execute('UPDATE produtos SET quantidade=quantidade-1 WHERE produto_id = ?', [produto_id]
        );
    },

    remove: (produto_id) => {
        return db.promise().execute('DELETE FROM produtos WHERE produto_id = ?', [produto_id]
        );
    },
};

module.exports = operations;