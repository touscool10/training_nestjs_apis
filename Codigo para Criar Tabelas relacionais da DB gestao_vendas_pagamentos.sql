CREATE TABLE IF NOT EXISTS `gestao_vendas_pagamentos`.`clientes` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `nome_cliente` VARCHAR(100) NOT NULL,
  `endereco_cliente` VARCHAR(100) NULL,
  `cidade_cliente` VARCHAR(100) NULL,
  `estado_cliente` VARCHAR(45) NOT NULL,
  `cep_cliente` VARCHAR(45) NOT NULL,
  `telefone_cliente` VARCHAR(45) NOT NULL,
  `email_cliente` VARCHAR(45) NOT NULL,
  `cpf` VARCHAR(14) NOT NULL UNIQUE,
  PRIMARY KEY (`id_cliente`)
  /*UNIQUE INDEX `cpf_UNIQUE` (`cpf` ASC) VISIBLE)*/
  )
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `gestao_vendas_pagamentos`.`produtos` (
  `id_produto` INT NOT NULL AUTO_INCREMENT,
  `estoque` INT NOT NULL,
  `precounitario` FLOAT NOT NULL,
  `estoque_minimo` INT NOT NULL,
  `nome` VARCHAR(100) NOT NULL UNIQUE,
  `deleted` TINYINT NOT NULL,
  PRIMARY KEY (`id_produto`)
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `gestao_vendas_pagamentos`.`vendas` (
  `id_venda` INT NOT NULL AUTO_INCREMENT,
  `data_venda` DATE NOT NULL,
  `nota_fiscal_venda` VARCHAR(45) NOT NULL,
  `preco_total_venda` FLOAT NOT NULL,
  `deleted` TINYINT NOT NULL DEFAULT 0,
  `id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_venda`),
  CONSTRAINT `fk_vendas_clientes`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `gestao_vendas_pagamentos`.`clientes` (`id_cliente`)
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `gestao_vendas_pagamentos`.`itens_venda` (
  `id_venda` INT NOT NULL,
  `id_produto` INT NOT NULL,
  `quantidade` INT NOT NULL,
  `preco_total_produtos` FLOAT NOT NULL,
  CONSTRAINT `fk_itens_venda_vendas`
    FOREIGN KEY (`id_venda`)
    REFERENCES `gestao_vendas_pagamentos`.`vendas` (`id_venda`),
  CONSTRAINT `fk_itens_venda_produtos`
    FOREIGN KEY (`id_produto`)
    REFERENCES `gestao_vendas_pagamentos`.`produtos` (`id_produto`)
)
ENGINE = InnoDB;


