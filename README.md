<h1 align="center">API - Swagger + Node.js com Typescript <br>
<img src="./img/typescript_e_node.jpeg" alt="Logo" width="410"></h1>

<h2 align="center">👨🏻‍💻 Autor deste Projeto:</h2>

<p align="center">
<strong>Lucas Paguetti Pereira</strong> 🦇 <br>
🏫 <strong>Instituição:</strong> Cesar School 🎓🧡 <br>
📍 Recife, Pernambuco — <strong>Brazil</strong> 🇧🇷
</p>

<p align="center">
<a href="https://www.instagram.com/lucpaguetti/">
<img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=black">
</a>
<a href="https://github.com/wqiluc">
<img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white">
</a>
<a href="https://www.linkedin.com/in/lucas-paguetti-pereira-70267339b/">
<img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white">
</a> <br>
<a href="mailto:lpp2@cesar.school">
<img src="https://img.shields.io/badge/Contact%20Me-lpp2%40cesar.school-FFA500?style=for-the-badge&logo=gmail&logoColor=orange">
</a> <br>
<a href="https://discord.com/users/lucaspaguettipereira">
<img src="https://img.shields.io/badge/Discord-lucaspaguettipereira-5865F2?style=for-the-badge&logo=discord&logoColor=blue">
</a>
</p>

<h2 align="center"> 💻⛏️ Ferramentas e Tecnologias Utilizadas: </h2>
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" width="32" height="32" alt="VS Code"/> <br> 
  <img src="https://img.shields.io/badge/-JavaScript-111827?style=flat-square&logo=javascript&logoColor=F7DF1E"/>
  <img src="https://img.shields.io/badge/-TypeScript-111827?style=flat-square&logo=typescript&logoColor=3178C6"/>
  <img src="https://img.shields.io/badge/-NestJS-111827?style=flat-square&logo=nestjs&logoColor=E0234E"/>
  <img src="https://img.shields.io/badge/-Node.js-111827?style=flat-square&logo=nodedotjs&logoColor=339933"/>
  <img src="https://img.shields.io/badge/-Node%20Modules-111827?style=flat-square&logo=nodedotjs&logoColor=339933"/>
  <img src="https://img.shields.io/badge/-NPM-111827?style=flat-square&logo=npm&logoColor=CB3837"/>
  <img src="https://img.shields.io/badge/Prisma-111827?style=flat-square&logo=prisma&logoColor=white"/> <br>
  <img src="https://img.shields.io/badge/-Docker-111827?style=flat-square&logo=docker&logoColor=2496ed"/>
  <img src="https://img.shields.io/badge/-PostgreSQL-111827?style=flat-square&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/-Swagger-111827?style=flat-square&logo=swagger&logoColor=85EA2D"/>
  <img src="https://img.shields.io/badge/ESLint-111827?style=flat-square&logo=eslint&logoColor=4B32C3" />
  <img src="https://img.shields.io/badge/Prettier-111827?style=flat-square&logo=prettier&logoColor=F7B93E" /> <br>
  <img src="https://img.shields.io/badge/-Git-111827?style=flat-square&logo=git&logoColor=F05032"/>
  <img src="https://img.shields.io/badge/-GitHub-111827?style=flat-square&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/-GitHubDesktop-111827?style=flat-square&logo=github&logoColor=purple"/>
</p>

<h2 align="center">Comandos 🕹️ <br>
<img src="https://img.shields.io/badge/Terminal_Integrado-000000?style=for-the-badge&logo=gnumetalinux&logoColor=white" height="18"></h2>

Após baixar o Github desktop: <br>
<img src="https://img.shields.io/badge/-GitHub%20Desktop-111827?style=flat-square&logo=github&logoColor=6F42C1" height="22"/>

2. **Clone o repositório:**
   ```bash
   git clone [...](...)

4. **Abra sua IDE de escolha:** <br> <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" width="32" height="32" alt="VS Code"/> <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg" width="32" height="32" alt="IntelliJ"/><img src="https://resources.jetbrains.com/storage/products/goland/img/meta/goland_logo_300x300.png" width="32" height="32" alt="GoLand"/><img src="https://resources.jetbrains.com/storage/products/webstorm/img/meta/webstorm_logo_300x300.png" width="32" height="32" alt="WebStorm"/> <img src="https://resources.jetbrains.com/storage/products/pycharm/img/meta/pycharm_logo_300x300.png" width="32" height="32" alt="PyCharm"/><img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg" width="32" height="32" alt="Android Studio"/>
5. **Siga os seguintes comandos:** <br>

<h3 align="center"><b>1. Docker</b><br>
<img src="https://img.shields.io/badge/-Docker-111827?style=flat-square&logo=docker&logoColor=2496ed"/><img src="https://img.shields.io/badge/-PostgreSQL-111827?style=flat-square&logo=postgresql&logoColor=white"/></h3>

```bash
# Sobe todos os containers definidos no docker-compose.yml em background
docker compose up -d

# Para e remove os containers (útil quando algo trava)
docker compose down

# Mostra os logs do container (essencial para debugar erros na inicialização)
docker compose logs -f

# Lista os containers que estão rodando no momento
docker compose ps

# Remove containers parados e redes não usadas (limpeza geral)
docker system prune -f
```

<h3 align="center"><b>2. Prisma</b><br>
<img src="https://img.shields.io/badge/Prisma-111827?style=flat-square&logo=prisma&logoColor=white"/></h3>

```bash
# A estrutura é: docker compose exec <nome_do_serviço> <comando>

# Inicializa o Prisma no projeto (cria a pasta /prisma e o schema.prisma)
docker compose exec api npx prisma init

# Cria uma nova migração (salva o estado do seu modelo no banco)
docker compose exec api npx prisma migrate dev --name init

# Abre a interface gráfica do Prisma (Studio) no navegador
# (Nota: o --port 5555 precisa estar exposto no seu docker-compose)
docker compose exec api npx prisma studio

# Atualiza os tipos do Prisma Client (execute sempre após mudar o schema.prisma)
docker compose exec api npx prisma generate
```

<h3 align="center"><b>3. NestJS / NPM (Desenvolvimento)</b><br>
<img src="https://img.shields.io/badge/-Node.js-111827?style=flat-square&logo=nodedotjs&logoColor=339933"/> <img src="https://img.shields.io/badge/-Node%20Modules-111827?style=flat-square&logo=nodedotjs&logoColor=339933"/> <img src="https://img.shields.io/badge/-NPM-111827?style=flat-square&logo=npm&logoColor=CB3837"/></h3>

```bash
# Inicia o servidor em modo de desenvolvimento (reinicia automaticamente ao salvar)
npm run start:dev

# Compila o projeto (cria a pasta /dist para produção)
npm run build

# Verifica erros de digitação e formatação (linting)
npm run lint

# Formata o código automaticamente seguindo as regras do Prettier
npm run format
```


<h3 align="center"><b>4. GitIgnore (Controle de Versão)</b><br>
<img src="https://img.shields.io/badge/-Git-111827?style=flat-square&logo=git&logoColor=F05032"/></h3>


```bash
# --- Dependências ---
node_modules/
jspm_packages/

# --- Artefatos de Build ---
dist/
build/
out/

# --- Logs ---
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# --- Variáveis de Ambiente (CRUCIAL) ---
# NUNCA envie seus arquivos .env para o GitHub!
# Seus tokens, senhas de banco de dados e chaves ficam aqui.
.env
.env.local
.env.*.local

# --- IDEs e Configurações de Sistema ---
.vscode/
.idea/
*.sublime-*
.DS_Store
Thumbs.db

# --- Testes e Cobertura ---
coverage/
.nyc_output/

# --- Outros ---
.eslintcache
.tmp/
```


<h2 align="center"> 🔑 Versões Necessárias para compilar: </h2>
<p align="center">
<p align="center">
  <img src="https://img.shields.io/badge/NestJS-11.0.0-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS"/>
  <img src="https://img.shields.io/badge/TypeScript-5.7.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Node.js-22.0.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node"/>
  <img src="https://img.shields.io/badge/Swagger-11.3.0-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger"/>
  <img src="https://img.shields.io/badge/Passport-0.7.0-34495E?style=for-the-badge&logo=passport&logoColor=white" alt="Passport"/>
  <img src="https://img.shields.io/badge/JWT-11.0.2-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT"/>
  <img src="https://img.shields.io/badge/RxJS-7.8.1-B7178C?style=for-the-badge&logo=reactivex&logoColor=white" alt="RxJS"/>
  <img src="https://img.shields.io/badge/Express-5.0.0-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/Prettier-3.4.2-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier"/>
  <img src="https://img.shields.io/badge/ESLint-9.0.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint"/>
  <img src="https://img.shields.io/badge/Docker-Engine-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
</p>
</p>


<h2 align="center">🧭 Guia de Dependências: NestJS & Docker <br>
<img src="https://img.shields.io/badge/-NestJS-111827?style=flat-square&logo=nestjs&logoColor=E0234E"/><img src="https://img.shields.io/badge/-NPM-111827?style=flat-square&logo=npm&logoColor=CB3837"/><img src="https://img.shields.io/badge/-Docker-111827?style=flat-square&logo=docker&logoColor=2496ed"/></h2>

Este guia detalha como adicionar, remover e gerenciar bibliotecas no seu projeto, garantindo compatibilidade entre seu ambiente local e o container Docker.


## 1. Instalação Inicial
Ao clonar o projeto pela primeira vez, instale todas as dependências definidas no `package.json`:

```bash
npm install
```

2. Adicionando Novos Pacotes
Sempre utilize a tag @latest para garantir a versão mais recente e estável.

Para Produção: Bibliotecas que a aplicação precisa para rodar (ex: axios, jwt, swagger).
```bash
npm install <pacote>@latest
```

Para Desenvolvimento: Ferramentas de suporte que não vão para produção (ex: eslint, prettier, @types/).

```bash
npm install <pacote>@latest -D
```

- <mark>Dica</mark>: <b>Para evitar erros de compatibilidade, prefira rodar a instalação dentro do Docker Desktop <img src="https://img.shields.io/badge/Docker_Desktop-3db1ff?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Desktop" height="20"/></b>

3. Tabela de Gerenciamento
Utilize esta tabela como referência rápida para o dia a dia:

Ação: Comando Local	Comando via Docker (api) Instalar Produção	
```bash
npm install <pacote>@latest	
docker compose exec api npm install <pacote> @latest
```
Instalar Dev	
```bash
npm install <pacote>@latest -D	docker compose exec api npm install <pacote>@latest -D
```

Remover Pacote	
```bash
npm uninstall <pacote>	docker compose exec api npm uninstall <pacote>
```

Atualizar Tudo	
```bash
npm update	docker compose exec api npm update
```

Listar Pacotes	
```bash
npm list --depth=0	docker compose exec api npm list --depth=0
```

4. Melhores Práticas
Sincronização: Como configuramos um volume no docker-compose.yml, tudo o que for instalado via Docker será espelhado automaticamente na sua pasta node_modules local.

Versionamento: Sempre realize o commit do arquivo package-lock.json. Ele garante que todos os ambientes tenham as mesmas versões instaladas.

Limpeza (se houver erros): 
```bash
1. docker compose down
2. rm -rf node_modules package-lock.json
3. npm install
4. docker compose up -d
```

Reinicialização: Se a nova biblioteca não for reconhecida, basta reiniciar o container:

```Bash
docker compose restart api
```