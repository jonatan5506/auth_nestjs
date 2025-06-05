# Projeto de Autenticação e Autorização com NestJS

Criei este projeto com a finalidade de implementar e entender os processos de **Autenticação** (login) e **Autorização** (permissões) utilizando o framework [NestJS](https://nestjs.com/). O objetivo principal é consolidar boas práticas de segurança em aplicações Node.js modernas.

---

## ✨ Principais funcionalidades

* **JWT Stateless Auth** – emissão e verificação de *JSON Web Tokens*
* **Guards & Strategies (Passport.js)** – proteção de rotas por perfis e papéis
* **TypeORM + SQLite** – mapeamento objeto‑relacional leve, dispensando servidor externo de banco de dados
* **Bcrypt** – hashing seguro de senhas

---

## 📂 Estrutura de diretórios

```text
src/
├── auth/
│   ├── auth.controller.ts   # Endpoints de login e refresh
│   ├── auth.module.ts       # Registro de providers do módulo
│   ├── auth.service.ts      # Regras de negócio de autenticação
│   └── jwt.strategy.ts      # Strategy Passport para validar JWT
├── user/
│   ├── user.controller.ts   # CRUD de usuários
│   ├── user.entity.ts       # Entidade ORM
│   ├── user.module.ts       # Módulo do domínio de usuário
│   └── user.service.ts      # Camada de serviço
├── app.module.ts            # Módulo raiz
└── main.ts                  # Bootstrap da aplicação
```

---

## ⚙️ Stack técnica

| Camada       | Tecnologia        |
| ------------ | ----------------- |
| Framework    | NestJS 10         |
| Autenticação | Passport.js + JWT |
| ORM          | TypeORM           |
| Banco        | SQLite            |
| Hashing      | Bcrypt            |

---

## 🚀 Instalação

```bash
# Dependências de runtime
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt typeorm sqlite3

# Tipagens para desenvolvimento
npm install -D @types/passport-jwt @types/bcrypt
```

---

## 📌 Roadmap

* [ ] Separar responsabilidades entre **Service** e **Repository** no domínio `user`
* [ ] Implemetar níveis de acesso para os usários.
* [ ] Implemetar DTO
* [ ] Adicionar testes unitários com **Jest**
* [ ] Migração de DB para aws
* [ ] Documentar API utilizando **Swagger**

---
