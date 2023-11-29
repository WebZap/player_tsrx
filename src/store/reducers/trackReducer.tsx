import {
    ActionFetchUsersType,
    ActionGetUsersType,
    ActionsEnums,
    ActionThrowErrorType,
    IiState,
    ITrack,
    UserActionTypes
} from "../../types/tracksTypes";
import {Dispatch} from "redux";
import TrackApi from "../../api/Api/TrackApi";

const initialState: IiState = {
    tracks: [],
    loading: false,
    errors: null,
    // filters: []
}


export const trackReducer = (state = initialState, action: UserActionTypes): IiState => {
    switch (action.type) {
        // case:
        case ActionsEnums.GET_USERS:
            return {
                ...state,
                tracks: action.payload
            }
        case ActionsEnums.FETCH_USERS:
            return {
                ...state,
                loading: action.payload
            }
        case ActionsEnums.THROW_ERROR:
            return {
                ...state,
                errors: action.payload
            }
        // case ActionsEnums.GET_FILTERED_TRACK:
        //     return {
        //         // ...state,
        //         // filters: [...state.filters, action.payload],
        //     }
        //

        default:
            return state
    }
}

export const getUsersTC = () => async (dispatch: Dispatch<UserActionTypes>) => {
    try {
        dispatch(isFetchingUsersAC(true))
        const data = await new TrackApi().getAllTracks();
        dispatch(isFetchingUsersAC(false))
        dispatch(getUsersAC(data))
    } catch (e) {
        dispatch(isFetchingUsersAC(false))
        dispatch(throwFetchErrorAC(`Произошла ошибка: ${e} 🙅`))
    }
}

const getUsersAC = (data: ITrack[]): ActionGetUsersType => {
    return {
        type: ActionsEnums.GET_USERS,
        payload: data
    }
}

const isFetchingUsersAC = (status: boolean): ActionFetchUsersType => {
    return {
        type: ActionsEnums.FETCH_USERS,
        payload: status
    }
}

const throwFetchErrorAC = (error: string): ActionThrowErrorType => {
    return {
        type: ActionsEnums.THROW_ERROR,
        payload: error
    }
}


