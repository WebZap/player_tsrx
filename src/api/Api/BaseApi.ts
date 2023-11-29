import instance from "../index";
import {ITrack} from "../../types/tracksTypes";

class BaseApi {
    async getRequest(): Promise<ITrack[]>{
        const response = await instance.get('track/all/')
        console.log(response)
        return response.data
    }

}

export default BaseApi;