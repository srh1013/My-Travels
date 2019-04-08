import React from "react";
import Travel from "./Travel"

const myBestravels = [
    {
    destination='Panama'
    country='San Blas Island'
    image='https://2299ffad223e9e36aabd-5cdac304430aab590b2ccb10819c6bf8.ssl.cf1.rackcdn.com/16-07/san-blas.jpg'
    distance='8 250Km'
  },
    {
    destination='USA'
    country='San Diego'
    image='https://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/SanDiego_Skyline_JohnBahu_1280x642.jpg'
    distance='9 315 Km'
  },  
  {
    destination='Mauricius'
    country='Blue Bay'
    image='http://www.hotelbeachside.com/top-10-most-beautiful-beaches-in-mauritius/images/bluebaybeach1.jpg'
    distance='9 287 Km'
  },  
     {
    destination="Rio de Janeiro"
    country="Brésil" 
    image="https://www.legrandbleunosybe.com/wp-content/uploads/2017/09/Rio-de-janeiro.jpg"    
    distance="8 869 km"
  },  
    {
    destination="Tokyo"
    country="Japon"
    image="https://media.routard.com/image/39/5/tokyo.1484395.w740.jpg"
    distance="10 084 km"
  },
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel  destination={travel.destination} country={travel.country} image={travel.image} distance={travel.distance} />
    ))}
  </div>
);

export default Travels;

        
