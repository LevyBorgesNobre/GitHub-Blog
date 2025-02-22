import styled from "styled-components";

export const Post  = styled.button`
 height: 16.25rem;
 min-width:26rem;
 max-width:26rem;
 background-color: ${props=> props.theme['base-post']};
 border: transparent;
 border-radius:10px;
 display: flex;
 flex-direction:column;
 padding: 16px;
`;

export const Container = styled.div`
 display:flex;
 justify-content: space-between;
`;

export const Title = styled.p`
 height:4rem;
 width: 17.7rem;
 font-family: "Nunito", serif;
 font-weight: bold;
 font-style: normal;
 font-size:1.2rem;
 margin-top:2rem;
 white-space: pre-line;
 text-align: left;
 margin-left:1.5rem;
 line-height: 160%;
`;

export const PublicationDate = styled.span`
 color: ${props=> props.theme['base-span']};
 margin: auto;
 white-space: nowrap;
 font-size:0.9rem;
`;

export const Content = styled.span`
  max-height: 7rem;                   
  width: 20rem;
  color: ${props => props.theme['base-span']};
  font-size: 1rem;
  text-align: left;
  margin-left: 1.5rem;
  display: -webkit-box;              
  -webkit-box-orient: vertical;      
  overflow: hidden;                
  -webkit-line-clamp: 4;            
  text-overflow: ellipsis;     
  line-height: 160%;
`;
