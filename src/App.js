import React, { useEffect, useState } from 'react';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [color, setColor] = useState('#DDD');

  useEffect(() => {
    fetchPictures(10);
  }, []);

  async function fetchPictures(count) {
    const response = await API.post('shibaapi', '/pictures', { body: { number: count } });
    setPictures(response.data);
  }

  const renderPics = (pictures) => (pictures && pictures.map((el, idx) => (
    <div key={idx}><img src={el} alt='Shibe' title='Shibe' /></div>)));

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    document.body.style.backgroundColor = color;
  });

  return <>
    <h2>useEffect</h2>
    <button onClick={() => setColor(getRandomColor())}>Change Background</button>
    <button onClick={() => fetchPictures(10)}>Fetch More</button>
    <div className='images-container'>
      {renderPics(pictures)}
    </div>
  </>
};

export default App;
