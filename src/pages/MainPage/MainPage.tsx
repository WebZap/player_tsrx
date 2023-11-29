import React, {FC} from 'react';
import MainSection from "../../components/MainSection/MainSection";
import BarSection from "../../components/BarSection/BarSection";
import {S} from '../../styles/styledMain';
import FooterSection from "../../components/FooterSection/FooterSection";

const MainPage: FC = () => {
    return (
        <S.Wrapper>
            <S.Container>
                <MainSection/>
                <BarSection/>
                <FooterSection/>
            </S.Container>
        </S.Wrapper>
    );
};

export default MainPage;