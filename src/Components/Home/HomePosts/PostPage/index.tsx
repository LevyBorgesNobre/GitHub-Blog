import { Post, Container, Title, PublicationDate, Content } from "./styles";   
import { useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown'

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
             <ReactMarkdown components={{span: (props)=>(<Content {...props}/>),}}>
             {PostContent}
             </ReactMarkdown>
          </Content>
         </Post>
         </>
     )
   }