import styled from 'styled-components'
// TotalFollowerCard

const dflexSchema = `display: flex;
justify-content: center;
align-items: center;`


export const TotalCard = styled.div`
background-color: var(--dark-desaturated-blue-card-bg);
border-radius: 10px;
padding: 20px;
color: var(--white);
}
`


export const SocialNetwork = styled.div`
    ${dflexSchema};
    gap: 10px;
`

export const FollowerNumber = styled.p`
    ${dflexSchema};
    font-size: var( --font-fs-4);
    font-weight: 700;
    gap: 10px;
`

export const FollowerTitle = styled.p`
    text-align: center;
    letter-spacing: 2px;
    font-size: var(--font-size-xs);
    font-weight: 700;
`

export const Ratings = styled.div`
    ${dflexSchema};
    gap: 10px;
`

export const RatingNumber = styled.p`
    font-size: var(--font-size-xs);
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--lime-green);
    text-align: center;

`