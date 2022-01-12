// Chuck Norris can write multi-threaded applications with a single thread.

//Pode ser usado dessa forma aqui também com try e catch:

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try { // Utilizamos try e catch para conseguirmos tratar o erro se der algo errado, pois nao temos o .catch mais
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
