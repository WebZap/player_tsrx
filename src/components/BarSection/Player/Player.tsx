import React, {FC} from 'react';
import {S} from "../../../styles/styledBar";

const Player: FC = () => {
    return (
        <S.Player>
            <S.PlayerControls>
                <S.PlayerButtonPrev>
                    <S.PlayerButtonPrevSvg >
                        <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                    </S.PlayerButtonPrevSvg>
                </S.PlayerButtonPrev>
                <S.PlayerButtonPlay>
                    <S.PlayerButtonPlaySvg arial-label="play">
                        <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </S.PlayerButtonPlaySvg>
                </S.PlayerButtonPlay>
                <S.PlayerButtonNext>
                    <S.PlayerButtonNextSvg >
                        <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                    </S.PlayerButtonNextSvg>
                </S.PlayerButtonNext>
                <S.PlayerButtonRepeat>
                    <S.PlayerButtonRepeatSvg >
                        <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerButtonRepeatSvg>
                </S.PlayerButtonRepeat>
                <S.PlayerButtonShuffle>
                    <S.PlayerButtonShuffleSvg >
                        <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </S.PlayerButtonShuffleSvg>
                </S.PlayerButtonShuffle>
            </S.PlayerControls>
            <S.TrackPlay>

                <S.TrackPlayContain>
                    <S.TrackPlayImage>
                        <S.TrackPlaySvg >
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </S.TrackPlaySvg>
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor>
                        <S.TrackPlayAuthorLink href="http://">Ты та...</S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                        <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
                    </S.TrackPlayAlbum>
                </S.TrackPlayContain>

                <S.TrackPlayLikeDis>
                    <S.TrackPlayLike>
                        <S.TrackPlayLikeSvg >
                            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                        </S.TrackPlayLikeSvg>
                    </S.TrackPlayLike>
                    <S.TrackPlayDislike>
                        <S.TrackPlayDislikeSvg >
                            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                        </S.TrackPlayDislikeSvg>
                    </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>

            </S.TrackPlay>
        </S.Player>
    );
};

export default Player;