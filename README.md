<img width="1280" height="1280" alt="Image" src="https://github.com/user-attachments/assets/b74eb018-2699-42b5-aed4-111710acf5cf" />

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC)
![License](https://img.shields.io/badge/license-Study%20Project-lightgrey)

# Vyst

O **Vyst** é uma aplicação web para conectar fotógrafos, agências e clientes.

A proposta é centralizar, em uma única plataforma, a divulgação de serviços fotográficos e o gerenciamento de agendamentos.

Projeto em desenvolvimento.

---

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura](#arquitetura)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instalação e Execução](#instalação-e-execução)
- [Screenshots](#screenshots)
- [Roadmap](#roadmap)
- [Desenvolvedor](#desenvolvedor)
- [Licença](#licença)

---

## Sobre o Projeto

A aplicação permite que:

- Fotógrafos e agências criem perfis profissionais
- Organizem sua agenda
- Publiquem serviços ou fotos
- Clientes busquem profissionais e realizem agendamentos

O objetivo principal é aplicar conceitos como:

- Estruturação de aplicações com Next.js
- Organização de componentes
- Integração com API REST
- Consumo de dados externos
- Separação clara entre frontend e backend

O backend é mantido em um repositório separado:  
https://github.com/pDiazz-dev/Back-End-StudioPhotograph.git

---

## Funcionalidades

### Para fotógrafos e agências

- Cadastro de perfil
- Organização de disponibilidade por data
- Gerenciamento de agenda
- Visualização de agendamentos

### Para clientes

- Busca de fotógrafos
- Visualização de disponibilidade
- Agendamento de serviços

---

## Tecnologias Utilizadas

### Frontend

- Next.js
- React
- TypeScript
- Node.js
- Tailwind CSS
- JavaScript
- Css

### Backend

- Java
- Spring Boot
- PostgreSQL
- Maven
- Docker
- Postman

---

## Arquitetura

A aplicação está dividida em três camadas principais:

- **Frontend** → Interface e renderização
- **Backend** → Regras de negócio e persistência
- **Banco de Dados** → PostgreSQL

A comunicação ocorre via REST API utilizando requisições HTTP.

---

## Configuração do Ambiente

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```
## Instalação e Execução

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Backend em execução (porta 8080 por padrão)
- PostgreSQL configurado no backend

### Clonar o repositório

```bash
git clone https://github.com/Theus28238/photography-frontend.git
```
ou

```bash
yarn
```

### Executar em ambiente de desenvolvimento
```bash
npm run dev
```
A aplicação estará disponível em:
```
http://localhost:3000
```
---

## Screenshots

### ⚠️ Em desenvolvimento.

### Capturas previstas:

- Página inicial
- Perfil de fotógrafo
- Agenda / calendário
- Tela de agendamento
- Dashboard do profissional
---
## Roadmap
- Configuração inicial do projeto
- Estrutura de rotas e páginas base
- Implementação de autenticação com JWT
- Proteção de rotas privadas
- Upload de imagens para serviço externo (ex: S3)
- Paginação e filtros na busca de fotógrafos
- Sistema de avaliações
- Deploy do frontend
- Integração contínua
---
## Desenvolvedor
 Desenvolvido por Matheus Oliveira:
 - https://github.com/Theus28238
---
## Licença

**Código disponível para visualização pública, mas com restrições:**

- Visualização e estudo do código são permitidos
- Modificação, distribuição ou uso comercial são proibidos
- Para utilizar qualquer parte deste código em projetos comerciais, contate o desenvolvedor

© 2026 Vyst. Todos os direitos reservados.
