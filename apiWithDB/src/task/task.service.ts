import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TaskCadastrarDto } from './dto/task.cadastrar.dto';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
    constructor(
      @Inject('TASK_REPOSITORY')
      private taskRepository: Repository<Task>,
    ) {}

    async getAll()/* : Promise<Task[]> */ {
      //return await this.taskRepository.find();
      let descriptions: any[];
      descriptions = await this.taskRepository.findAndCount({ 
        select: ["description"] ,
         where: {
          description: "Le travail donne la liberté"
        } 
      });
        console.log(descriptions[0]);
        
      console.log("totalDescriptions: "+descriptions[1]/* totalDescriptions */);
    }

    async getById(id: number): Promise<Task> {
      return await this.taskRepository.findOne(id);
    }

    async create(task: TaskCadastrarDto): Promise<ResultadoDto> {
      const createdTask = new Task(); 
      createdTask.description = task.description;
      createdTask.completed = task.completed;
      createdTask.dateCreation = task.dateCreation;
      return this.taskRepository.save(createdTask)
      .then((result) => {
        return <ResultadoDto> {
          mensagem: 'Usuário Cadastrado com sucesso',
          status: true
        };
      })
      .catch((error) => {
        return <ResultadoDto> {
          mensagem: 'Houve um erro ao cadastrar o usuário.',
          status: false
        };
      });
    
    }

    async update(id: number, task: TaskCadastrarDto): Promise<ResultadoDto> {
      
      return this.taskRepository.update(id, task)
      .then((result) => {
        return <ResultadoDto> {
          mensagem: 'Usuário alterado com sucesso',
          status: true
        }
      })
      .catch((error) => {
        return <ResultadoDto> {
          mensagem: 'Houve um erro ao alterar o usuário.',
          status: false
        }
      })

    }
    
    async delete(id: number): Promise<ResultadoDto> {
    return this.taskRepository.delete(id)
    .then((result) => {
      return <ResultadoDto> {
        mensagem: 'Usuário removido com sucesso',
        status: true
      };
    })
    .catch((error) => {
      return <ResultadoDto> {
        mensagem: 'Houve um erro ao remover o usuário.',
        status: false
      };
    });


    }
}