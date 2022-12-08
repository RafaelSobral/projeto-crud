const express = require('express')
const path = require('path')
const app = express()

//= DEFININDO O TEMPLATE ENGINE ====================
app.set('view engine', 'ejs')

//= DEFININDO OS ARQUIVOS PÚBLICOS ====================
app.use(express.static(path.join(__dirname, 'public')))

//= HABILITA SERVER PARA RECEBER DADOS VIA POST (formulário) ====================
app.use(express.urlencoded({ extended: true }))

//= DEFININDO ROTAS ====================
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Título Teste'
  })
})

//= ERRO 404 (not found) ====================
app.use((req, res) => { // MIDDLEWARE
  res.send('Página não encontrada!')
})

//= EXECUTANDO O SERVIDOR ====================
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listering on port ${port}`))