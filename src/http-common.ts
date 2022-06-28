import axios from "axios";
export default axios.create({
  baseURL: "https://nhl-odds.azurewebsites.net/api/",
  headers: {
    "Content-type": "application/json"
  }
});
