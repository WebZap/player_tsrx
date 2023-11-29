import React, {FC, MouseEventHandler} from 'react';
import styled from "styled-components";
import {useClickOutside} from "../../../../hooks/useClickOutside";
import {TPositionType} from "../../../../utilities/helpers";
import {FilterValue} from "../../../../hooks/useSetOwnFilter";

interface FilterMenuProps {
    height?: number | null,
    handleState: (status: boolean) => void,
    filterPoint: TPositionType<any, any>,
    onClickFilter: (filterValue: FilterValue) => void,

}


export interface FilterWrappProps {
    height?: number | null
}

const FilterWrapp = styled.nav<FilterWrappProps>`
  width: 248px;
  height: ${({height}) => height}px;
  background: #313131;
  border-radius: 12px;
  position: absolute;
`

const FilterMenu: FC<FilterMenuProps> = ({height, handleState, filterPoint, onClickFilter}) => {

    const clickHandle = (value: FilterValue) => {
        onClickFilter(value)
    }

    const ref = useClickOutside(handleState)
    return (
        <FilterWrapp ref={ref} height={height}>
            <ul>{filterPoint.map((item) => <li onClick={()=>clickHandle(item)}>{item}</li>)}</ul>
        </FilterWrapp>
    );

};

export default FilterMenu;