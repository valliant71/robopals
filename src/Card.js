import React from 'react';
import './App.css';

const Card = ({name, email, id, bio}) => {
    return (
        <div className='code b tc bg-light-green dib br3 pa3 ma2 bw2 grow shadow-5'>
            <div class='flip-card'>
                <div class='flip-card-inner'>
                    <div class='flip-card-front'>     
                        <img alt='robotpals' src={`https://robohash.org/${id}?200x200`} />
                        <div>
                            <h2>{name}</h2>
                        </div>             
                    </div>
                    <div class='flip-card-back'>
                        <h1>EMAIL</h1>
                        <p>{email}</p><br></br>
                        <h1>BIO</h1>
                        <p>{bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Card;