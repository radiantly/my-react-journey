import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 9qEMk0wBqLdNQ3Lyuq2H-KpJSm3odvyXHkFpsdpDGhc'
  }
})