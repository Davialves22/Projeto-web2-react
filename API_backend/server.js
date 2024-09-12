const express = require('express');
const cors = require('cors'); 
const app = express();
const bodyParser = require('body-parser');
const clienteRouter = require('./routers/clientes');
const produtosRouter = require("./routers/produtos");
const pedidoRouter = require("./routers/pedido");
const db = require('./database/config');
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use("/clientes", clienteRouter);
app.use("/produtos", produtosRouter);
app.use("/pedido", pedidoRouter);

db.execute(
  `CREATE TABLE IF NOT EXISTS clientes (
    cliente_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    nome VARCHAR(100) NOT NULL,
    genero ENUM('M','F','O') NOT NULL,
    data_nasc DATE NOT NULL
  );
`,
  err => {
    if (err) {
      console.error('Erro na criação da tabela clientes', err.message);
      return;
    }
    console.log('Tabela clientes criada ou já existe');
  }
);

db.execute(
  `CREATE TABLE IF NOT EXISTS produtos (
    produto_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    preco DOUBLE NOT NULL,
    imagem_produto VARCHAR (255) NOT NULL,
    categoria ENUM('Pneu', 'Motor', 'Bateria', 'Freio', 'Suspensão') NOT NULL,
	  quantidade INT NOT NULL
  );
`,
  err => {
    if (err) {
      console.error('Erro na criação da tabela produtos', err.message);
      return;
    }
    console.log('Tabela produtos criada ou já existe');
  }
);

db.execute(
    `CREATE TABLE IF NOT EXISTS pedido (
    pedido_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    produto_id INT NOT NULL,
    cliente_id INT NOT NULL,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    valor_total DOUBLE NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id),
    FOREIGN KEY (produto_id) REFERENCES produtos(produto_id)
  );
`,
  err => {
    if (err){
      console.error("Erro na criação da tabela pedido", err.message);
      return;
    }
    console.log("Tabela pedido criada ou já existe");
  }
);

db.execute(
  `INSERT INTO produtos (produto_id, nome, descricao, preco, imagem_produto, categoria, quantidade) VALUES
(1011, 'Produto 1', 'Texto personalizado para o Card 1.', 29.99, 'https://picsum.photos/id/1011/185/132', 'Categoria1', 10),
(1012, 'Produto 2', 'Texto personalizado para o Card 2.', 49.99, 'https://picsum.photos/id/1012/185/132', 'Categoria2', 10),
(1013, 'Produto 3', 'Texto personalizado para o Card 3.', 19.99, 'https://picsum.photos/id/1013/185/132', 'Categoria3', 10),
(1014, 'Produto 4', 'Texto personalizado para o Card 4.', 39.99, 'https://picsum.photos/id/1014/185/132', 'Categoria4', 10),
(1015, 'Produto 5', 'Texto personalizado para o Card 5.', 29.99, 'https://picsum.photos/id/1015/185/132', 'Categoria5', 10),
(1016, 'Produto 6', 'Texto personalizado para o Card 6.', 59.99, 'https://picsum.photos/id/1016/185/132', 'Categoria6', 10),
(1017, 'Produto 7', 'Texto personalizado para o Card 7.', 15.99, 'https://picsum.photos/id/107/185/132', 'Categoria7', 10),
(1018, 'Produto 8', 'Texto personalizado para o Card 8.', 25.99, 'https://picsum.photos/id/1018/185/132', 'Categoria8', 10),
(1019, 'Produto 9', 'Texto personalizado para o Card 9.', 45.99, 'https://picsum.photos/id/1019/185/132', 'Categoria9', 10),
(1020, 'Produto 10', 'Texto personalizado para o Card 10.', 35.99, 'https://picsum.photos/id/1020/185/132', 'Categoria10', 10);
`,
err => {
  console.log("seeds criadas para tabela produtos")
});





app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});