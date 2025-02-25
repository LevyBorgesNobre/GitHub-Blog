
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { HeaderContainer, HeaderProfile, ProfileTitle, ProfileUserMedia } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext, PostContextType } from "../../../@PostContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function PostHeader(){

 const context = useContext(PostContext) as PostContextType;
 const {issues} = context;
 const {id} = useParams();
 
 const issue =  { data: issues.find(post=> Number(post.id) === Number(id))}
 const navigate = useNavigate();
  return(
    <HeaderContainer >
     <HeaderProfile >
        <a onClick={()=>{navigate(-1)}}>
        <FontAwesomeIcon 
        icon={faChevronLeft} 
        style={{fontSize: '0.8rem'}}
        />
        VOLTAR
        </a> 
         
         {issue.data && (
            <a href={issue.data.html_url}>
            VER NO GITHUB  
           <FontAwesomeIcon 
           icon={faArrowUpRightFromSquare} 
           style={{fontSize: '0.8rem'}}
           />
           </a>
         )}
       
        </HeaderProfile>
         
         {issue.data && (
          <ProfileTitle>
          {issue.data.title}
         </ProfileTitle>
         )}
        
 
        <ProfileUserMedia >
          {issue.data && (
             <span><FontAwesomeIcon 
             icon={faGithub}
             color="#3A536B"
             style={{fontSize: '1.1rem'}}/>
             {issue.data.user.login}
             </span>
    
          )}
           

           {issue.data && (<span>
           <FontAwesomeIcon 
           icon={faCalendarDay}
           color="#3A536B"
           style={{fontSize: '1.1rem'}}
           />
           {formatDistanceToNow(new Date(issue.data.updated_at), {
            addSuffix: true,
            locale: ptBR
            })}
          </span>
        )}
          
          {issue.data && (<span>
          <FontAwesomeIcon 
           icon={faComment}
           color="#3A536B"
           style={{fontSize: '1.1rem'}}
           />
           {issue.data.comments} comentários
          </span>)}
          
        </ProfileUserMedia>
    </HeaderContainer>
   )
}