export interface VendaCadastrarDto {
id_cliente: number;
id_produto: number;
quantidade: number;
data_venda: Date;
nota_fiscal_venda: string;
preco_total_produtos: number;
deleted?: boolean;
}