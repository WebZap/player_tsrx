import React, {FC} from 'react';
import { S } from '../../styles/styledBar';
import PlayerProgress from "./PlayerProgress/PlayerProgress";
import Player from "./Player/Player";
import PlayerVolume from "./PlayerVolume/PlayerVolume";

const BarSection: FC = () => {
    return (
        <S.Bar>
            <S.BarContent>
                <PlayerProgress/>
                <S.PlayerBlock>
                    <Player/>
                    <PlayerVolume />
                </S.PlayerBlock>
            </S.BarContent>
        </S.Bar>
    );
};

export default BarSection;