import { Post, Container, Title, PublicationDate, Content } from "./styles";   
import { useNavigate } from "react-router-dom";

interface UserProfileData  {
    PostTitle:string;
    PostPublicationDate:string;
    PostContent:string;
   }

   export function PostPage({PostTitle, PostPublicationDate, PostContent} : UserProfileData){
     
   const navigate = useNavigate()

     return(
         <>
         <Post onClick={()=>{navigate('/Post')}}>
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