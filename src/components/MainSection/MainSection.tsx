import React, {FC} from 'react';
import {S} from '../../styles/styledMain';
import NavMenu from "./NavMenu/NavMenu";
import MenuFilter from "./MenuFilter/MenuFilter";
import TrackContent from "./TrackContent/TrackContent";
import SearchBlock from "./SearchBlock/SearchBlock";
import SidebarContent from "./SidebarContent/SidebarContent";
import TrackContentContainer from "./TrackContent/TrackContentContainer";


const MainSection: FC = () => {
    return (
        <S.Main>
            <NavMenu/>
            <S.MainCenterBlock>
                <SearchBlock/>
                <S.CenterBlockH2>Main Heading</S.CenterBlockH2>
                <MenuFilter/>
                <TrackContentContainer/>
            </S.MainCenterBlock>
            <SidebarContent/>
        </S.Main>
    );
};

export default MainSection;