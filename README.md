# Meu Portfólio 2.0

Este é o meu portfólio web pessoal, onde apresento meus projetos, habilidades e informações de contato.

## Visão Geral

Este portfólio foi construído utilizando as seguintes tecnologias:

* **React v19:** Uma biblioteca JavaScript para construir interfaces de usuário.
* **React DOM v19:** O ponto de entrada para a manipulação do DOM com React.
* **React Router DOM v7.5.0:** Para roteamento e navegação dentro da aplicação React.
* **React Icons v5.5.0:** Uma biblioteca de ícones populares para React.
* **JavaScript:** A linguagem de programação principal.
* **CSS:** Utilizado para estilizar a interface do usuário.
* **Vite:** Uma ferramenta de construção extremamente rápida para desenvolvimento web.

## Como Executar

Para executar este portfólio localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/dolthub/dolt](https://github.com/dolthub/dolt)
    cd [nome do seu repositório]
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
4.  Abra seu navegador e acesse o endereço fornecido pelo Vite (geralmente `http://localhost:5173`).

## Scripts Disponíveis

Os seguintes scripts estão definidos no `package.json`:

* **`dev`:** Inicia o servidor de desenvolvimento do Vite.
* **`build`:** Compila o projeto para produção.
* **`lint`:** Executa o ESLint para verificar problemas de estilo e qualidade do código.
* **`preview`:** Inicia um servidor de visualização local para a build de produção.

## Personalização

Para personalizar este portfólio, você pode modificar os seguintes arquivos:

* Os componentes dentro de `App.jsx` ou em outros arquivos que você criar para organizar sua interface.
* Os arquivos CSS (`App.css`, `index.css` e outros que você possa adicionar) para modificar o estilo.
* O arquivo `projetos.js` em `services/` para atualizar as informações dos seus projetos.
* Os arquivos em `public/` (se houver) para adicionar ou alterar assets estáticos.

## Deploy

Para fazer o deploy deste portfólio, você pode utilizar diversas plataformas como Netlify, Vercel, GitHub Pages, entre outras. Consulte a documentação dessas plataformas para obter instruções detalhadas para projetos React construídos com Vite.