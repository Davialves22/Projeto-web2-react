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
   );`,
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
   );`,
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
   );`,
   err => {
     if (err) {
       console.error("Erro na criação da tabela pedido", err.message);
       return;
     }
     console.log("Tabela pedido criada ou já existe");
   }
 );

 db.execute(
    `INSERT INTO produtos (produto_id, nome, descricao, preco, imagem_produto, categoria, quantidade) VALUES
     (1011, 'Pneu Pirelli', 'Pneu Pirelli aro 16', 100.99, 'https://imagensemoldes.com.br/wp-content/uploads/2020/06/Carro-Pneu-PNG.png', 'Pneu', 10),
     (1012, 'Pneu Continental', 'Pneu Continental aro 16', 200.99, 'https://img.freepik.com/psd-gratuitas/pneumatico-de-carro-em-renderizacao-3d-com-fundo-transparente_363450-6530.jpg', 'Pneu', 20),
     (1013, 'Pneu remold', 'Pneu Remold aro 16', 300.99, 'https://www.gpservicosautomotivos.com.br/wp-content/uploads/2022/06/pneus.png', 'Pneu', 30),
     (1014, 'Pneu michelin', 'Pneu michelin aro 16', 400.99, 'https://i.pinimg.com/736x/69/92/07/6992079350c4ae4adbde732ae9f59998.jpg', 'Pneu', 40),
     (1015, 'Motor Elétrico', 'Blindado 2P', 2299.00, 'https://images.tcdn.com.br/img/img_prod/695202/motor_eletrico_trifasico_10cv_2polos_3480_rpm_alta_rotacao_35_1_d4bb99497627f89d1278653b402f25b0_20220406164106.jpg', 'Motor', 10),
     (1016, 'Virabrequim', 'Virabraquim motor', 1000.00, 'https://itacuapecas.com.br/192651/0261051013-virabrequim-motor-ap-16-gol-saveiro.jpg', 'Motor', 20),
     (1017, 'Pistão', 'Pistão Motor', 1200.00, 'https://images.cws.digital/produtos/gg/49/80/jogo-de-pistoes-e-aneis-biela-longa-1068049-1519238296926.jpg', 'Motor', 30),
     (1018, 'Vela', 'Vela motor', 55.00, 'https://blog.jocar.com.br/wp-content/uploads/2019/05/Velas-do-motor-e1524233094551-1400x788-990x660.jpg', 'Motor', 40),
     (1019, 'Bateria ACDelco', 'Bateria ACDelco 60', 300.99, 'https://probaterbaterias.com.br/wp-content/uploads/2022/07/Bateria-AC-Delco-800x800.png', 'Bateria', 10),
     (1020, 'Bateria Tudor', 'Bateria Tudor 60', 350.00, 'https://itajaibaterias.com.br/wp-content/uploads/2021/02/saiba-mais-sobre-a-bateria-automotiva-tudor.jpg', 'Bateria', 20),
     (1021, 'Bateria Heliar', 'Bateria Heliar 60', 370.99, 'https://cdn.awsli.com.br/800x800/2523/2523686/produto/186103465/191aaf484a.jpg', 'Bateria', 30),
     (1022, 'Bateria Moura', 'Bateria Moura 60', 400.99, 'https://a-static.mlcdn.com.br/450x450/bateria-de-carro-moura-flooded-advanced-60ah-12v-polo-positivo-m60gd-mge/bateriaspatrocinio/482463bc1fb611ec9edb4201ac185013/fd187bbd6c923201400d1d8b4e3f58c6.jpeg', 'Bateria', 40),
     (1023, 'Óleo de freio', 'Óleo de freio bosch', 45.99, 'https://cdn.iset.io/assets/58238/produtos/5242/a7000eb2a678c9a00dfdde3fe2ce724c660318d952fd0.png', 'Freio', 10),
     (1024, 'Óleo Lubrax', 'Lubrax Fluido para Freios', 50.99, 'https://acdn.mitiendanube.com/stores/001/672/822/products/lubrax-fluido-para-freios-especial-dot-4-500ml-11-9feb85bd8ae00b7db516688001662983-640-0.jpg', 'Freio', 20),
     (1025, 'Óleo Radnaq', 'Radnaq fluido para freios', 35.99, 'https://images.tcdn.com.br/img/img_prod/945233/oleo_freio_dot3_radnaq_12x500ml_263195_1_d29beebc1d510296e25352fefc15c7a3.png', 'Freio', 30),
     (1026, 'Óleo Motul brake', 'Fluido de Freio Dot 3 & 4 Motul Brake', 40.99, 'https://8694.cdn.simplo7.net/static/8694/sku/oleo-lubrificante-oleo-lubrificante-automotivo-fluido-de-freio-motul-dot-3-e-4-brake-fluid-500ml--p-1568638221421.jpg', 'Freio', 40),
     (1027, 'Suspensão McPherson', 'Suspensão McPherson', 150.99, 'https://blog.jocar.com.br/wp-content/uploads/2020/01/Sistema-McPherson-990x660.jpg', 'Suspensão', 10),
     (1028, 'Suspensão Ford', 'Suspensão ford rosca', 350.99, 'https://cdn.awsli.com.br/600x450/2204/2204890/produto/150809292/kit-rosca-padr-o-ford-9smxx5sv6c.jpg', 'Suspensão', 20),
     (1029, 'Suspensão Cofop', 'Suspensão cofop', 35.99, 'https://images.tcdn.com.br/img/img_prod/796938/kit_suspensao_dianteira_ford_ka_1_0_1_3_1_6_1997_1998_a_2007_31847_1_eba9b9997f12b842f9f7cd36250822f3.jpg', 'Suspensão', 30),
     (1030, 'Suspensão Alen', 'Suspensão alen', 35.99, 'https://images.tcdn.com.br/img/img_prod/297905/jogo_04_amortecedores_ford_focus_hatch_e_sedan_2000_ate_2008_kit_da_suspensao_19933_1_58cc93a365a0c4bc58dcf98f1b01b732.jpg', 'Suspensão', 40)`
  );
  
   err => {
     if (err) {
       console.error("Erro ao inserir produtos", err.message);
       return;
     }
     console.log("Seeds criadas para tabela produtos");
   }

 app.listen(PORT, () => {
   console.log(`Servidor rodando em: http://localhost:${PORT}`);
 });
