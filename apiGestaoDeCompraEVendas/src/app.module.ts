import { VendaModule } from './vendas/venda.module';
import { ProdutoModule } from './produtos/produto.module';
import { ClienteModule } from './clientes/cliente.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
        VendaModule, 
        ProdutoModule, 
        ClienteModule, ],
  controllers: [
        AppController],
  providers: [AppService],
})
export class AppModule {}
