const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.send('obtener todos los carritos')
})

router.post('/', (req, res)=>{
  res.send('obtener todos los carritos')
})

module.exports = router;