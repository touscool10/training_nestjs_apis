import { Connection } from 'typeorm';
import { Venda } from './venda.entity';

export const vendaProviders = [
  {
    provide: 'VENDA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Venda),
    inject: ['DATABASE_CONNECTION'],
  },
];