import TotalFollowerCard from './cards/TotalFollowerCard'
import { FaceBookData, TwitterData, InstagramData, YouTubeData } from '../models/DataSet'

type ToggleProps = {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}
const TotalFollowerList = ({ toggle }: ToggleProps) => {
    return (
        <>
            <div className="grid grid-cols-4 gap-5">
                {/* inject data from model to card */}
                {FaceBookData && <TotalFollowerCard {...FaceBookData} toggle={toggle} setToggle={() => { }} />}
                {TwitterData && <TotalFollowerCard {...TwitterData} toggle={toggle} setToggle={() => { }} />}
                {InstagramData && <TotalFollowerCard {...InstagramData} toggle={toggle} setToggle={() => { }} />}
                {YouTubeData && <TotalFollowerCard {...YouTubeData} toggle={toggle} setToggle={() => { }} />}
            </div >
        </>
    )
}
export default TotalFollowerList