import axios from "axios";

const apiKey = import.meta.env.VITE_RAPID_API_KEY;

const baseURL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${baseURL}/${url}`, options);

  return data;
};
