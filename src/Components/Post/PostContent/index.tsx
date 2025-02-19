import { useContext } from "react";
import { Content, ContentContainer } from "./styles";
import { PostContext } from "../../../@PostContext";
import {  useParams } from "react-router-dom";

export function PostContent(){

  const {id} = useParams();
   
  const context = useContext(PostContext)
  const {issues} = context;
  
 const issue = issues.find(post=> Number(post.id) === Number(id))
 console.log(issues)

  return(
    <ContentContainer>
       <Content >
         {issue.body}
        </Content>
    </ContentContainer>
   )
}