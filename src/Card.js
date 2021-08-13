import React from 'react';
import './App.css';

const Card = ({name, email, id}) => {
    return (
        //styles are from tachyon node that we installed and docs are here: https://tachyons.io/
        <div className='code b tc bg-light-green dib br3 pa3 ma2 bw2 grow shadow-5'>
            <div class='flip-card'>
                <div class='flip-card-inner'>
                    <div class='flip-card-front'>     
                        {/* have to use backticks here */}
                        <img alt='robotpals' src={`https://robohash.org/${id}?200x200`} />
                        <div>
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>             
                    </div>
                    <div class='flip-card-back'>
                        <h1>Hi this is the title</h1>
                        <p>This is a message</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Card;