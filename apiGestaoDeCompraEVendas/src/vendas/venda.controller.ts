import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Venda } from './venda.entity';
import { VendaService } from './venda.service';

@Controller('vendas')
export class VendaController {
    constructor(private readonly vendaService : VendaService) {}

    @Get('listar')
    async getAll(): Promise<Venda[]> {
        return this.vendaService.getAll();
    }
    @Get(':id')
    async getById(@Param('id') id: number): Promise<Venda> {
        return this.vendaService.getById(id);
    }
    @Post('cadastrar')
    async create(@Body() venda: Venda): Promise<Venda>  {
        return this.vendaService.create(venda);
    }
    /*@Put('editar/:id') 
    async update(@Param('id') id: number, @Body() produto: Produto) : Promise<ResultadoDto>  {
        return this.vendaService.update(id, produto);
    }*/
    @Delete('remover/:id')
    async delete(@Param('id') id: number) : Promise<ResultadoDto> {
        return this.vendaService.delete(id);
    }
}
