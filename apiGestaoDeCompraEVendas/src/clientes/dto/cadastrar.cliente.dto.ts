export interface CadastrarClienteDto {
    nome_cliente: string;
    endereco_cliente: string;
    cidade_cliente: string;
    estado_cliente: string;
    cep_cliente: string;
    telefone_cliente: string;
    email_cliente: string;
    cpf?: string;
    deleted?: boolean;
}