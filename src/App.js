import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Tokens from './components/Tokens';
function App() {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

  const [tokens, setTokens] = useState([]);

useEffect(()=>{
  axios.get(url).then((response) => {
    setTokens(response.data)
    console.log(response.data[0])
  }).catch((error) => {
    console.log(error)
  })
}, [])


  return (
    <>
     <Tokens tokens={tokens} />
    </>
  );
}

export default App;
