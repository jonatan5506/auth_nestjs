// import { AuthController } from './auth.controller';
// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsuarioModule } from 'src/user/usuario.module';
// import { JwtModule } from '@nestjs/jwt';
// import { JwtStrategy } from './jwt.strategy'; // <-- importação faltando

// @Module({
//   imports: [
//     TypeOrmModule.forFeature([]), // adicione entidades aqui se necessário
//     UsuarioModule,
//     JwtModule.register({
//       secret: process.env.JWT_SECRET || 'minha_chave_jwt',
//       signOptions: { expiresIn: '1d' },
//     }),
//   ],
//   controllers: [AuthController],
//   providers: [
//     AuthService,
//     JwtStrategy,
//   ],
// })
// export class AuthModule {}

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioModule } from 'src/user/usuario.module';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    UsuarioModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
