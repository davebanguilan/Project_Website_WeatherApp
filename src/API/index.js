import axios from "axios";

const { REACT_APP_API } = process.env;

const URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      appid: `${REACT_APP_API}`,
      units: "metric",
    },
  });

  return data;
};
