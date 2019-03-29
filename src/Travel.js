
import React from 'react';

const Quote = ({destination, country, image, distance}) => (
      <figcaption>
      <img src={image} alt={country}/>
        <blockquote>
        {destination}
        <h1>{country}</h1>
        <h3>{distance}</h3>
        </blockquote>
      </figcaption>
    
  );
export default Quote;
