import { useContext } from "react";
import { Content, ContentContainer } from "./styles";
import { PostContext, PostContextType } from "../../../@PostContext";
import {  useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { Paragraph } from "./styles";

export function PostContent(){

  const {id} = useParams();
   
  const context = useContext(PostContext) as PostContextType;
  const {issues} = context;
  
 const issue = issues.find(post=> Number(post.id) === Number(id))

  return(
    <ContentContainer>
       <Content >
       {issue && (
         <ReactMarkdown
          components={{p: (props)=>(<Paragraph {...props}/>)}}
          >{issue.body}
          </ReactMarkdown>
       )}
        </Content>
    </ContentContainer>
   )
}