import React from 'react';
import '../css/searchbox.css';

const Searchbox = ({searchChange}) => {
    return(
        <div className='pa2'>
            <input 
            className='searchbox'
            type='search'
            placeholder='Search Alien'
            onChange={searchChange}
        />
        </div>
    )
}
export default Searchbox;
