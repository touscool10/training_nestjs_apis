import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Produto } from './produto.entity';
import { ProdutoService } from './produto.service';
import { ProdutoCadastrarDto } from './dto/produto.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';


@Controller('produtos')
export class ProdutoController {
    constructor(private readonly produtoService : ProdutoService) {}

    @Get('listar')
    async getAll(): Promise<Produto[]> {
        return this.produtoService.getAll();
    }
    @Get(':id')
    async getById(@Param('id') id: number): Promise<Produto> {
        return this.produtoService.getById(id);
    }
    @Post('cadastrar')
    async create(@Body() produto: Produto): Promise<Produto>  {
        return this.produtoService.create(produto);
    }
    @Put('editar/:id') 
    async update(@Param('id') id: number, @Body() produto: Produto) : Promise<ResultadoDto>  {
        return this.produtoService.update(id, produto);
    }
    @Delete('remover/:id')
    async delete(@Param('id') id: number) : Promise<ResultadoDto> {
        return this.produtoService.delete(id);
    }
}
