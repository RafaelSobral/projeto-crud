const express = require('express')
const path = require('path')
const db = require('./database/index')
const routes = require('./routes')

const app = express()

//= CONEXÃO COM O BANCO DE DADOS MONGO ====================
db.connect()

//= DEFININDO O TEMPLATE ENGINE ====================
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//= DEFININDO OS ARQUIVOS PÚBLICOS ====================
app.use(express.static(path.join(__dirname, 'public')))

//= HABILITA SERVER PARA RECEBER DADOS VIA POST (formulário) ====================
app.use(express.urlencoded({ extended: true }))

//= DEFININDO AS ROTAS ====================
app.use('/', routes)

//= ERRO 404 (not found) ====================
app.use((req, res) => { // MIDDLEWARE
  res.send('Página não encontrada!')
})

//= EXECUTANDO O SERVIDOR ====================
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listering on port ${port}`))