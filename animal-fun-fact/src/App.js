import { animals } from './animals';
import React from 'react';
import image from './images/ocean.jpeg'
const title = "";
// setting the background of the 
const background = <img className='background' alt='ocean' src={image} />;
const images = [];
// display function
const displayFact = (e) => {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionalIndex = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[optionalIndex];
  document.getElementById('fact').innerHTML = funFact;
}
for (const animal in animals) {
  images.push(<img className='animal' alt={animal} onClick={displayFact} src={animals[animal].image} aria-label={animal} role='button' key={animal} />)
};

// making the images list to show on the document

const showBackground = true;


export const animalFacts =
  (
    <div>
      <h1>{title === '' ? 'Click an animal for a fun fact!' : title}</h1>
      {showBackground && background}
      <p id='fact'></p>
      <div className='animals'>
        {images}
      </div>
    </div>
  );

//ReactDOM.render(animalFacts, document.getElementById("root"));
//export default animalFacts;