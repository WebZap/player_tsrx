import React, {FC} from 'react';
import {S} from "../../../styles/styledMain";
import PlaylistTrackItem from "./TrackItem/PlayListTrackItem";
import {ITrack} from "../../../types/tracksTypes";
import ContentLoader from "../../ContentLoader/ContentLoader";
import UniversalList from "../../UniversalList/UniversalList";

interface TrackProps {
    loading: boolean,
    tracks: ITrack[],
    errors: string | null

}

const TrackContent: FC<TrackProps> = ({loading, tracks, errors}) => {
    return (
        <>  {loading && <ContentLoader/>}
            {errors && <p>{errors}</p>}
            {tracks &&
                <S.CenterBlockContent>
                    <UniversalList items={tracks}
                                   cbFmap={(track: ITrack) => <PlaylistTrackItem key={track.id} {...track}/>}/>
                </S.CenterBlockContent>}
        </>

    );
};


export default TrackContent;