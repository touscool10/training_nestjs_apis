import { Inject, Injectable } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { ProdutoCadastrarDto } from './dto/produto.cadastrar.dto';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutoService {
    constructor(
        @Inject('PRODUTO_REPOSITORY')
        private produtoRepository: Repository<Produto>,
      ) {}
    
      async getAll(): Promise<Produto[]> {
        return await this.produtoRepository.find();
      }
    
      async getById(id: number): Promise<Produto> {
        return await this.produtoRepository.findOne(id);
      }
    
      async create(produto: ProdutoCadastrarDto): Promise<Produto> {
        const createdProduto = new Produto();     
        createdProduto.estoque          = produto.estoque;
        createdProduto.precounitario    = produto.precounitario;
        createdProduto.estoque_minimo   = produto.estoque_minimo;
        createdProduto.deleted          = false;
        return await this.produtoRepository.save(createdProduto);      
      }
    
      async update(id: number, produto: ProdutoCadastrarDto): Promise<ResultadoDto> {
        const updatedProduto = new Produto(); 
        updatedProduto.estoque     = produto.estoque;
        updatedProduto.precounitario = produto.precounitario;
        updatedProduto.estoque_minimo   = produto.estoque_minimo; 
        return await this.produtoRepository.update(id, updatedProduto)
        .then((result) => {
          return <ResultadoDto> {
            mensagem: 'Cliente alterado com sucesso',
            status: true
          }
        })
        .catch((error) => {
          return <ResultadoDto> {
            mensagem: 'Houve um erro ao alterar o Cliente',
            status: false
          }
        })
      }
      
      async delete(id: number): Promise<ResultadoDto> {
          const deleted_produto = this.getById(id);
          (await deleted_produto).deleted = true;
          return deleted_produto
        .then((result) => {
          return <ResultadoDto> {
            mensagem: 'Produto removido com sucesso',
            status: true
          }
        })
        .catch((error) => {
          return <ResultadoDto> {
            mensagem: 'Houve um erro ao remover o Produto.',
            status: false
          }
        })
    }
}
