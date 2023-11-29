import React, {FC} from 'react';
import {S} from "../../../styles/styledMain";

const SidebarContent: FC = () => {
    return (
        <S.MainSidebar><S.Sidebar>
            <S.PersonalInfo>
                <S.PersonalName>Sergey.Ivanov</S.PersonalName>
                <S.SidebarIcon>
                    <svg>
                        <use xlinkHref="img/icon/sprite.svg#logout"></use>
                    </svg>
                </S.SidebarIcon>
            </S.PersonalInfo>
            <S.SidebarBlock>
                <S.SidebarList>
                    <S.SidebarItem>
                        <S.SidebarLink href="#">
                            <S.SidebarImg src="img/playlist01.png" alt="day's playlist"/>
                        </S.SidebarLink>
                    </S.SidebarItem>
                    <S.SidebarItem>
                        <S.SidebarLink href="#">
                            <S.SidebarImg src="img/playlist02.png" alt="day's playlist"/>
                        </S.SidebarLink>
                    </S.SidebarItem>
                    <S.SidebarItem>
                        <S.SidebarLink href="#">
                            <S.SidebarImg src="img/playlist03.png" alt="day's playlist"/>
                        </S.SidebarLink>
                    </S.SidebarItem>
                    {/* Добавьте остальные элементы здесь */}
                </S.SidebarList>
            </S.SidebarBlock>
        </S.Sidebar></S.MainSidebar>
    );
};

export default SidebarContent;