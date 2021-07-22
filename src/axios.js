import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
    baseURL: 'http://localhost:5001/challenge-603b1/us-central1/api' // api(cloud function) url
});

export default instance;