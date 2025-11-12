import axios from 'axios'
const baseURL = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8080/api'
const api = axios.create({ baseURL, withCredentials: true })
export default api
