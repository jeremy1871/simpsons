import React, { useState } from "react";
import './App.css';
import DisplaySimpsons from './components/Quotes.js';
import axios from 'axios';

const sampleSimpsons = {
    character: 'Comic Book Guy',
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970",
    quote: "Last night's 'Itchy and Scratchy' was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world.",
    }

function App() {
  const [simpsons, setSimpsons] = useState(sampleSimpsons);
  const getSimpsons = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((quotes) => quotes.data)
       // Use this data to update the state
      .then((data) => {
        console.log(data);
        setSimpsons(data[0]);
        
      });
  };
  

  return (
    <div className='App'>
      <DisplaySimpsons simpsons={simpsons} />
      <button type="button" onClick={getSimpsons}>Get simpsons</button>
    </div>
  );
}

export default App;
