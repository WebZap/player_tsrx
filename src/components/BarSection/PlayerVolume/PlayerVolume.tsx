import React, {FC} from 'react';
import {S} from "../../../styles/styledBar";

const PlayerVolume: FC = () => {
    return (
        <S.VolumeBlock>
            <S.VolumeContent>
                <S.VolumeImage>
                    <S.VolumeSvg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-volume"/>
                    </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress>
                    <S.VolumeProgressLine type="range" min="0" max="1" step="0.01"/>
                </S.VolumeProgress>
            </S.VolumeContent>
        </S.VolumeBlock>
    );
};

export default PlayerVolume;