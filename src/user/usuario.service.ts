import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuarioEntity } from "./usuario.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private userRepo: Repository<UsuarioEntity>
  ) {}

  async create(email: string, password: string): Promise<UsuarioEntity> {
    const hash = await bcrypt.hash(password, 10);
    const user = this.userRepo.create({ email, password: hash });
    return this.userRepo.save(user);
  }

  async findByEmail(email: string): Promise<Partial<UsuarioEntity>> {
    const usuario = await this.userRepo.findOne({ where: { email } });

    if (!usuario) {
      throw new NotFoundException("Usuário não localizado!");
    }

    return usuario;
  }

  async checkIfEmailExists(email: string): Promise<boolean> {
    const usuario = await this.userRepo.findOne({ where: { email } });
    return !!usuario;
  }
}
