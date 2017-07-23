require('es6-promise').polyfill();
const express = require('express');
const router = express.Router();
const axios = require('axios');
const baseurl = 'http://swapi.co/api/people/'


router.get('/example', (req, res) => {
  let peopleNums = [1,2,3].map( n => {
    return ( Math.floor( Math.random()*87 ) + 1 )
  });
  let result = [];
  for( let i = 0; i < 3; i++) {
    axios.get(`${baseurl}${peopleNums[i]}/`)
      .then( people => { result.push(people.data)})
      .then( () => {
        if(result.length === 3) { res.json(result) }
      })
      .catch( err => console.log(err))
  }

  // let result = peopleNums.map( num => {
  //   let peopleData = await axios.get(`${baseurl}${num}/`)
  //       // .then( people => { return people.data})
  //       // .catch( err => console.log(err))
  //   console.log(peopleData);
  // })

});


router.get('/search', (req, res) => {
  let { term } = req.query;
  console.log(term);

  // axios.get(`${baseurl}${peopleNums[i]}/`)
  //   .then( people => { result.push(people.data)})
  //   .then( () => {
  //     if(result.length === 3) { res.json(result) }
  //   })
  //   .catch( err => console.log(err))
  // }


});


module.exports = router;
