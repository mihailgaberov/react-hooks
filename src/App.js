import React, { useEffect, useState } from 'react';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);

/*
* If a function doesn’t use anything from the component scope,
* you can hoist it outside the component and then freely use it inside your effects
* */

async function fetchPictures(count) {
  const response = await API.post('shibaapi', '/pictures', { body: { number: count } });
  return response.data;
}

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [color, setColor] = useState('#DDD');

  useEffect(() => {
    fetchPictures(10).then(setPictures);
  }, []);


  // Separate effects for achieving Separation of Concerns
  useEffect(() => {
    document.body.style.backgroundColor = color;
  });

  const renderPics = (pictures) => (pictures && pictures.map((el, idx) => (
    <div key={idx}><img src={el} alt='Shibe' title='Shibe' /></div>)));

  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return <>
    <h2>useState() & useEffect()</h2>
    <button onClick={() => setColor(getRandomColor())}>Change Background</button>
    <button onClick={() => fetchPictures(10)}>Fetch More</button>
    <div className='images-container'>
      {renderPics(pictures)}
    </div>
  </>
};

export default App;
