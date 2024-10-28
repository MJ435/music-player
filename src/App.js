import React, { useState } from 'react';
import { searchTracks, getTrackDetails } from './services/deezerService';
import PlayerControls from './components/PlayerControls';
import TrackDetails from './components/TrackDetails';
import SearchBar from './components/SearchBar';

function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSearch = async (query) => {
    const results = await searchTracks(query);
    setTracks(results);
    if (results.length > 0) {
      const firstTrack = await getTrackDetails(results[0].id);
      setCurrentTrack(firstTrack);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = async () => {
    const currentIndex = tracks.findIndex((track) => track.id === currentTrack.id);
    const nextTrack = tracks[(currentIndex + 1) % tracks.length];
    const details = await getTrackDetails(nextTrack.id);
    setCurrentTrack(details);
  };

  const handlePrevious = async () => {
    const currentIndex = tracks.findIndex((track) => track.id === currentTrack.id);
    const prevTrack = tracks[(currentIndex - 1 + tracks.length) % tracks.length];
    const details = await getTrackDetails(prevTrack.id);
    setCurrentTrack(details);
  };

  return (
    <div className="app">
      <h1>Music Player</h1>
      <SearchBar onSearch={handleSearch} />
      <TrackDetails track={currentTrack} />
      <PlayerControls
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
}

export default App;
