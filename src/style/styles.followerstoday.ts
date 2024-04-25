import styled from "styled-components";

export const dflexSchema = `
display: flex;
justify-content: space-between;
align-items: center;
`

export const FollowerCardStyledComponent = styled.div`
    background-color: ${props => props.theme.backgroundCard};
    border-radius: 5px 5px;
    color: ${props => props.theme.textCard};

    &:hover{
        background-color:${props => props.theme.backgroundHover};
    }
`

export const TitleInfoAndIcon = styled.div`
    ${dflexSchema};
    color: ${props => props.theme.textCard};
    font-size:var(--font-fs-0);
    font-weight: 700;
    gap: 10px;
`

export const RatingFlexContainer = styled.div`
    ${dflexSchema};
`

export const RatingNumber = styled.p`
color:${props => props.theme.text};
font-size: var(--font-fs-3);
font-weight: 700;
`
export const RatingIcon = styled.img`
margin-left:3vw;
`
export const RatingText = styled.p`
color: ${props => props.className === 'up' ? 'var(--lime-green)' : 'var(--bright-red)'};
font-size: 12px;
font-weight: 700;
`
