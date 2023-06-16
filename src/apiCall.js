import axios from "axios";
import { getToken } from "./localStorageFunction";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
//  Authorization: token
}
let token = getToken();
export const apiCall =  (url, method, data)=> {
 /* if(token) {
    headers.Authorization = `Bearer ${token}`;
  }*/
//axios.defaults.headers = headers;
      return  axios
         [method](url, data)
         .then(function (response) {
         
           return response.data;
         });
  }