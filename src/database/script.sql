create database teste_dock;
use teste_dock;

CREATE TABLE `pessoas` (
  idPessoa int auto_increment,
  nome varchar(200) not null,
  cpf varchar(14) not null,
  dataNascimento date not null,
  PRIMARY KEY (idPessoa)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `contas` (
  idConta int auto_increment,
  idPessoa int not null,
  saldo decimal(12,2) default 0.00,
  limiteSaqueDiario decimal(12,2) default 1000.00,
  flagAtivo boolean default true,
  tipoConta int default 1, -- 1 - conta corrente; 2 - poupanca
  dataCriacao TIMESTAMP default CURRENT_TIMESTAMP,
  PRIMARY KEY (idConta),
  FOREIGN KEY (idPessoa) REFERENCES pessoas(idPessoa)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `transacoes` (
  idTransacao int auto_increment,
  idConta int not null,
  valor decimal(12,2) default 0.00,
  dataTransacao TIMESTAMP default CURRENT_TIMESTAMP,
  PRIMARY KEY (idTransacao),
  FOREIGN KEY (idConta) REFERENCES contas(idConta)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;