
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { HeaderContainer, HeaderProfile, ProfileTitle, ProfileUserMedia } from "./styles";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../../../@PostContext";

export function PostHeader(){

 const context = useContext(PostContext);
 const {issues} = context;
 const {id} = useParams();
 const issue = issues.find(post=> Number(post.id) === Number(id))

  return(
   <HeaderContainer >
    <HeaderProfile >
       <a href="/">
       <FontAwesomeIcon 
       icon={faChevronLeft} 
       style={{fontSize: '0.8rem'}}
       />
       VOLTAR
       </a> 

        <a href={issue.html_url}>
        VER NO GITHUB  
       <FontAwesomeIcon 
       icon={faArrowUpRightFromSquare} 
       style={{fontSize: '0.8rem'}}
       />
       </a>
       </HeaderProfile>

       <ProfileTitle>
        {issue.title}
       </ProfileTitle>

       <ProfileUserMedia >
        <span><FontAwesomeIcon 
         icon={faGithub}
         color="#3A536B"
         style={{fontSize: '1.1rem'}}/>
         {issue.user.login}
         </span>

         <span>
          <FontAwesomeIcon 
          icon={faCalendarDay}
          color="#3A536B"
          style={{fontSize: '1.1rem'}}
          />
          {issue.updated_at}
         </span>
         
         <span>
         <FontAwesomeIcon 
          icon={faComment}
          color="#3A536B"
          style={{fontSize: '1.1rem'}}
          />
          {issue.comments} comentários
         </span>
       </ProfileUserMedia>
   </HeaderContainer>
  )
}