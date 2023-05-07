import React from 'react';
import clip from './music/stay-retro-124958.mp3';
import './Music.css';

function Music() {
  return (
    <div>
      <audio src={clip} controls autoPlay loop volume={0.1}/>
    </div>
  );
}

export default Music;