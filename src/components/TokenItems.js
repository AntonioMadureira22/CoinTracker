import React from 'react'
import './Tokens.css'

const TokenItems = (props) => {
  return (
    <div className='token-row'>
        <p>{props.tokens.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.tokens.image} alt='coins' />
            <p>{props.tokens.symbol.toUpperCase()}</p>
        </div>
        <p>${props.tokens.current_price.toLocaleString()}</p>
        <p>{props.tokens.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hide-mobile'>${props.tokens.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>${props.tokens.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default TokenItems