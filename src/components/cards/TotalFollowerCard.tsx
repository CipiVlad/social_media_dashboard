import { FollowerListData } from '../../models/DataSet'
import { SocialNetwork, FollowerNumber, FollowerTitle, Ratings, RatingNumber, TotalCard } from '../../style/styles.totalfollowercard'

type ToggleProp = {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const TotalFollowerCard = (data: FollowerListData & ToggleProp) => {
    const { coloredLine, icon, username, followers, ratingIcon, ratingNumber, ratingDay, followerTitle } = data
    // console.log(data.toggle);

    //test if ratingIcon includes up or down 
    // console.log(ratingIcon.includes('down') ? 'down' : 'up');

    return (
        <TotalCard className='w-[250px] h-[250px]'>
            <div className="line"
                style={{
                    height: '5px',
                    borderRadius: '3px 3px 0 0',
                    marginBottom: '35px',
                    backgroundColor: coloredLine,

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
                    className={ratingIcon.includes('down') ? 'down' : 'up'}>
                    {ratingNumber} {ratingDay}
                </RatingNumber>
            </Ratings>
        </TotalCard>
    )
}
export default TotalFollowerCard