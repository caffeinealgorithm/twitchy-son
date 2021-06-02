import api from './api';

export function fetchStreams(query, limit) {
  return api.get(`search/streams?query=${query}&limit=${limit}`);
}

export function getStream(channelId) {
  return api.get(`streams/${channelId}`);
}
