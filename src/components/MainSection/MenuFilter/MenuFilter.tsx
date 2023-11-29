import React, {FC, useState} from 'react';
import {S} from "../../../styles/styledMain";
import FilterSection from "./FilterSection/FilterSection";
import {FilterPointEnums, FiltersEnums} from "../../../types/tracksTypes";
import {useSelectorTyped} from "../../../hooks/useSelectorTyped";
import {takePosition} from "../../../utilities/helpers";
import useSetOwnFilter from "../../../hooks/useSetOwnFilter";

const MenuFilter: FC = () => {
    const [activeFilter, setActive] = useState<null | string | boolean>(null);
    const {state, setFilter} = useSetOwnFilter([]);
    const {tracks} = useSelectorTyped(state => state.tracks);
    const performers = takePosition(tracks, FilterPointEnums.PERFORMER);
    let years = takePosition(tracks,FilterPointEnums.YEAR);
    const genre = takePosition(tracks, FilterPointEnums.GENRE);
    

    console.log(performers)


    const selectFilter = (filterType: string) => {
        if (filterType === activeFilter) {
            return setActive(null)
        }
        setActive(filterType)
    }
    const handleState = (status: boolean) => {
        setActive(status)
    }


    return (
        <S.CenterBlockFilter>
            <S.FilterTitle>Filter:</S.FilterTitle>
            <FilterSection
                onClickFilter={setFilter}
                filterPoint={years}
                filter_name={FiltersEnums.YEAR}
                height_filter={305}
                isOpen={activeFilter === FiltersEnums.YEAR}
                onClickBtn={() => selectFilter(FiltersEnums.YEAR)}
                handleState={handleState}
            />
            <FilterSection
                onClickFilter={setFilter}
                filterPoint={performers}
                filter_name={FiltersEnums.PERFORMER}
                isOpen={activeFilter === FiltersEnums.PERFORMER}
                onClickBtn={() => selectFilter(FiltersEnums.PERFORMER)}
                handleState={handleState}
            />
            <FilterSection
                onClickFilter={setFilter}
                filterPoint={genre}
                filter_name={FiltersEnums.GENRE}
                isOpen={activeFilter === FiltersEnums.GENRE}
                onClickBtn={() => selectFilter(FiltersEnums.GENRE)}
                handleState={handleState}
            />
        </S.CenterBlockFilter>
    );
};

export default MenuFilter;