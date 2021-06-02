import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.twitch.tv/kraken/',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': process.env.REACT_APP_CLIENT_ID
  }
});
