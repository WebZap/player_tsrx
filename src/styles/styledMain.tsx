import styled from 'styled-components';

export namespace S {

    export const Wrapper = styled.div`
      width: 100%;
      min-height: 100%;
      overflow: hidden;
      background-color: #383838;
    `;

    export const Container = styled.div`
      max-width: 1920px;
      height: 100vh;
      margin: 0 auto;
      position: relative;
      background-color: #181818;
    `;

    export const ButtonText = styled.div`
      border-color: #d9b6ff;
      color: #d9b6ff;
      cursor: pointer;

      &:active {
        border-color: #ad61ff;
        color: #ad61ff;
      }
    `;

    export const ButtonIcon = styled.div`
      svg {
        fill: transparent;
        stroke: #acacac;
      }

      &:active svg {
        fill: transparent;
        stroke: #ffffff;
      }

      .track-play__like-svg,
      .track-play__dislike-svg {
        fill: #696969;
        stroke: #ffffff;
      }
    `;

// MainSection Section
    export const Main = styled.div`
      flex: 1 1 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    `;

    export const MainNav = styled.div`
      width: 244px;
      background-color: #181818;
      padding: 20px 0 20px 36px;
    `;

    export const MainCenterBlock = styled.div`
      flex-grow: 3;
      padding: 20px 40px 20px 111px;
    `;

    export const MainSidebar = styled.div`
      max-width: 418px;
      padding: 20px 90px 20px 78px;
    `;

// Navigation
    export const NavLogo = styled.div`
      width: 113.33px;
      height: 43px;
      padding: 13px 0 13px 0;
      background-color: transparent;
      margin-bottom: 20px;
    `;

    export const NavBurger = styled.div`
      width: 20px;
      height: 36px;
      padding: 13px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `;

    export const NavMenu = styled.div`
      display: block;
      visibility: visible;
    `;

    export const LogoImage = styled.div`
      width: 113.33px;
      height: 17px;
      object-fit: fill;
      background-size: contain;
      background-image: url("/img/logo.png");
    `;

    export const BurgerLine = styled.div`
      display: inline-block;
      width: 100%;
      height: 1px;
      background-color: #d3d3d3;
    `;

    export const MenuList = styled.div`
      padding: 18px 0 10px 0;
    `;

    export const MenuItem = styled.div`
      padding: 5px 0;
      margin-bottom: 16px;
    `;

    export const MenuLink = styled.div`
      color: #ffffff;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    `;

    export const CenterBlockSearch = styled.div`
      width: 100%;
      border-bottom: 1px solid #4e4e4e;
      margin-bottom: 51px;
      display: flex;
      align-items: center;
    `

    export const CenterBlockH2 = styled.h2`
      font-style: normal;
      font-weight: 400;
      font-size: 64px;
      line-height: 72px;
      letter-spacing: -0.8px;
      margin-bottom: 45px;
    `;

    export const CenterBlockFilter = styled.div`
      display: flex;
      align-items: center;
      margin-bottom: 51px;
    `;
    export const CenterBlockContent = styled.div`
      display: flex;
      flex-direction: column;
    `;
    export const SearchSvg = styled.div`
      width: 17px;
      height: 17px;
      margin-right: 5px;
      stroke: #ffffff;
      fill: transparent;
      background-image: url("/img/icon/search.svg");
      background-size: cover;
      cursor: pointer;
    `;
    export const SearchText = styled.input`
      flex-grow: 100;
      background-color: transparent;
      border: none;
      padding: 13px 10px 14px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      &::placeholder {
        background-color: transparent;
        color: #ffffff;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    `;
    export const FilterTitle = styled.div`
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin-right: 15px;
    `;
    export const FilterButton = styled.div`
      cursor: pointer;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      border: 1px solid #ffffff;
      border-radius: 60px;
      padding: 6px 20px;
      &:not(:last-child) {
        margin-right: 10px;
      }
    `;
    export const Sidebar = styled.div`
      max-width: 418px;
      padding: 20px 90px 20px 78px;
    `;

    export const PersonalInfo = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      padding: 12px 0 15px 0;
    `;
    export const PersonalName = styled.p`
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      margin-right: 16px;
    `;
    export const SidebarIcon = styled.div`
      width: 43px;
      height: 43px;
      background-color: #313131;
      border-radius: 50%;
      cursor: pointer;
    `;
    export const SidebarBlock = styled.div`
      height: 100%;
      padding: 80px 0 0 0;
      display: flex;
      flex-direction: column;
    `;
    export const SidebarList = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    `;
    export const SidebarItem = styled.div`
      width: 250px;
      height: 150px;
      margin-bottom: 30px;
    `;
    export const SidebarLink = styled.a`
      width: 100%;
      height: 100%;
    `;
    export const SidebarImg = styled.img`
      width: 100%;
      height: auto;
    `;
   export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

    export const PlaylistTrack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

    export const TrackTitle = styled.div`
  display: flex;
  align-items: center;
  width: 447px;
`;

    export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
`;

    export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;

    export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

    export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`;

    export const TrackAuthor = styled.div`
  width: 321px;
  display: flex;
  justify-content: flex-start;
`;

    export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`;

    export const TrackAlbum = styled.div`
  width: 245px;
`;

    export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;

    export const TrackTime = styled.div`
  display: flex;
  align-items: center;
`;

    export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`;

    export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`;

    // export const

}
// Wrapper

