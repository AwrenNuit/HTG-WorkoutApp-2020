const express = require('express');
const router = express.Router();

// template from a giphy call
router.get('/:id', (req, res) => {
  const apiKey = process.env.API_KEY;
  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${req.params.id}`)
  .then(response => res.send(response.data))
  .catch(()=>res.sendStatus(500));
});

module.exports = router;