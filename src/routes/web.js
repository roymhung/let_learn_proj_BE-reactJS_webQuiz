const express = require('express');
const router = express.Router();






router.get('/', (req, res) => {
  res.send('Hello World! vs nodemon hahah' )
})

router.get('/abc', (req, res) => {
  res.send('Check ABC')
})

router.get('/royhung', (req, res) => {
  res.render('sample.ejs')
})

module.exports = router; // export default