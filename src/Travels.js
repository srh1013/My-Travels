import React from "react";
import Travel from "./Travel";

const travels = [
  {
    destination: "San blas islands",
    country: "Panama",
    distance: "8 200km",
    image: "https://2299ffad223e9e36aabd-5cdac304430aab590b2ccb10819c6bf8.ssl.cf1.rackcdn.com/16-07/san-blas.jpg",
  },
  {
    destination: "San Diego",
    country: "USA",
    distance: "9 300km",
    image: "https://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/SanDiego_Skyline_JohnBahu_1280x642.jpg",
  },
  {
    destination: "Tokyo",
    country: "Japon",
    distance: "10 000km",
    image: "https://media.routard.com/image/39/5/tokyo.1484395.w740.jpg",
  },
  {
    destination: "Rio de Janeiro",
    country: "Brasil",
    distance: "8 800km",
    image: "https://www.legrandbleunosybe.com/wp-content/uploads/2017/09/Rio-de-janeiro.jpg",
  },
  {
    destination: "Blue Bay",
    country: "Mauricius",
    distance: "9 200km",
    image: "http://www.hotelbeachside.com/top-10-most-beautiful-beaches-in-mauritius/images/bluebaybeach1.jpg",
  },

 
];

const Travels = () => travels.map(travel => (
    <Travel destination={travel.destination} country={travel.country} distance={travel.distance} image={travel.image}  />  ));

export default Travels;

