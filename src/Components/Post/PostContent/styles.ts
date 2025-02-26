import styled from "styled-components";

export const ContentContainer = styled.div`
min-height:26.5rem;
width:54rem;
margin: auto;
margin-top:2rem;
`;

export const Content = styled.div`
min-height:13rem;
width:50rem;
width:54rem;
display: flex;
flex-direction: column;
margin-top:2rem;
gap: 1.5rem;
line-height: 120%;
font-family: "Nunito", serif;
color: ${props=> props.theme['blue']};
`
export const Paragraph = styled.p`
 color: ${props=> props.theme['base-text']};
 font-family: "Nunito", serif;
 white-space: pre-line;
 text-align: left;
 line-height: 160%;
`



