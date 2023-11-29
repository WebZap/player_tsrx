import BaseApi from "./BaseApi";
import {ITrack} from "../../types/tracksTypes";

class TrackApi extends BaseApi {
    getAllTracks():Promise<ITrack[]> {
        return this.getRequest()
    };
}

export default TrackApi;