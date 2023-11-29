import {S} from "../../../../styles/styledMain";
import {FC} from "react";
import {ITrack} from "../../../../types/tracksTypes";
import {convertTimeToMinutes} from "../../../../utilities/helpers";

const PlaylistTrackItem: FC<ITrack> = (props) => {
    const {
        id,
        name,
        author,
        duration_in_seconds,
        album,
        release_date,
        logo,
        track_file,
        stared_user
    } = props
    return (
        <S.PlaylistItem>
            <S.PlaylistTrack>
                <S.TrackTitle>
                    <S.TrackTitleImage>
                        <S.TrackTitleSvg>
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <S.TrackTitleLink href="http://">
                        {name} <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                </S.TrackTitle>
                <S.TrackAuthor>
                    <S.TrackAuthorLink href="http://">{author}</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                    <S.TrackAlbumLink href="http://">{album}</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                    <S.TrackTimeSvg>
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>{convertTimeToMinutes(duration_in_seconds)}</S.TrackTimeText>
                </S.TrackTime>
            </S.PlaylistTrack>
        </S.PlaylistItem>
    );
};

export default PlaylistTrackItem;