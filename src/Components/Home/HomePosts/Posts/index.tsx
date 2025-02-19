import { useContext } from "react";
import { PostPage } from "../PostPage";
import { PostContext } from "../../../../@PostContext";

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
         PostPublicationDate={issue.upadted_at}
         PostContent={issue.body}
         />)})}
         </>
     )
  }