<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Pokedex API

## Português 🇧🇷

### Descrição

API Pokedex desenvolvida com NestJS, MongoDB e TypeScript. Este projeto permite gerenciar dados de Pokémons através de uma API RESTful.

### Funcionalidades

- CRUD completo de Pokémons
- Busca por nome ou número do Pokémon
- Paginação de resultados
- Validação de dados
- Seed para população inicial do banco de dados

### Tecnologias

- NestJS 11
- MongoDB 8
- Docker & Docker Compose
- TypeScript
- Mongoose
- Axios
- Class Validator

### Configuração do Projeto

```bash
# Instalação de dependências
$ yarn install

# Iniciar o banco de dados MongoDB
$ docker-compose up -d
```

### Compilar e executar o projeto

```bash
# modo de desenvolvimento
$ yarn start

# modo de observação
$ yarn start:dev

# modo de produção
$ yarn start:prod
```

### Endpoints

- `GET /api/pokemon` - Listar todos os pokémons (com paginação)
- `GET /api/pokemon/:term` - Buscar pokémon por nome ou número
- `POST /api/pokemon` - Criar novo pokémon
- `PATCH /api/pokemon/:term` - Atualizar pokémon existente
- `DELETE /api/pokemon/:id` - Remover pokémon

### População de dados

Para popular o banco de dados com uma lista inicial de pokémons:

```bash
# Acessar o endpoint de seed
GET /api/seed
```

## Español 🇪🇸

### Descripción

API Pokedex desarrollada con NestJS, MongoDB y TypeScript. Este proyecto permite gestionar datos de Pokémon a través de una API RESTful.

### Funcionalidades

- CRUD completo de Pokémon
- Búsqueda por nombre o número de Pokémon
- Paginación de resultados
- Validación de datos
- Seed para población inicial de la base de datos

### Tecnologías

- NestJS 11
- MongoDB 8
- Docker & Docker Compose
- TypeScript
- Mongoose
- Axios
- Class Validator

### Configuración del Proyecto

```bash
# Instalación de dependencias
$ yarn install

# Iniciar la base de datos MongoDB
$ docker-compose up -d
```

### Compilar y ejecutar el proyecto

```bash
# modo de desarrollo
$ yarn start

# modo de observación
$ yarn start:dev

# modo de producción
$ yarn start:prod
```

### Endpoints

- `GET /api/pokemon` - Listar todos los pokémon (con paginación)
- `GET /api/pokemon/:term` - Buscar pokémon por nombre o número
- `POST /api/pokemon` - Crear nuevo pokémon
- `PATCH /api/pokemon/:term` - Actualizar pokémon existente
- `DELETE /api/pokemon/:id` - Eliminar pokémon

### Población de datos

Para poblar la base de datos con una lista inicial de pokémon:

```bash
# Acceder al endpoint de seed
GET /api/seed
```

## Licença / Licencia

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

Este proyecto está licenciado bajo la licencia MIT - consulte el archivo LICENSE para más detalles.
