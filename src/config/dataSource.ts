import {DataSource} from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/config/db.sqlite',
  entities:[],
  //migrations: ['src/migrations/*.ts'], // ou 'dist/migrations/*.js' no build
  synchronize: true, /* 
  * ⚠️ Use apenas em desenvolvimento 
  * Para usar migration deve ser desabilitado
  * Adicionar Entities
  * */
});
