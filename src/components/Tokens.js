import React from 'react'
import TokenItems from './TokenItems'

const Tokens = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='token-name'>Coins</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
            </div>

            {props.tokens.map(tokens => {
                return (
                    <TokenItems tokens={tokens} key={tokens.id} />
                )
            })}
        </div>
    </div>
  )
}

export default Tokens