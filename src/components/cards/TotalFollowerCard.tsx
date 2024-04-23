import { FollowerListData } from '../../models/DataSet'
import { SocialNetwork, FollowerNumber, FollowerTitle, Ratings, RatingNumber, TotalCard } from '../../style/styles.totalfollowercard'


const TotalFollowerCard = (data: FollowerListData) => {
    const { coloredLine, icon, username, followers, ratingIcon, ratingNumber, ratingDay, followerTitle } = data

    return (
        <TotalCard className='w-[250px]'>
            <div className="line"
                style={{
                    height: '5px',
                    borderRadius: '5px', margin: '10px 0px 10px 0px', backgroundColor: coloredLine
                }} />
            <SocialNetwork>
                <img src={icon} alt={icon} />
                <p>{username}</p>
            </SocialNetwork>
            <FollowerNumber>{followers}</FollowerNumber>
            <FollowerTitle>{followerTitle}</FollowerTitle>
            <Ratings>
                <img src={ratingIcon} alt={ratingIcon} width={10} height={10} />
                <RatingNumber
                    className="today">
                    {ratingNumber} {ratingDay}
                </RatingNumber>
            </Ratings>
        </TotalCard>
    )
}
export default TotalFollowerCard