import React from 'react';

function TrackDetails({ track }) {
  if (!track) return null;

  return (
    <div className="track-details">
      <img src={track.album.cover} alt={`${track.title} album cover`} />
      <h2>{track.title}</h2>
      <p>{track.artist.name}</p>
    </div>
  );
}

export default TrackDetails;
