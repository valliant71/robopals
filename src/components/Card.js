import React from 'react';
import '../containers/App.css';

const Card = ({name, email, id}) => {
    return (
        <div className='code b tc bg-light-green dib br3 pa3 ma2 bw2 grow shadow-5'>
            <div className='flip-card'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>     
                        <img alt='robotpals' src={`https://robohash.org/${id}?200x200`} />
                        <div>
                            <h2>{name}</h2>
                        </div>             
                    </div>
                    <div className='flip-card-back'>
                        <h1>EMAIL</h1>
                        <p>{email}</p><br></br>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Card;

//TODO:Figure out why i cant connect anything other than name, email to the div