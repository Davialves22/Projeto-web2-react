const db = require("../config");

let operations = {
    list: () => {
        return db.promise().execute('SELECT * FROM pedido');
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