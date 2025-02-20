import styled from "styled-components"

export const Container = styled.div`
 width:54rem;
 height:14rem;
 max-width: 54rem;
 max-height:14rem;
 background-color: ${props=> props.theme['base-profile']};
 border-radius: 10px;
 position: relative;
 margin:auto;
 margin-top:-5.5rem; 
 display: flex;
 gap:3rem;
 `;

 export const ProfilePicture = styled.img`
 height: 9.5rem;
 min-width:9.5rem;
 border-radius:10%;
 background-color: white;
 margin-top:2rem;
 margin-left:2rem;
 `;

 export const ProfileUser = styled.div`
 width:37.5rem;
 height: 9.5rem;
 margin-top:2rem;
 display: flex;
 flex-direction:column;
 `;

 export const ProfileUserName = styled.div`
 display: flex;
 justify-content: space-between;
 
 p{
 font-family: "Nunito", serif;
 font-optical-sizing: auto;
 font-weight: bold;
 font-style: normal;
 font-size:1.5rem;
}

a{ 
    font-family: "Nunito", serif;
    font-weight: bold;
    margin-top:0.5rem;
    font-size:0.8rem;
    color: ${props=> props.theme['blue']};
    text-decoration:none;
}
 `;

 export const ProfileUserDescription = styled.div`
 height: 3.5rem;
 width:37rem;
 padding:0.2rem;
 margin-top:0.5rem;

 p{
    font-family: "Nunito", serif;
    color: ${props=> props.theme['base-text']};
    font-size:1rem;
    line-height: 1.8;

 }`;

 export const ProfileUserData = styled.div`
 height: 1.9rem;
 width:27rem;
 margin-top:2rem;
 display: flex;
 gap: 2rem;
 white-space: nowrap;

 p{
    color: ${props=> props.theme['base-text']};
    display: flex;
    gap: 10px;
 }
 `;