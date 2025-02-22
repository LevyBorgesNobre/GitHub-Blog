import { useContext } from "react";
import { PostPage } from "../PostPage";
import { PostContext } from "../../../../@PostContext";
import {  formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";


  export function Posts(){

    const context = useContext(PostContext);
    const { issues } = context;

     return(
         <>
         {issues.map(issue=>{ 
          return(
         <PostPage
         id={issue.id}
         PostTitle={issue.title}
         PostPublicationDate={formatDistanceToNow(new Date(issue.updated_at), {
          addSuffix: true,
          locale: ptBR})}
         PostContent={issue.body}
         />)})}
         </>
     )
  }