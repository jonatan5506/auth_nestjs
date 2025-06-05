import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './user/usuario.module';
import { AuthModule } from './auth/auth.module';
import { AppDataSource } from './config/dataSource';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // Disponível em toda aplicação
    }),
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
      autoLoadEntities: true,
    }),
    UsuarioModule,
    AuthModule,
  ],
})
export class AppModule {}
