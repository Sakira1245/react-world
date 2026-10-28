import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, handlevisitedCountries }) => {
    console.log(country.name.common);

    const [visited, setVisited] = useState(false);

    const handleClicked = () => {
        // console.log(handleClicked);
        if (visited) {
            setVisited(false)
        }
        else {
            setVisited(true);
        }

        // another way
        // setVisited(visited ? false : true);

        handlevisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleClicked}>{
                visited ? "Visited" : "Not Visited"
            }</button>
        </div>
    );
};

export default Country;

// we can use css in react application in 4 ways
// inline css (style object)
// 