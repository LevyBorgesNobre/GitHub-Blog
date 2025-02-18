
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { HeaderContainer, HeaderProfile, ProfileTitle, ProfileUserMedia } from "./styles";

export function PostHeader(){


  return(
   <HeaderContainer>
    <HeaderProfile>
       <a href="/">
       <FontAwesomeIcon 
       icon={faChevronLeft} 
       style={{fontSize: '0.8rem'}}
       />
       VOLTAR
       </a> 

        <a href="">
        VER NO GITHUB  
       <FontAwesomeIcon 
       icon={faArrowUpRightFromSquare} 
       style={{fontSize: '0.8rem'}}
       />
       </a>
       </HeaderProfile>

       <ProfileTitle>
        JavaScript data types and data structures
       </ProfileTitle>

       <ProfileUserMedia>
        <span><FontAwesomeIcon 
         icon={faGithub}
         color="#3A536B"
         style={{fontSize: '1.1rem'}}/>
         LevyNobre
         </span>

         <span>
          <FontAwesomeIcon 
          icon={faCalendarDay}
          color="#3A536B"
          style={{fontSize: '1.1rem'}}
          />
          há 1 dia
         </span>

         <span>
         <FontAwesomeIcon 
          icon={faComment}
          color="#3A536B"
          style={{fontSize: '1.1rem'}}
          />
          5 comentários
         </span>
       </ProfileUserMedia>
   </HeaderContainer>
  )
}