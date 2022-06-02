import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { TaskService } from './task.service';
import { Task } from './task.entity';
import { TaskCadastrarDto } from './dto/task.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService : TaskService) {}


    @Get('listar')
    async getAll()/* : Promise<Task[]> */ {
        return await this.taskService.getAll();
    }
    @Get(':id')
    async getById(@Param('id') id: number): Promise<Task> {
        return this.taskService.getById(id);
    }
    @Post('cadastrar')
    async create(@Body() task: TaskCadastrarDto): Promise<ResultadoDto>  {
        return this.taskService.create(task);
    }
    @Put('editar/:id') 
    async update(@Param('id') id: number, @Body() task: TaskCadastrarDto) : Promise<ResultadoDto>  {
        return this.taskService.update(id, task);
    }
    @Delete('remover/:id')
    async delete(@Param('id') id: number) : Promise<ResultadoDto> {
        return this.taskService.delete(id);
    }

    }
