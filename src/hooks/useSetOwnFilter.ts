import {useCallback, useState} from "react";

export type FilterType = string[]
export type FilterValue = string


const useSetOwnFilter = (initialState: FilterType) => {
    const [state, setState] = useState<FilterType>(initialState)
    const setFilter = useCallback((filterValue: FilterValue) => {
        return setState((prevState: FilterType) => prevState.includes(filterValue) ?
            prevState.filter(item => item != filterValue) : [...prevState, filterValue]
        )
    }, [state])
    console.log(state)
    return {state, setFilter}
}

export default useSetOwnFilter