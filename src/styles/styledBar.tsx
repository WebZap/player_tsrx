import styled from 'styled-components';
//Styled bar-player
export namespace S {

    export const Bar = styled.div`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(28, 28, 28, 0.5);
    `;

    export const BarContent = styled.div`
      display: flex;
      flex-direction: column;
    `;

    export const PlayerProgress = styled.div`
      width: 100%;
      height: 5px;
      background: #2e2e2e;
    `;

    export const PlayerBlock = styled.div`
      height: 73px;
      display: flex;
      justify-content: space-between;
    `;

    export const Player = styled.div`
      display: flex;
      align-items: center;
    `;

    export const PlayerControls = styled.div`
      display: flex;
      padding: 0 27px 0 31px;
    `;

    export const PlayerButton = styled.div`
      padding: 5px;
    `;

    export const PlayerButtonPrev = styled(PlayerButton)`
      margin-right: 23px;
    `;

    export const PlayerButtonPlay = styled(PlayerButton)`
      margin-right: 23px;
    `;

    export const PlayerButtonNext = styled(PlayerButton)`
      margin-right: 28px;
      fill: #a53939;
    `;

    export const PlayerButtonRepeat = styled(PlayerButton)`
      margin-right: 24px;
    `;

    export const PlayerButtonShuffle = styled(PlayerButton)``;

    export const TrackPlay = styled.div`
      display: flex;
      align-items: center;
    `;

    export const TrackPlayContain = styled.div`
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-areas:
    "image author"
    "image album";
      align-items: center;
    `;

    export const TrackPlayImage = styled.div`
      grid-area: image;
      width: 51px;
      height: 51px;
      background-color: #313131;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
    `;

    export const TrackPlayAuthor = styled.div`
      grid-area: author;
      min-width: 49px;
    `;

    export const TrackPlayAuthorLink = styled.a`
      grid-area: album;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      white-space: nowrap;
    `;

    export const TrackPlayAlbum = styled.div`
      min-width: 49px;
    `;

    export const TrackPlayAlbumLink = styled.a`
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 24px;
      color: #ffffff;
    `;

    export const TrackPlayLikeDis = styled.div`
      margin-left: 26%;
      display: flex;
      align-items: center;
    `;

    export const TrackPlayLike = styled.div`
      padding: 5px;
    `;

    export const TrackPlayDislike = styled.div`
      margin-left: 28.5px;
    `;

    export const VolumeBlock = styled.div`
      width: auto;
      display: flex;
      align-items: center;
      padding: 0 92px 0 0;
    `;

    export const VolumeContent = styled.div`
      display: flex;
      align-items: center;
    `;

    export const VolumeImage = styled.div`
      width: 13px;
      height: 18px;
      margin-right: 17px;
    `;

    export const VolumeProgress = styled.div`
      width: 109px;
    `;

    export const VolumeProgressLine = styled.input`
      width: 100%;
    `;
    export const PlayerButtonPrevSvg = styled.svg`
      width: 13px;
      height: 13px;
      fill: transparent;
      stroke: #d9d9d9;
    `;

    export const PlayerButtonPlaySvg = styled.svg`
      width: 15px;
      height: 14px;
      fill: #d9d9d9;
    `;

    export const PlayerButtonNextSvg = styled.svg`
      width: 13px;
      height: 13px;
      stroke: #d9d9d9;
    `;

    export const PlayerButtonRepeatSvg = styled.svg`
      width: 18px;
      height: 12px;
      fill: transparent;
      stroke: #696969;
    `;

    export const PlayerButtonShuffleSvg = styled.svg`
      width: 19px;
      height: 12px;
      fill: transparent;
      stroke: #696969;
    `;

    export const TrackPlaySvg = styled.svg`
      width: 18px;
      height: 17px;
      fill: transparent;
      stroke: #4e4e4e;
    `;

    export const VolumeSvg = styled.svg`
      width: 13px;
      height: 18px;
      fill: transparent;
    `;

    export const TrackPlayLikeSvg = styled.svg`
      width: 14px;
      height: 14px;
      fill: transparent;
      stroke: #d9d9d9;
    `;

    export const TrackPlayDislikeSvg = styled.svg`
      width: 13px;
      height: 13px;
      fill: transparent;
    `;
}

