import axios from "axios";
console.log(process.env.PORT)
export default axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-type": "application/json"
  }
});
