import axios from "axios"

export const api = axios.create({
    baseURL: "https://valorant-api.com/v1/",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    }
})