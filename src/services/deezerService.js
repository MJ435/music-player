// src/services/deezerService.js
import axios from 'axios';

const API_BASE_URL = 'https://api.deezer.com';

/**
 * Searches for tracks based on the user's query.
 * @param {string} query - The search query for the track.
 * @returns {Array} - An array of track objects if successful, otherwise an empty array.
 */
export const searchTracks = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search`, {
      params: { q: query },
    });
    return response.data.data; // Return an array of track objects
  } catch (error) {
    console.error(`Error searching for tracks with query "${query}":`, error.message);
    return []; // Return an empty array if there's an error
  }
};

/**
 * Fetches detailed information for a specific track.
 * @param {string} trackId - The ID of the track to fetch.
 * @returns {Object|null} - The track details object if successful, otherwise null.
 */
export const getTrackDetails = async (trackId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/track/${trackId}`);
    return response.data; // Return track details object
  } catch (error) {
    console.error(`Error fetching details for track ID ${trackId}:`, error.message);
    return null; // Return null if there's an error
  }
};
