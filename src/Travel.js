
import React from "react";

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

export default Travel;
