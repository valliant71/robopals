import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
            //from tachyons
            className='pa2 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='Search for your pals' 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;