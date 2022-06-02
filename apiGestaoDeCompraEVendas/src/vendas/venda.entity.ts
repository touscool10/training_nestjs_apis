import { Cliente } from 'src/clientes/cliente.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Venda {
@PrimaryGeneratedColumn()
id_venda: number;

@Column()
id_cliente: number;

@Column()
id_produto: number;

@Column()
quantidade: number;

@Column()
data_venda: Date;

@Column()
nota_fiscal_venda: string;

@Column()
preco_total_produtos: number;

@Column()
deleted: boolean;

@ManyToOne(() => Cliente, cliente => cliente.vendas)
cliente: Cliente;
}