import React from 'react'

const TokenItems = (props) => {
  return (
    <div className='token-row'>
        <p>{props.tokens.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.tokens.image} alt='coins' />
            <p>{props.tokens.symbol}</p>
        </div>
        <p>{props.tokens.current_price}</p>
        <p>{props.tokens.price_change_percentage_24h}</p>
        <p className='hide-mobile'>{props.tokens.current_total_volume}</p>
        <p className='hide-mobile'>{props.tokens.market_cap}</p>
    </div>
  )
}

export default TokenItems