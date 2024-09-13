const db = require("../config");

let operations = {
    list: () => {
        return db.promise().execute('SELECT * FROM pedido');
    },

    findByUser: (pedido_id) => {
        return db.promise().execute('SELECT prod.nome as produto, prod.descricao as descricao, prod.categoria as categoria, ped.data_pedido as data_pedido, ped.valor_total as valor_total FROM pedido as ped inner join produtos as prod on ped.produto_id = prod.produto_id inner join clientes as c on ped.cliente_id = c.cliente_id where c.email = ?', [pedido_id]);
    },

    findById: (pedido_id) => {
        return db.promise().execute('SELECT * FROM pedido WHERE pedido_id = ?', [pedido_id]);
    },

    save: (produto_id, cliente_id, valor_total) => {
        return db.promise().execute(
            'INSERT INTO pedido (produto_id, cliente_id, valor_total) VALUES (?, ?, ?)',
            [produto_id, cliente_id, valor_total]
        );
    },

    update: (pedido_id, produto_id, cliente_id, valor_total) => {
        return db.promise().execute(
            'UPDATE pedido SET produto_id = ?, cliente_id = ?, valor_total = ?  WHERE pedido_id = ?',
            [produto_id, cliente_id, valor_total, pedido_id])
    },

    remove: (pedido_id) => {
        return db.promise().execute('DELETE FROM pedido WHERE pedido_id = ?', [pedido_id]);
    },
};

module.exports = operations;