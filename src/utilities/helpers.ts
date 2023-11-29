import _ from "lodash";
import {ITrack} from "../types/tracksTypes";

export const convertTimeToMinutes = (seconds: number): number =>
    Number((seconds / 60).toFixed(2))

export type TPositionType<T, K extends keyof T> = (T[K] | string)[];



export const takePosition = <T, K extends keyof T>(array: T[], position: K) => {
    let newArray = _.uniq(array.map((item) => {
        if (typeof item[position] !== "undefined") {
            if( item[position] != '' && item[position] != '-'){
                return item[position]
            }
        }
    }))
    return newArray.sort().reverse()
}


export const takeEntireObjects = (array: ITrack[], positionFilter: string[]): ITrack[] => {
    return array.filter(((arrayItem: ITrack) => {
        return positionFilter.some((filterElement => {
            return Object.values(arrayItem).some((arrayItemValue: string) => arrayItemValue === filterElement)
        }))
    }))
}



