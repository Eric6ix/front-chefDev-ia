# Projeto Chat React

Projeto React simples com Vite, Tailwind CSS e Axios.

## Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## Instalação

1. Abra o terminal na pasta do projeto:
   ```bash
   cd c:\Users\DEV-NORTESYS-10\Documents\react\chat
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração de variáveis de ambiente

Antes de executar o projeto, crie um arquivo `.env` na raiz do projeto com suas credenciais e configurações necessárias.

Exemplo de `.env`:
```env
VITE_API_URL=https://seu-servidor-api.com
VITE_API_KEY=sua_chave_aqui
```

> Ajuste as chaves de ambiente conforme a necessidade da sua aplicação.


## Executando o projeto

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
2. Abra o navegador em:
   ```text
   http://localhost:5173
   ```

## Outros comandos úteis

- Build de produção:
  ```bash
  npm run build
  ```
- Rodar lint:
  ```bash
  npm run lint
  ```
- Preview da build:
  ```bash
  npm run preview
  ```

## Observações

- Certifique-se de que o `.env` não seja versionado se contiver credenciais sensíveis.
- Use `VITE_` no início das variáveis de ambiente para que o Vite as exponha no cliente.
