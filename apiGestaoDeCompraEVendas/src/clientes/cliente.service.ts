import { Injectable, Inject } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { CadastrarClienteDto } from './dto/cadastrar.cliente.dto';
import { Repository } from 'typeorm';
import { ResultadoDto } from 'src/dto/resultado.dto';

@Injectable()
export class ClienteService {
    constructor(
        @Inject('CLIENTE_REPOSITORY')
        private clienteRepository: Repository<Cliente>,
      ) {}
    
      async getAll(): Promise<Cliente[]> {
        return await this.clienteRepository.find();
      }
    
      async getById(id: number): Promise<Cliente> {
        return await this.clienteRepository.findOne(id);
      }
    
      async create(cliente: CadastrarClienteDto): Promise<Cliente> {
        const createdCliente = new Cliente(); 
        createdCliente.nome_cliente     = cliente.nome_cliente;
        createdCliente.endereco_cliente = cliente.endereco_cliente;
        createdCliente.cidade_cliente   = cliente.cidade_cliente;
        createdCliente.estado_cliente   = cliente.estado_cliente;
        createdCliente.cep_cliente      = cliente.cep_cliente;
        createdCliente.telefone_cliente = cliente.telefone_cliente;
        createdCliente.email_cliente    = cliente.email_cliente;
        createdCliente.cpf              = cliente.cpf; 
        createdCliente.deleted          = false;
        return await this.clienteRepository.save(createdCliente);      
      }
    
      async update(id: number, cliente: CadastrarClienteDto): Promise<ResultadoDto> {
        const updatedCliente = new Cliente(); 
        updatedCliente.nome_cliente     = cliente.nome_cliente;
        updatedCliente.endereco_cliente = cliente.endereco_cliente;
        updatedCliente.cidade_cliente   = cliente.cidade_cliente;
        updatedCliente.estado_cliente   = cliente.estado_cliente;
        updatedCliente.cep_cliente      = cliente.cep_cliente;
        updatedCliente.telefone_cliente = cliente.telefone_cliente;
        updatedCliente.email_cliente    = cliente.email_cliente;         
        return await this.clienteRepository.update(id, updatedCliente)
        .then((result) => {
          return <ResultadoDto> {
            mensagem: 'Cliente alterado com sucesso',
            status: true
          }
        })
        .catch((error) => {
          return <ResultadoDto> {
            mensagem: 'Houve um erro ao alterar o Cliente.',
            status: false
          }
        })

      }
      async delete(id: number): Promise<ResultadoDto> {
          const deleted_cliente = this.getById(id);
          (await deleted_cliente).deleted = true;
          return deleted_cliente
        .then((result) => {
          return <ResultadoDto> {
            mensagem: 'Cliente removido com sucesso',
            status: true
          }
        })
        .catch((error) => {
          return <ResultadoDto> {
            mensagem: 'Houve um erro ao remover o Cliente.',
            status: false
          }
        })
    }
       
}
