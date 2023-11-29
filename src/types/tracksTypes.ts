import FilterSection from "../components/MainSection/MenuFilter/FilterSection/FilterSection";
import React from "react";

export const enum ActionsEnums {
    GET_USERS = 'GET_USERS',
    FETCH_USERS = 'FETCH_USERS',
    THROW_ERROR = 'THROW_ERROR',
    GET_FILTERED_TRACK = "GET_FILTERED_TRACK"
}
export const enum FiltersEnums {
    GENRE = "genre",
    PERFORMER = "performer",
    YEAR = "year"
}

export const enum FilterPointEnums {
    PERFORMER = "author",
    GENRE = "genre",
    YEAR = "release_date"
}

export interface IiState {
    tracks : ITrack[],
    loading: boolean
    errors: null | string,
    // filters: string[],
}

export interface IStaredU {
    id: number,
    username: string,
    first_name: string,
    email: string
}
export interface ITrack {
    id: number,
    name: string,
    author: string,
    genre: string,
    release_date: string,
    duration_in_seconds: number,
    album: string
    logo: string | null,
    track_file: string,
    stared_user: IStaredU[]
}


export interface ActionGetUsersType {
    type: ActionsEnums.GET_USERS,
    payload: ITrack[]
}

export interface ActionFetchUsersType {
    type: ActionsEnums.FETCH_USERS,
    payload: boolean
}

export interface ActionThrowErrorType {
    type: ActionsEnums.THROW_ERROR,
    payload: string
}

export interface ActionGetFilteredTrack {
    type: ActionsEnums.GET_FILTERED_TRACK,
    payload: string
}

export type UserActionTypes = ActionGetUsersType | ActionFetchUsersType | ActionThrowErrorType | ActionGetFilteredTrack



