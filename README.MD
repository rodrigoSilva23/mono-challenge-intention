# Intenção de Compra!

Este projeto consiste em dois serviços para gerenciar as intenções de compra.

## Funcionalidades

- Busca de Produtos
- Busca de Intenção de Compra
- Criação de Intenção de Compra

## Tecnologias Utilizadas

- docker
- docker-compose
- PHP com Laravel
- TypeScript com NestJS

## Pré-requisitos

Antes de iniciar a instalação do projeto, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- Docker: [Como instalar o Docker](https://www.docker.com/get-started/)
- Docker Compose

Verifique se todas as dependências necessárias estão instaladas antes de prosseguir com os seguintes passos.

## Passo 1: Clonar o repositório

```bash
  https://github.com/rodrigoSilva23/desafio-Laravel-API-Circuito-de-Surf.git
```

## Passo 2: Instalação

```bash
    docker-compose up
```

Aguarde subir os containers depois rode os seguintes comandos para instalar as dependências do laravel

```bash
    docker-compose run service-products cp ./.env.example ./.env
    docker-compose run service-products composer install  
    docker-compose run service-products  php artisan key:generate
```

## rotas

Você pode verificar as rotas disponíveis acessando [http://localhost:3000/api/v1/endpoint](http://localhost:3000/api/v1/endpoint). Isso fornecerá uma visão geral de todos os endpoints disponíveis em sua API.

<p>
  Explore as rotas listadas para entender os diferentes endpoints e recursos que sua API oferece. Cada rota terá sua descrição e os métodos HTTP suportados, como GET, POST, PUT, DELETE, entre outros.
</p>

## possíveis erros

Existe a chance de ocorrer um erro de permissão ao executar o comando docker-compose up. Para corrigir isso, você pode fornecer permissões de execução aos scripts de produto e intenção.

Para conceder permissões de execução ao arquivo entrypoint.sh, você pode executar o seguinte comando no terminal:

```bash
   chmod +x ./service-intention/.docker/entrypoint.sh

```
isso ira da permissão  de execução do script

## Author

- [@rodrigosilvaDev23](https://github.com/rodrigoSilva23)

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](https://opensource.org/licenses/MIT) para obter mais informações.