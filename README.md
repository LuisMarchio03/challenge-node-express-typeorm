# Projeto Node.js com Gerenciamento de Clientes e Autenticação JWT

- Este README descreve um projeto Node.js Express implementado com as seguintes funcionalidades:

## Gerenciamento de Clientes:

- Cadastrar, listar, atualizar e excluir clientes.
- Lógica de negócio encapsulada em Use Cases para separação de preocupações.

- Repositório de interface (IClientsRepository) para abstrair o acesso a dados e permitir implementações alternativas (e.g., -  

- banco de dados relacional, banco de dados NoSQL).

## Autenticação JWT:

-Geração de tokens JWT para autenticação do usuário.

- Uso de middleware para verificar tokens e autorizar requisições.

- Dependente de uma variável de ambiente JWT_SECRET para armazenar a chave secreta usada na criação dos tokens.

## Rodando a Aplicação

1. Certifique-se de ter o Node.js e npm (ou yarn) instalados.

2. Clone o repositório do projeto.

3. Instale as dependências do projeto:

```bash
npm install
```

.env já está presente no projeto.

## Inicie o servidor:

```bash
npm run start
```
