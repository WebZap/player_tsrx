import React, {FC} from 'react';
import {S} from "../../../../styles/styledMain";
import FilterMenu from "../FilterMenu/FilterMenu";
import styled from "styled-components";
import {TPositionType} from "../../../../utilities/helpers";
import {FilterValue} from "../../../../hooks/useSetOwnFilter";

interface FilterProps {
    filter_name: string,
    height_filter?: number,
    isOpen: boolean,
    onClickBtn: () => void
    handleState: (status: boolean) => void,
    filterPoint: TPositionType<any, any>,
    onClickFilter: (filterValue: FilterValue) => void,


}

const WrappSection = styled.div`
  position: relative;
`

const FilterSection: FC<FilterProps> = ({filter_name, height_filter = 205, isOpen,onClickBtn, handleState,filterPoint,onClickFilter}) => {
    return (
        <WrappSection>
            <S.FilterButton  onClick={onClickBtn}>{filter_name}</S.FilterButton>
            {isOpen && <FilterMenu onClickFilter={onClickFilter}  handleState={handleState}  height={height_filter} filterPoint={filterPoint}/>}
        </WrappSection>
    );
};

export default FilterSection;