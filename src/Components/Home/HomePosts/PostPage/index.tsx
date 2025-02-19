import { useContext } from "react";
import { Post, Container, Title, PublicationDate, Content } from "./styles";   
import { PostContext } from "../../../../@PostContext";
import { useNavigate } from "react-router-dom";

interface UserProfileData  {
    PostTitle:string;
    PostPublicationDate:string;
    PostContent:string;
    id: number;
   }
  
   export function PostPage({PostTitle, PostPublicationDate, PostContent, id} : UserProfileData){
    
   const navigate = useNavigate()
    
     return(
         <>
         <Post onClick={()=>{navigate(`/Post/${id}`)}}>
         <Container>
          <Title>
          {PostTitle}
          </Title>
          <PublicationDate>
           {PostPublicationDate}
          </PublicationDate>
          </Container>
          <Content>
             {PostContent}
          </Content>
         </Post>
         </>
     )
   }