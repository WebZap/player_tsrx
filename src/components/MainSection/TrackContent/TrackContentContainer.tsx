import {FC, useEffect} from 'react';
import {useSelectorTyped} from "../../../hooks/useSelectorTyped";
import {useDispatchTyped} from "../../../hooks/useDispatchTyped";
import {getUsersTC} from "../../../store/reducers/trackReducer";
import TrackContent from "./TrackContent";


const TrackContentContainer: FC = () => {
    const {tracks, errors, loading} = useSelectorTyped(state => state.tracks);
    const dispatch = useDispatchTyped();

    useEffect(() => {
        dispatch(getUsersTC())
    }, [])

        //filter ?
    //tracks.filter(item => item)

    return (<TrackContent loading={loading} tracks={tracks} errors={errors}/>);
};


export default TrackContentContainer;