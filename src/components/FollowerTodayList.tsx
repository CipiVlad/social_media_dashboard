import { FollowerTodayDataList } from "../models/DataSet"
import FollowerTodayCard from "./cards/FollowerTodayCard";


type ToggleProps = {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const FollowerTodayList = ({ toggle, setToggle }: ToggleProps) => {
    return (
        <>
            <h2 className="text-xl font-bold text-white ">Overview - Today</h2>
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
                            toggle={toggle}
                            setToggle={setToggle}
                        />
                    ))
                }
            </div>
        </>
    )
}
export default FollowerTodayList