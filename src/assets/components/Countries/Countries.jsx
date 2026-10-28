import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const countries = use(countriesPromise);
    // console.log(countries);

    const handlevisitedCountries = (country) => {
        console.log('Handled', country);
    }

    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Countries Visited: </h3>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handlevisitedCountries={handlevisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;