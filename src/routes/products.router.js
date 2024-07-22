const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.send('se obtiene todos los productos')
})

router.get('/:pid', (req, res)=>{
  res.send('se obtiene un prodcuto en específico')
})

router.post('/', (req, res)=>{
  res.send('se obtiene un prodcuto en específico')
})

module.exports = router;