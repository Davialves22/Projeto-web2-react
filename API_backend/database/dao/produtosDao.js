const db = require("../config");

let operations = {
    // TODO - filtrar por nome, ou por categoria
    list: () => {
        return db.promise().execute('SELECT * FROM produtos');
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

    remove: (produto_id) => {
        return db.promise().execute('DELETE FROM produtos WHERE produto_id = ?', [produto_id]
        );
    },
};

module.exports = operations;