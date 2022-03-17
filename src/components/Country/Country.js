import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props.country);
    const {name,area,population,region,flags}=props.country;
    return (
        <div className='country'>
            <h1>Country Name:{name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p>Region:{region}</p>
        </div>
    );
};

export default Country;