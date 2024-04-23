import { FollowerTodayDataList } from "../models/DataSet"
import FollowerTodayCard from "./cards/FollowerTodayCard";

const FollowerTodayList = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-5 pt-4">
            {
                FollowerTodayDataList.map((ele, idx) => (
                    <FollowerTodayCard
                        key={idx}
                        title={ele.title}
                        icon={ele.icon}
                        number={ele.number}
                        ratingIcon={ele.ratingIcon}
                        ratingNumber={ele.ratingNumber}
                    />
                ))
            }
        </div>
    )
}
export default FollowerTodayList