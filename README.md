<div align="center">
  <h1>🔥 TINDEV_API 🔥</h1>
  <p>API backend inspirada no Tinder, para desenvolvedores, construída com Node.js, Express e MongoDB.</p>
  <p>
    <img src="https://img.shields.io/badge/license-MIT-green.svg" />
    <img src="https://img.shields.io/badge/node-%3E%3D10.0.0-brightgreen" />
    <img src="https://img.shields.io/badge/express-4.17.1-blue" />
    <img src="https://img.shields.io/badge/mongoose-5.6.8-blue" />
  </p>
</div>

---

## 📑 Sumário
- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias e Bibliotecas](#tecnologias-e-bibliotecas)
- [Padrões de Projeto](#padrões-de-projeto)
- [Setup e Configuração](#setup-e-configuração)
- [Rotas Principais](#rotas-principais)
- [Modelo de Dados](#modelo-de-dados)
- [Licença](#licença)
- [Autor](#-autor)

---

## 💡 Sobre o Projeto
API para cadastro, listagem, curtidas e não curtidas entre desenvolvedores, utilizando dados do GitHub.

---

## 🚀 Tecnologias e Bibliotecas
- **Node.js**
- **Express**: Framework web para Node.js
- **Mongoose**: ODM para MongoDB
- **MongoDB**: Banco de dados NoSQL
- **Axios**: Requisições HTTP para integração com a API do GitHub
- **dotenv**: Gerenciamento de variáveis de ambiente
- **cors**: Middleware para habilitar CORS
- **nodemon**: Hot reload em desenvolvimento

---

## 🏗️ Padrões de Projeto
- **MVC (Model-View-Controller)**: Separação clara entre modelos (dados), controllers (lógica de negócio) e rotas (interface HTTP).
- **Modularização**: Cada responsabilidade em seu arquivo (controllers, models, rotas).

---

## ⚙️ Setup e Configuração
1. **Clone o repositório:**
   ```bash
   git clone <repo_url>
   cd TINDEV_api
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto com:
   ```env
   PRD_PORT=3333
   String_db=mongodb://localhost:27017/tindev
   ```
4. **Inicie o servidor:**
   ```bash
   node init.js
   # ou, para desenvolvimento:
   npx nodemon init.js
   ```

---

## 📡 Rotas Principais
| Método | Rota                        | Descrição                        |
|--------|-----------------------------|----------------------------------|
| GET    | `/devs`                     | Lista devs para interação        |
| POST   | `/devs`                     | Cadastra dev via username GitHub |
| POST   | `/devs/:devId/likes`        | Dá like em outro dev             |
| POST   | `/devs/:devId/dislikes`     | Dá dislike em outro dev          |

---

## 🗃️ Modelo de Dados
```js
Dev {
  name: String,      // Nome do dev
  user: String,      // Username do GitHub
  bio: String,       // Bio do GitHub
  avatar: String,    // URL do avatar
  likes: [ObjectId], // Devs curtidos
  dislikes: [ObjectId], // Devs não curtidos
  timestamps: true
}
```

---

## 📝 Licença
MIT

---
## 👤 Autor
by **Rodolfo M. F. Abreu**
<p align="center">
  <sub>Desenvolvido para o desafio GoStack 🚀</sub>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Feito%20com%20%E2%9D%A4%20por-Rocketseat-blueviolet" />
</p>


