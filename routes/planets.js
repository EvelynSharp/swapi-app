const express = require('express');
const router = express.Router();
const axios = require('axios');
const baseurl = 'http://swapi.co/api/planets/'


router.get('/search/:id', (req, res) => {
  axios.get(`${baseurl}${req.params.id}/`)
    .then( planet => res.json(planet.data ))
    .catch( err => console.log(err))
})



module.exports = router;
