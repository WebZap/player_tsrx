import React, {FC} from 'react';
import {S} from "../../../styles/styledMain";

const SearchBlock: FC = () => {
    return (
        <S.CenterBlockSearch>
            <S.SearchSvg/>
            <S.SearchText type="text" placeholder="Search..."/>
        </S.CenterBlockSearch>
    );
};

export default SearchBlock;