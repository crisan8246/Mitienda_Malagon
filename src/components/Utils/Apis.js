import axios from "axios";

const Apis = axios.create({
    baseURL:"https://fakestoreapi.com",
    params: {
        api_key: "miApiKey",
        page: 1,
        language: "en_US"
    }
  

})

export { Apis }
