import axios from 'axios'; 

export function fetchPhotos() {
  return axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      return response; 
    })
    .catch((error) => {
      console.log(error);
    }); 
}