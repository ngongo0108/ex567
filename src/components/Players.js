import React from 'react'
import {Player} from '../shared/ListOfPlayers'
export default class Players extends React.Component {
    render(){
        return (
            <div className='container'>
            {Player.map((player)=>(
                <div className='column'>
                    <div className='card'> 
                        <img src={player.img} alt=''/>
                        <h3>{player.name}</h3>
                        <p className='title'>{player.club}</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            ))}                
            </div>
        )
}
    }
        