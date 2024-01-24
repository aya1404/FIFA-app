
//create PlayersList component
import React from 'react';
import players from './players';
import Player from './Player';

const PlayersList = () => {
  return (
    //Display all players by mapping through all the elements in the array of players
    <div className='list'>
      {players.map((player) => <Player player={player}/>)}
    </div>
  )
}

export default PlayersList