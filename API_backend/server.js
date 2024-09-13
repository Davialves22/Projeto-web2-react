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

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});