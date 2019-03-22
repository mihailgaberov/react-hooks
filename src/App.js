import React, { useEffect, useState } from 'react';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);

/*
* If a function doesn’t use anything from the component scope,
* you can hoist it outside the component and then freely use it inside your effects
*
/* A custom hooks for fetching `count` images */
function usePictures(count) {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    async function fetchPictures() {
      const response = await API.post('shibaapi', '/pictures', { body: { number: count } });
      setPictures(response.data);
    }

    fetchPictures(10);
  }, []);

  return pictures;
}

const App = () => {
  const [color, setColor] = useState('#DDD');
  const pictures = usePictures(10);

  // Separate effects for achieving Separation of Concerns
  useEffect(() => {
    document.body.style.backgroundColor = color;
  });

  const renderPics = (pictures) => (pictures && pictures.map((el, idx) => (
    <div key={idx}><img src={el} alt='Shibe' title='Shibe' /></div>)));

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return <>
    <button onClick={() => setColor(getRandomColor())}>Change Background</button>
    <div className='images-container'>
      {renderPics(pictures)}
    </div>
  </>
};

export default App;
