import styled from "styled-components";

export const HeaderContainer = styled.div`
height: 11rem;
 width:64rem;
background-color: ${props=> props.theme['base-profile']};
margin: auto;
position: relative;
margin-top: -5.5rem;
border-radius:10px;
display: flex;
flex-direction: column;
padding:2.5rem;
`;

export const HeaderProfile = styled.div`
display: flex;
justify-content: space-between;

a{
    color:${props=>props.theme['blue']};
    font-family: "Nunito", serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    font-size:0.8rem;
    display: flex;
    gap:0.7rem;
    line-height: 15px;
    text-decoration:none;
    justify-content:flex-end;
}
`;

export const ProfileTitle = styled.p`
   height: 2rem;
   width:50rem;
   font-family: "Nunito", serif;
   font-optical-sizing: auto;
   font-weight: bold;
   font-style: normal;
   font-size:1.5rem;
   margin-top:1.5rem;
   color: ${props=> props.theme['base-title']};
`;

 export const ProfileUserMedia = styled.div`
 height: 1.8rem;
 width:24.5rem;
 margin-top:1.3rem;
 display: flex;
 gap:2rem;
 span{
    color: ${props=> props.theme['base-span']};
    display: flex;
    gap:0.5rem;
    font-size: 1rem;
    line-height: 1.1rem;
    white-space: nowrap;
 }
 `;

