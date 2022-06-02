import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { VendaCadastrarDto } from './dto/venda.cadastrar.dto';
import { Venda } from './venda.entity';

@Injectable()
export class VendaService {
    constructor(
        @Inject('VENDA_REPOSITORY')
        private vendaRepository: Repository<Venda>,
      ) {}
    
      async getAll(): Promise<Venda[]> {
        return await this.vendaRepository.find();
      }
    
      async getById(id: number): Promise<Venda> {
        return await this.vendaRepository.findOne(id);
      }
    
      async create(venda: VendaCadastrarDto): Promise<Venda> {
        const createdVenda = new Venda();  
        createdVenda.id_cliente             = venda.id_cliente;
        createdVenda.id_produto             = venda.id_produto;
        createdVenda.quantidade             = venda.quantidade;
        createdVenda.data_venda             = venda.data_venda;
        createdVenda.nota_fiscal_venda      = venda.nota_fiscal_venda;
        createdVenda.preco_total_produtos   = venda.preco_total_produtos;
        createdVenda.deleted                = false;
        return await this.vendaRepository.save(createdVenda);      
      }
      
      async delete(id: number): Promise<ResultadoDto> {
          const deleted_venda = this.getById(id);
          (await deleted_venda).deleted = true;
          return deleted_venda
        .then((result) => {
          return <ResultadoDto> {
            mensagem: 'Venda cancelada com sucesso',
            status: true
          }
        })
        .catch((error) => {
          return <ResultadoDto> {
            mensagem: 'Houve um erro ao cancelar a venda.',
            status: false
          }
        })
    }
}
