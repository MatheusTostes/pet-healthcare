import axios from 'axios';

// get base url from .env file

const baseURL = 'http://localhost:3000';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
