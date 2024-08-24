import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjcyMDA5OTMzNGU1ZTFlNTA4ZmVlOTJlYjkyOGMyNyIsIm5iZiI6MTcyNDM5NTA2My42NTU1NjIsInN1YiI6IjY2YzgyYjk5ZDM0ZGNiYjliOTFkM2M1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ad6chE1RFfXP0Xruyb2vt_CPvJnVCIzOg1qS44tVW_A'
      }
})
export default instance;