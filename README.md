# QuikServe

## Sobre o Projeto
O **QuikServe** é uma aplicação de delivery que exemplifica o uso do Angular para desenvolver um front-end padrão e responsivo. A visão por trás deste projeto era criar uma interface simples e intuitiva que interage com um servidor JSON para exibir dados de empresas de venda, entre outros. Com um design minimalista, o objetivo foi proporcionar uma experiência de usuário fluida e agradável, embora ainda existam desafios a serem superados em relação à responsividade em dispositivos com telas menores.

## Tecnologias Utilizadas
- Angular CLI: 17.3.3
- Node.js
- JSON Server (para simulação de API REST)

## Como Executar
1. Instale os módulos do Node: `npm install --force`
2. Inicie o servidor de desenvolvimento: `npm start` ou `ng serve`
3. Abra `http://localhost:4200/` no navegador.
As alterações nos arquivos fonte serão refletidas automaticamente na aplicação.
OBS: É importante startar o server json para o funcionamento ideal de todas as funcionalidades

## Estrutura do Código
Para adicionar novos componentes ao projeto: `ng generate component nome-do-componente`
Você também pode gerar diretivas, pipes, serviços, classes, guards, interfaces, enums e módulos.

## Servidor JSON
Para iniciar o servidor JSON, caso já tenha ele instalado no seu computador, use `npx json-server db.json`, onde `db.json` é o nome do arquivo da sua aplicação. Se não tiver o JSON Server instalado, primeiro instale-o globalmente com `npm install -g json-server`.

## Contribuições
Contribuições são bem-vindas! Se você deseja contribuir, por favor, entre em contato comigo pelos meios que estão em meu perfil!!!

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo `LICENSE.txt` para detalhes.
