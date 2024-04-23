import styled from "styled-components";

export const dflexSchema = `
display: flex;
justify-content: space-between;
align-items: center;
`

export const FollowerCardStyledComponent = styled.div`
    background-color: ${props => props.theme.backgroundCard};
    border-radius: 10px 10px;
    color: ${props => props.theme.textCard};
`

export const TitleInfoAndIcon = styled.div`
    ${dflexSchema};
    color: ${props => props.theme.textCard};
`

export const RatingFlexContainer = styled.div`
    ${dflexSchema};
`

export const RatingNumber = styled.p`
color:${props => props.theme.text};
`
export const RatingIcon = styled.img`
display: inline-block;
`
export const RatingText = styled.p`
color:${props => props.theme.text};
`
