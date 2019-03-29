import Travel from './Travel'
import React, {Component} from 'react';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>My Best Road Trip</h1>
        </header>
        <Travel
          destination='Panama'
          country='San Blas Island'
          image='https://2299ffad223e9e36aabd-5cdac304430aab590b2ccb10819c6bf8.ssl.cf1.rackcdn.com/16-07/san-blas.jpg'
          distance='8 250Km'
        />
        <Travel
          destination='USA'
          country='San Diego'
          image='https://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/SanDiego_Skyline_JohnBahu_1280x642.jpg'
          distance='9 315 Km'
        />
        <Travel
          destination='Mauricius'
          country='Blue Bay'
          image='http://www.hotelbeachside.com/top-10-most-beautiful-beaches-in-mauritius/images/bluebaybeach1.jpg'
          distance='9 287 Km'
        />
      </div>
    )
  }
}

export default App
