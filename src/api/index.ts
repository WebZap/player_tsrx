import axios, {AxiosInstance} from "axios";


const instance: AxiosInstance = axios.create({
    baseURL: 'https://skypro-music-api.skyeng.tech/catalog/',
});

export default instance
