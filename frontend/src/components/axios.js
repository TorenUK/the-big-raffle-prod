import axios from "axios";

const instance = axios.create({
  baseURL: "https://tbr-prod.herokuapp.com/",
});

export default instance;
