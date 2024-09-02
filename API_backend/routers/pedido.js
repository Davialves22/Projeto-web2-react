const express = require('express');
const router = express.Router();
const operations = require("../database/dao/pedidoDao");

//funcionou
router.get("/", (req, res) => {
    operations.list()
        .then(([rows]) => {
            res.json(rows);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao listar "pedidos"');
        });
});

//funcionou
router.get("/:pedido_id", (req, res) => {
    const pedido_id = req.params.pedido_id;
        operations.findById(pedido_id)
        .then(([rows]) => {
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.status(404).send('Pedido não encontrado');
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao buscar pedudo");
        });
});

//funcionou
router.post("/", (req, res) => {
    const { produto_id, cliente_id, valor_total } = req.body;
    operations.save(produto_id, cliente_id, valor_total)
        .then((results) => {
            res.status(201).json({ pedido_id: results[0].insertId });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao salvar pedido");
        });
});

//funcionou
router.put("/:pedido_id", (req, res) => {
    const pedido_id = req.params.pedido_id;
    const { produto_id, cliente_id, valor_total } = req.body;
    operations.update(pedido_id, produto_id, cliente_id, valor_total)
        .then(() => {
            res.send('Pedido atualizado com sucesso.');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao atualizar pedido');
        });
});

//funcionou
router.delete("/:pedido_id", (req, res) => {
    const pedido_id = req.params.pedido_id;
    operations.remove(pedido_id)
        .then(([result]) => {
            if (result.affectedRows > 0) {
                res.status(200).send("Pedido removido com sucesso");
            } else {
                res.status(404).send('Pedido não encontrado');
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao remover pedido");
        });
});

module.exports = router;