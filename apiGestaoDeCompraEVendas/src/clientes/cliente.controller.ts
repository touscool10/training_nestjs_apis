import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';
import { ResultadoDto } from 'src/dto/resultado.dto';

@Controller('clientes')
export class ClienteController {
    constructor(private readonly clienteService : ClienteService) {}

    @Get('listar')
    async getAll(): Promise<Cliente[]> {
        return this.clienteService.getAll();
    }
    @Get(':id')
    async getById(@Param('id') id: number): Promise<Cliente> {
        return this.clienteService.getById(id);
    }
    @Post('cadastrar')
    async create(@Body() cliente: Cliente): Promise<Cliente>  {
        return this.clienteService.create(cliente);
    }
    @Put('editar/:id') 
    async update(@Param('id') id: number, @Body() cliente: Cliente) : Promise<ResultadoDto>  {
        return this.clienteService.update(id, cliente);
    }
    @Delete('remover/:id')
    async delete(@Param('id') id: number) : Promise<ResultadoDto> {
        return this.clienteService.delete(id);
    }

}
