import React from 'react';
import Card from './Card';

// .map here is used aas a forEach loop. This is looping through our list in robots.js
// add more to robots.js to have more cards or robots
const CardsArray = ({robots}) => {
    return (
        <div>
        {
            robots.map((user, realUser) => {
                return (
                    <Card
                    key={realUser}
                    id={robots[realUser].id} 
                    name={robots[realUser].name} 
                    email={robots[realUser].email}
                />
            );
        })
        }
        </div>   
    )
}

export default CardsArray;