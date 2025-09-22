# codigo-ao-container-app

Este repositório demonstra como configurar uma aplicação Node.js com TypeScript, utilizando Docker para containerização e Jest para testes automatizados.

## Tecnologias

- **Node.js** — Ambiente de execução JavaScript no servidor.  
- **TypeScript** — Superset do JavaScript que adiciona tipagem estática.  
- **Docker** — Plataforma para desenvolvimento, envio e execução de aplicativos em containers.  
- **Jest** — Framework de testes para JavaScript, utilizado para testes unitários e de integração.

## Estrutura do Projeto

    / 
    ├─ src/  
    │  ├─ app.ts            
    │  └─ index.ts          
    ├─ tests/  
    │  └─ index.test.ts     
    ├─ Dockerfile  
    ├─ jest.config.js  
    ├─ package.json  
    ├─ tsconfig.json  
    └─ .gitignore  

## Como Rodar Localmente

### 1. Clonar o Repositório

```bash
git clone https://github.com/joao1912/codigo-ao-container-app.git
cd codigo-ao-container-app
```

### 2. Instalar as Dependências
```bash
npm install
```
### 3. Rodar a Aplicação
```bash
npm run dev
```

### 4. Rodar os Testes

```bash
npm run test
```

## Usando com Docker

### 1. Construir a Imagem Docker
```bash
docker build -t codigo-ao-container-app .
```
### 2. Rodar o Container
```bash
docker run -p 80:80 codigo-ao-container-app
```