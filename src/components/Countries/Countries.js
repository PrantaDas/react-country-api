import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response=>response.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h2>Countries Length:{countries.length}</h2>
            {
                countries.map(country=>console.log(country))
            }
            <div  className='countries-container'>
            {
                countries.map(country=><Country country={country} key={country.cca3}></Country>)
            }
            </div>
        </div>
    );
};



export default Countries;