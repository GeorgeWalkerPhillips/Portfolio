import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken("your-access-token-here");

const CLIENT_ID = "d5b0fef487f24e41be38468b1b821352";
const REDIRECT_URI = "http://localhost:3001/#hero";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

function NowPlaying() {
  
  const [accessToken, setAccessToken] = useState('');
  const [track, setTrack] = useState(null);

  const getAccessToken = async () => {
    // Your code to retrieve the access token
    const response = await fetch('YOUR_TOKEN_ENDPOINT');
    const data = await response.json();
    setAccessToken(data.access_token);
  };

  const getTrack = async () => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.searchTracks('genre:pop');
    const randomIndex = Math.floor(Math.random() * result.tracks.items.length);
    const track = result.tracks.items[randomIndex];
    setTrack(track);
  };

  useEffect(() => {
    getAccessToken();
  }, []);
  
    return (
      <>
        <button onClick={getTrack}>Get Track</button>
            {track && (
              <div>
                <h2>{track.name}</h2>
                <p>{track.artists[0].name}</p>
                <img src={track.album.images[0].url} alt={track.album.name} />
              </div>
            )}
      </>
    );
  }

export default NowPlaying