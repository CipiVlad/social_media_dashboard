import { FollowerTodayDataList } from "../models/DataSet"
import FollowerTodayCard from "./cards/FollowerTodayCard";

const FollowerTodayList = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-5">
                {/* inject data from model to card */}
                {FollowerTodayDataList && <FollowerTodayCard {...FollowerTodayDataList[0]} />}
                {FollowerTodayDataList && <FollowerTodayCard {...FollowerTodayDataList[1]} />}
            </div>
            {/* <div className="flex justify-center gap-5">
                <FollowerTodayCard data={FollowerTodayDataList[1]} />
                <FollowerTodayCard data={FollowerTodayDataList[2]} />
            </div> */}

        </div>
    )
}
export default FollowerTodayList