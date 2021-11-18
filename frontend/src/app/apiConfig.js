import axios from 'axios';
import { API_URL } from '../config/routes';

export default axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    }
})