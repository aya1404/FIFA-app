
//create the Player component

import React from 'react';
//import a boostrap card
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Player = ({player}) => {
    return (

    //De-structure the attributes for the Player component.    
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={player.image} style={{height:250}}/>
            <Card.Body>
                <Card.Title style={{color:"blue"}}>{player.name}</Card.Title>
                <Card.Text>
                <h6>{`He is ${player.age} years old. He is a ${player.nationality} international 
                footballer playing as a center forward for ${player.team}.
                His jersey number is ${player.jerseyNumber}.`}</h6>
                </Card.Text>
                <Button variant="primary">Know more</Button>
            </Card.Body>
        </Card>
    )
}
Player.defaultProps={
    name: "football player",
    team:" Al-Sadd SC",
    nationality:"Algerian",
    age: 29,
    jerseyNumber:11,
    image: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQm6LDVdjwNTDWxIl8I1RyCr1Lt5LhAGZKu8nEUPjzx7Ab1yOlQxLGwChZnD0NXLsrZ"
}

export default Player