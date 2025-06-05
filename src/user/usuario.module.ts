import { UsuarioController } from './usuario.controller';
import { Module } from '@nestjs/common';
//import { PetRepository } from "./repository/pet.repository";
import { UsuarioService } from './usuario.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioEntity } from './usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuarioController],
  providers: [UsuarioService],//colocar Injectable na classe
  exports: [UsuarioService]
})
export class UsuarioModule {}