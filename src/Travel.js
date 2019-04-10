
import React from "react";

<<<<<<< HEAD
const Travel = props => (
  <figure>
    <img src={props.image} alt={props.character} />
    <figcaption>
      <blockquote>{props.destination}</blockquote>
      <p>{props.country}</p>
      <p>{props.distance}</p>
    </figcaption>
  </figure>
);

=======
const Travel = ({destination, country, image, distance}) => (
      <figcaption>
      <img src={image} alt={country}/>
        <blockquote>
        {destination}
        <h1>{country}</h1>
        <h3>{distance}</h3>
        </blockquote>
      </figcaption>
    
  );
>>>>>>> 909dd75e4aa4a9a1e949f1688b0585a2a73e21e8
export default Travel;
