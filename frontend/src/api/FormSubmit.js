import axios from 'axios'

const api =  axios.create({
    baseURL: "http://localhost:4000/api/v1/user",
})

export default api;