import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Produto {
@PrimaryGeneratedColumn()
id_produto: number;

@Column()
estoque: number;

@Column()
precounitario: number;

@Column()
estoque_minimo: number;

@Column()
id_venda: number;

@Column()
deleted: boolean;
}