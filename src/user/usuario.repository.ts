import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsuarioRepository {
  constructor (
    @InjectRepository(UsuarioEntity)
    private readonly userRepo: Repository<UsuarioEntity>
  ) {}

  async create(email: string, password: string) {
    
  }
}