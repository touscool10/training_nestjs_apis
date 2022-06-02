import { VendaService } from './venda.service';
import { VendaController } from './venda.controller';
import { Module } from '@nestjs/common';
import { vendaProviders } from './venda.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [
        VendaController, ],
    providers: [
        VendaService, 
        ...vendaProviders,
    ],
})
export class VendaModule {}

