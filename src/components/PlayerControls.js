import React from 'react';

const PlayerControls = ({ isPlaying, onPlayPause, onNext, onPrev }) => (
  <div className="player-controls">
    <button onClick={onPrev}>Prev</button>
    <button onClick={onPlayPause}>
        {isPlaying ? 'Pause' : 'Play'}</button>
    <button onClick={onNext}>Next</button>
  </div>
);

export default PlayerControls;
