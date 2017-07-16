const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/all', (req, res) => {
  axios.get('http://swapi.co/api/people/1')
    .then( allpeople => { res.json(allpeople.data) })
    .catch( err => console.log(err))
});


module.exports = router;
