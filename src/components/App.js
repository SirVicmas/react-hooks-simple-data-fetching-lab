// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  // Define a state variable to hold the dog image URL
  const [dogImage, setDogImage] = useState('');
  // Define a state variable to track whether data is loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Send a fetch request to the Dog API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the dog image URL
        setDogImage(data.message);
        // Set isLoading to false to indicate that data has been loaded
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []); // The empty dependency array ensures this effect runs only once, like componentDidMount

  return (
    <div>
      <h1>Random Dog Image</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={dogImage} alt="A Random Dog" />
        </div>
      )}
    </div>
  );
}

export default App;

