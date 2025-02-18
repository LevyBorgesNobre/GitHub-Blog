import styled from "styled-components";

export const Container = styled.div`
 height: 6rem;
 width:54rem;
 margin:auto;
 margin-top:5rem;
 display:flex;
 flex-direction:column;
`;

export const Publications = styled.div`
 display: flex;
 gap: 41rem;

p{
    font-family: "Nunito", serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    font-size:1.2rem;
    color:${props=> props.theme['base-subtitle']}
} 

span{
    font-family: "Nunito", serif;
    font-size:0.9rem;
    color:${props=> props.theme['base-span']};
    margin-top:5px;
}`;

export const SearchContent = styled.input`
 height: 3.20rem;
 width:54rem;
 background-color: ${props=> props.theme['base-input']};
 margin-top:1rem;
 border-color:transparent;
 padding-left:1rem;
 border-radius:5px;
  
  &::placeholder{
    color: ${props=> props.theme['base-label']};
    transition: all 0.3s ease; 
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme['blue']};
  }

  &:focus::placeholder,
  &:not(:placeholder-shown)::placeholder {
    opacity: 0; 
  }
`;






