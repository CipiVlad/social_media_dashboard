import styled from "styled-components";

export const BackGroundDark = styled.div`
background-color: ${props => props.theme.background};

z-index: -1;
`

export const BackgroundCardTop = styled.div`
background-color: ${props => props.theme.backgroundTop};
border-radius: 0 0 20px 20px;
height: 260px;
z-index: 1;
`