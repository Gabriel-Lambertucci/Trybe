const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

/* 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA */

// Adicione o código do exercício aqui:

function formatedBookNames(array) {
  // escreva seu código aqui
  let newArray = [];
  newArray =  array.map(item =>`${item.name} - ${item.genre} - ${item.author.name}`)
  return newArray;
}

console.log(formatedBookNames(books));

/* 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado. */

function nameAndAge(array) {
  // escreva seu código aqui
  let newArray = [];
  newArray = array.map( (item) => { 
  let object = {};
  object.age = item.releaseYear - item.author.birthYear; 
  object.author = item.author.name;
  return object;
  })
  newArray.sort((a,b) => a.age - b.age);
  return newArray;
}

console.log(nameAndAge(books))

/* 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
 */

function fantasyOrScienceFiction(array) {
  // escreva seu código aqui
  let newArray = [];
  newArray = array.filter( (item) => item.genre == 'Fantasia' || item.genre == 'Ficção Científica'  )
  return newArray;
}

console.log(fantasyOrScienceFiction(books))

/* 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho */

function oldBooksOrdered(array) {
  // escreva seu código aqui
  let newArray = [];
  newArray = array.filter(item => item.releaseYear < 1961)
  newArray.sort((a,b) => a.releaseYear - b.releaseYear);
  return newArray;
}

console.log(oldBooksOrdered(books))

/* 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia. */

function fantasyOrScienceFictionAuthors(array) {
  // escreva seu código aqui
  let newArray = [];
  newArray = array.filter(item => item.genre == 'Fantasia' || item.genre == 'Ficção Científica')
  newArray = newArray.map(item => item.author.name)
  newArray.sort();
  return newArray;
}

console.log(fantasyOrScienceFictionAuthors(books))

/* 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação. */

function oldBooks(array) {
  // escreva seu código aqui
  let newArray = [];
  newArray = array.filter(item => item.releaseYear < 1961)
  newArray = newArray.map(item => item.name)
  return newArray;
}

console.log(oldBooks(books));

/* 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais. */

function authorWith3DotsOnName(array) {
  // escreva seu código aqui
  let newArray = [];
  newArray = array.filter(item => item.author.name[1] == '.' && item.author.name[4] == '.' && item.author.name[7] == '.')
  newArray = newArray.map(item => item.name)
  return newArray;
}

console.log(authorWith3DotsOnName(books))
