import styled from 'styled-components'
// TotalFollowerCard


export const dflexSchema = `
display: flex;
justify-content: center;
align-items: center;`



export const TotalCard = styled.div`
    background-color: ${props => props.theme.backgroundCard};
    border-radius: 0 0 5px 5px;
    color: ${props => props.theme.textCard};
}
`

export const SocialNetwork = styled.div`
    ${dflexSchema};
    gap: 10px;
`

export const FollowerNumber = styled.p`
    ${dflexSchema};
    color: ${props => props.theme.text};
    font-size: var( --font-fs-4);
    font-weight: 700;
    gap: 10px;
`

export const FollowerTitle = styled.p`
    text-align: center;
    letter-spacing: 4px;
    font-size: var(--font-size-xs);
    font-weight: 400;
`

export const Ratings = styled.div`
    ${dflexSchema};
    gap: 10px;
    margin-top:35px;
`

export const RatingNumber = styled.p`
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${props => props.className === 'up' ? 'var(--lime-green)' : 'var(--bright-red)'};
    text-align: center;
`

/**
 * @explain dynamic color in RatingNumber: 
 * color in RatingNumber will change based on up or down rating number in the FollowerListData
 * if ratingIcon includes up or down then color will be lime-green or bright-red
 * "props" is used to get the value from FollowerListData and pass it to RatingNumber component as a prop className "up" or "down" depending on up or down
 * then in TotalFollowerCard component, RatingNumber component will change dynamically
 */