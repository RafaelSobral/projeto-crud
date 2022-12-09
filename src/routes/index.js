
const router = require('express').Router()

//= DEFININDO ROTAS ====================
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Título Teste'
  })
})

module.exports = router