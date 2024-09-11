const express = require('express');
const router = express.Router();
const operations = require("../database/dao/produtosDao");

//funcionou
router.get("/", (req, res) => {
    operations.list()
        .then(([rows]) => {
            res.json(rows);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao listar "produtos"');
        });
});

// testar
router.get("/", (req, res) => {
    const nome = req.query.nome;
    operations.findByName(nome)
        .then(([rows]) => {
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.status(404).send('Nome não encontrado');
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao buscar nome");
        });
});

//testar
router.get("/", (req, res) => {
    const categoria = req.query.categoria;
    operations.findByCategoria(categoria)
        .then(([rows]) => {
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.status(404).send('Categoria não encontrada');
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao buscar categoria");
        });
});

//funcionou
router.get("/:produto_id", (req, res) => {
    const produto_id = req.params.produto_id;
        operations.findById(produto_id)
        .then(([rows]) => {
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.status(404).send('Produto não encontrado');
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao buscar produto");
        });
});

//funcionou
router.post("/", (req, res) => {
    const { nome, descricao, preco, imagem_produto, categoria, quantidade } = req.body;
    operations.save(nome, descricao, preco, imagem_produto, categoria, quantidade)
        .then((results) => {
            res.status(201).json({ produto_id: results[0].insertId });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao salvar produto");
        });
});

//funcionou
router.put("/:produto_id", (req, res) => {
    const produto_id = req.params.produto_id;
    const { nome, descricao, preco, imagem_produto, categoria, quantidade } = req.body;
    operations.update(produto_id, nome, descricao, preco, imagem_produto, categoria, quantidade)
        .then(() => {
            res.send('Produto atualizado com sucesso.');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao atualizar produto');
        });
});

//funcionou
router.delete("/:produto_id", (req, res) => {
    const produto_id = req.params.produto_id;
    operations.remove(produto_id)
        .then(([result]) => {
            if (result.affectedRows > 0) {
                res.status(200).send("Produto removido com sucesso");
            } else {
                res.status(404).send('Produto não encontrado');
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao remover produto");
        });
});

module.exports = router;