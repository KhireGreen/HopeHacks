const fetch = require('node-fetch');

const url = 'https://edamam-recipe-search.p.rapidapi.com/search?q=chicken';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '215a75a4camsha0ff3e5e6780e52p112e28jsnf7f387c682a8',
    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));



//SERVER



