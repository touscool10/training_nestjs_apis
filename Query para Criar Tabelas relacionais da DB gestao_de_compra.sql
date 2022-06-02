CREATE TABLE clientes(
	id_cliente INT NOT NULL AUTO_INCREMENT,
	nome_cliente VARCHAR(100) NOT NULL,
	endereco_cliente VARCHAR(100) NOT NULL,
	cidade_cliente VARCHAR(100) NOT NULL,
	estado_cliente VARCHAR(45) NOT NULL,
	cep_cliente VARCHAR(45) NOT NULL,
	telefone_cliente VARCHAR(45) NOT NULL,
	email_cliente VARCHAR(45) NOT NULL,
	cpf VARCHAR(14) NOT NULL UNIQUE,
	PRIMARY KEY(id_cliente)

)
ENGINE = InnoDB;

CREATE TABLE vendas(
	id_venda INT NOT NULL AUTO_INCREMENT,
	quantidade INT NOT NULL,
	data_venda DATE NOT NULL,
	nota_fiscal_venda VARCHAR(45) NOT NULL,
    /*Esqueci de colocar id_produto aqui, mas adicionei manualmente depois*/
	id_cliente INT NOT NULL,
	PRIMARY KEY(id_venda),
	CONSTRAINT fk_vendas_clientes
		FOREIGN KEY (id_cliente)
		REFERENCES clientes (id_cliente)
)
ENGINE = InnoDB;

CREATE TABLE produtos(
	id_produto INT NOT NULL AUTO_INCREMENT,
	estoque INT NOT NULL,
	precounitario FLOAT NOT NULL,
	estoque_minimo INT NOT NULL,
	id_venda INT NOT NULL,
	PRIMARY KEY(id_produto),
	CONSTRAINT fk_produtos_vendas
		FOREIGN KEY (id_venda)
		REFERENCES vendas (id_venda)

)
ENGINE = InnoDB;
gestao_de_compra