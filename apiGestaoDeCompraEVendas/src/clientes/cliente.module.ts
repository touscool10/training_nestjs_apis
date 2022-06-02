import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { clienteProviders } from './cliente.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [
        ClienteController, ],
    providers: [
        ClienteService, 
        ...clienteProviders,
    ],
})
export class ClienteModule {}
