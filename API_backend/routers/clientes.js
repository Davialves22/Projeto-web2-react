const express = require('express');
const router = express.Router();
const operations = require("../database/dao/clienteDao");


//funcionou
router.get("/", (req, res) => {
    const { email } = req.headers;
    operations.list(email)
        .then(([rows]) => {
            res.json(rows);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao listar "clientes"');
        });
});

router.post("/login", (req, res) => {
    const { email, pass } = req.body;
    operations.valid(email, pass)
        .then(([rows]) => {
            res.json(rows[0]);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao tentar realizar o login');
        });
});

//funcionou
router.get("/email", (req, res) => {
    operations.listEmails()
        .then(([rows]) => {
            res.json(rows);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao listar "email"');
        });
});

//funcionou
router.get("/senha", (req, res) => {
    operations.listSenhas()
        .then(([rows]) => {
            res.json(rows);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao listar "senha"');
        });
});

//funcionou
router.get("/:cliente_id", (req, res) => {
    const cliente_id = req.params.cliente_id;
        operations.findById(cliente_id)
        .then(([rows]) => {
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.status(404).send('Cliente não encontrado');
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao buscar cliente");
        });
});

//funcionou
router.post("/", (req, res) => {
    const { email, senha, cpf, nome, genero, data_nasc } = req.body;
    operations.save(email, senha, cpf, nome, genero, data_nasc)
        .then((results) => {
            res.status(201).json({ cliente_id: results[0].insertId });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao salvar cliente");
        });
});

//funcionou
router.put("/:cliente_id", (req, res) => {
    const cliente_id = req.params.cliente_id;
    const { email, senha, cpf, nome, genero, data_nasc } = req.body;
    operations.update(cliente_id, email, senha, cpf, nome, genero, data_nasc)
        .then(() => {
            res.send('Cliente atualizado com sucesso.');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao atualizar cliente');
        });
});

//funcionou
router.delete("/:cliente_id", (req, res) => {
    const cliente_id = req.params.cliente_id;
    operations.remove(cliente_id)
        .then(([result]) => {
            if (result.affectedRows > 0) {
                res.status(200).send("Cliente removido com sucesso");
            } else {
                res.status(404).send('Cliente não encontrado');
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao remover cliente");
        });
});

module.exports = router;