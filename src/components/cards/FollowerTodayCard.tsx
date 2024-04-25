import { FollowerTodayData } from "../../models/DataSet";
import { FollowerCardStyledComponent, TitleInfoAndIcon, RatingFlexContainer, RatingNumber, RatingIcon, RatingText } from "../../style/styles.followerstoday";


type ToggleProps = {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}
const FollowerTodayCard = (data: FollowerTodayData & ToggleProps) => {
    const { title, icon, number, ratingIcon, ratingNumber } = data

    return (
        <FollowerCardStyledComponent className="w-[250px] h-[130px] p-4 grid items-end">
            <TitleInfoAndIcon className="flex justify-between">
                <p>{title}</p>
                <img src={icon} alt={icon} />
            </TitleInfoAndIcon>
            <RatingFlexContainer>
                <RatingNumber>{number}</RatingNumber>
                <RatingIcon src={ratingIcon} alt={ratingIcon} />
                <RatingText
                    className={ratingIcon.includes('down') ? 'down' : 'up'}
                >{ratingNumber}</RatingText>
            </RatingFlexContainer>
        </FollowerCardStyledComponent>
    )
}
export default FollowerTodayCard