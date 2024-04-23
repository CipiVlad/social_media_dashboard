import TotalFollowerCard from './cards/TotalFollowerCard'
import { FaceBookData, TwitterData, InstagramData, YouTubeData } from '../models/DataSet'
const TotalFollowerList = () => {
    return (
        <>
            <div className="flex justify-center gap-5">
                {/* inject data from model to card */}
                {FaceBookData && <TotalFollowerCard {...FaceBookData} />}
                {TwitterData && <TotalFollowerCard {...TwitterData} />}
                {InstagramData && <TotalFollowerCard {...InstagramData} />}
                {YouTubeData && <TotalFollowerCard {...YouTubeData} />}
            </div >
        </>

    )
}
export default TotalFollowerList