async function cryptoArray () {
  const response = await fetch('https://api.coincap.io/v2/assets');
  const data = await response.json();
  return data;
}

async function usdToReal () {
  const response = await fetch(url);
  const data = await response.json();
  const toReal = data.usd.brl;
  return toReal;
}

async function fillList () {
  try{
  const multiplicator = await usdToReal();
  const returnValue = await cryptoArray();
  returnValue.data.forEach((item,index) => {
    if(index < 10){
    const aux = item.priceUsd*multiplicator
    const li = document.createElement('li');
    li.innerHTML = `${item.id} (${item.symbol}): ${aux}` 
    document.getElementById('lista').appendChild(li);
    }
  })
  }
  catch(err){
    alert('Ocorreu um erro. Atualize a página!')
  }
}
const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json' 



window.load = fillList();

