import React, {FC} from 'react';
import {S} from "../../../styles/styledMain";

const NavMenu: FC = () => {
    return (
        <S.MainNav>

            <S.NavLogo>
                <S.LogoImage></S.LogoImage>
            </S.NavLogo>

            <S.NavBurger>
                <S.BurgerLine/>
                <S.BurgerLine/>
                <S.BurgerLine/>
            </S.NavBurger>

            <S.NavMenu>

                <S.MenuList>
                    <S.MenuItem>
                        <S.MenuLink>Home</S.MenuLink>
                    </S.MenuItem>
                    <S.MenuItem>
                        <S.MenuLink>Library</S.MenuLink>
                    </S.MenuItem>
                    <S.MenuItem>
                        <S.MenuLink>Playlist</S.MenuLink>
                    </S.MenuItem>
                </S.MenuList>

            </S.NavMenu>

        </S.MainNav>
    );
};

export default NavMenu;