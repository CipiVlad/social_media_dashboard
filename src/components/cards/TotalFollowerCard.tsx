import up from '../../../public/images/icon-up.svg'
import down from '../../../public/images/icon-down.svg'
import { FollowerListData } from '../../models/DataSet'



const TotalFollowerCard = (data: FollowerListData) => {
    const { coloredLine, icon, username, followers, ratingIcon, ratingNumber, ratingDay } = data


    return (
        <div className='background_total_followers_list'>
            <div className="line"
                style={{
                    backgroundColor: `${coloredLine}`,
                    width: '100%',
                    height: '5px',
                    borderRadius: '5px',
                    margin: '10px 0px 10px 0px',

                }}>

            </div>
            <div className="social_network">
                <img src={icon} alt={icon} />
                <p>{username}</p>
            </div>
            <div className="followers_number">
                <p>{followers}</p>
            </div>
            <div className="followers">
                <p>FOLLOWERS</p>
            </div>
            <div>
                <img src={ratingIcon} alt={ratingIcon} width={10} height={10} />
                <p className="today">{ratingNumber} {ratingDay}</p>
            </div>
        </div>
    )
}
export default TotalFollowerCard