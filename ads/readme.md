# Sistema de Gerenciamento de Clínica Veterinária

Este projeto é um sistema web desenvolvido para gerenciar as operações de uma clínica veterinária, como o agendamento de consultas, cadastro de animais, gerenciamento de fornecedores e geração de relatórios de consultas.

## Visão Geral

O Sistema de Gerenciamento de Clínica Veterinária é desenvolvido utilizando **React** para o frontend e **Java (Spring Boot)** para o backend, com **PostgreSQL** como banco de dados para a persistência dos dados. O objetivo do sistema é simplificar as tarefas de gerenciamento da clínica através de uma interface intuitiva e uma arquitetura de backend robusta.

## Funcionalidades

- **Agendamento de Consultas**: Permite o agendamento de consultas para os animais da clínica.
- **Cadastro de Animais**: Criação e gerenciamento de registros de animais, incluindo espécie, raça e informações do proprietário.
- **Cadastro de Fornecedores**: Manutenção de uma lista de fornecedores de medicamentos, alimentos e outros produtos necessários para a clínica.
- **Excluir Registros**: Opção para excluir registros de animais ou fornecedores.
- **Gerenciamento de Consultas**: Visualização, atualização ou cancelamento de consultas agendadas.
- **Relatórios de Consultas**: Geração e exportação de relatórios de consultas agendadas com base em critérios como data ou animal.

## Tecnologias

### Frontend
- **React** (Biblioteca JavaScript para construção de interfaces de usuário)
- **Axios** (para requisições API)
- **HTML/CSS** (para estrutura e estilização)

### Backend
- **Java** (para lógica de negócios e desenvolvimento de API)
- **Spring Boot** (para desenvolvimento rápido de aplicações web em Java)
- **PostgreSQL** (banco de dados relacional para persistência de dados)

### Ferramentas
- **Maven** (Gerenciamento de dependências Java)
- **Node.js & npm** (Ambiente de execução JavaScript e gerenciamento de pacotes)

## Estrutura do Projeto

```plaintext
/backend
  ├── src
      ├── main
          ├── java
          ├── resources
      └── test
  ├── pom.xml
/frontend
  ├── src
      ├── components
      ├── pages
      ├── services
  ├── public
  └── package.json
