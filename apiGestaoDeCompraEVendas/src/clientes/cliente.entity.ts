import { 
    Entity,
    Column,
    PrimaryGeneratedColumn, 
    OneToMany
} from 'typeorm';
import { Venda } from 'src/vendas/venda.entity';

@Entity()
export class Cliente {
@PrimaryGeneratedColumn()
id_cliente: number;

@Column()
nome_cliente: string;

@Column()
endereco_cliente: string;

@Column()
cidade_cliente: string;

@Column()
estado_cliente: string;

@Column()
cep_cliente: string;

@Column()
telefone_cliente: string;

@Column()
email_cliente: string;

@Column()
cpf: string;

@Column()
deleted: boolean;

@OneToMany(() => Venda, venda => venda.cliente )
vendas: Venda[];
}