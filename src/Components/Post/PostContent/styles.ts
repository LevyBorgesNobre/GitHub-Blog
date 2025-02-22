import styled from "styled-components";

export const ContentContainer = styled.div`
min-height:26.5rem;
width:54rem;
padding: 3rem;
margin: auto;
margin-top:2rem;
`;

export const Content = styled.div`
min-height:13rem;
width:50rem;
width:54rem;
margin:auto;
display: flex;
flex-direction: column;
margin-top:2rem;
gap: 1rem;
line-height: 120%;
`
export const Paragraph = styled.p`
 color: ${props=> props.theme['base-text']};
 font-family: "Nunito", serif;
 white-space: pre-line;
 text-align: left;
 line-height: 160%;
`

