import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { produtoProviders } from './produto.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [
        ProdutoController, ],
    providers: [
        ProdutoService, 
        ...produtoProviders,
    ],
})
export class ProdutoModule {}
