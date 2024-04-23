import TotalFollowerCard from './cards/TotalFollowerCard'
import { FaceBookData, TwitterData, InstagramData, YouTubeData } from '../models/DataSet'


type ToggleProps = {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}


const TotalFollowerList = ({ toggle }: ToggleProps) => {
    return (
        <>
            <div className="flex justify-center gap-5">
                {/* inject data from model to card */}
                {FaceBookData && <TotalFollowerCard {...FaceBookData} toggle={toggle} setToggle={() => { }} />}
                {/* {TwitterData && <TotalFollowerCard {...TwitterData} />}
                {InstagramData && <TotalFollowerCard {...InstagramData} />}
                {YouTubeData && <TotalFollowerCard {...YouTubeData} />} */}
            </div >
        </>

    )
}
export default TotalFollowerList