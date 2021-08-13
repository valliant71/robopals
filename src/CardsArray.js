import React from 'react';
import Card from './Card';


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
                    bio={robots[realUser].bio}
                />
            );
        })
        }
        </div>   
    )
}

export default CardsArray;