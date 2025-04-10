## Expense Tracker
O Expense Tracker é uma aplicação inspirada em um projeto de controle financeiro desenvolvido inicialmente pelo canal Time To Program. Essa versão foi criada com o objetivo de consolidar e expandir conhecimentos em React, utilizando tecnologias modernas como ContextAPI para o gerenciamento de estados, tailwindCss para estilização e React Router Dom para a navegação entre páginas essenciais do sistema.
Uma das principais inovações desta versão é sua capacidade multilíngue, oferecendo suporte aos idiomas inglês, português e espanhol. Além disso, a aplicação realiza conversões de moeda para os formatos e padrões específicos de cada idioma selecionado, garantindo uma experiência adaptada e localizada para os usuários ao redor do mundo.
Essas melhorias não apenas enriquecem a funcionalidade original, mas também proporcionam uma experiência mais intuitiva e personalizada para o gerenciamento de despesas pessoais e financeiras.

## Referência
[Aula que assistir - Build a Full-Stack MERN Expense Tracker | React, Node.js, MongoDB, Express | MERN Project - Canal Time To Program](https://www.youtube.com/watch?v=PQnbtnsYUho)

## Tecnologias

Tecnologias usadas no projeto:

  * React 19.0.0
  * Node 22.12.0
  * Axios 1.8.4
  * TailwindCss 4.0.9

## Serviços Usados

O expense tracker tem uma API que deve ser instalada no projeto para que ele funcione corretamente, a API foi desenvolvida em Laravel.
[API Expense Tracker - Repositório](https://github.com/LevyAlves1532/api-expense-tracker)

## Para Iniciar

  * Ambiente:
    - Ter o Node na versão 22.12.0 LTS
  
  * Como rodar o projeto?
    - Instale as dependencias do projeto com o seguinte comando: `npm install` ou `yarn`
    - Logo após configure a URL da API no projeto em `src\utils\apiPaths.ts`, cole a URL na constante `BASE_URL`
      Ex:
      ```
        export const BASE_URL = 'http://127.0.0.1:8000/api';
      ```
      
    - Entre na pasta raiz do projeto e rode o seguinte comando: `npm run dev`

## Como usar?

Após a API está instalada e configurada no projeto, basta usar a aplicação, criar uma conta, fazer login, e começar a fazer o gerenciamento de suas despesas e rendas.

## Links

  * Repositorio: https://github.com/LevyAlves1532/expense-tracker
    - Caso você encontre algum bug, ou tenha dúvidas sobre o projeto, entre em contato levy.pereiraA1532@gmail.com, desde já agradeço pela atenção!

  ## Versão do Projeto

  1.0.0

  ## Autor do Projeto

  * **Lêvy Pereira Alves**

  Siga o github e junte-se a nós!
  Obrigado por me visitar e boa codificação!
