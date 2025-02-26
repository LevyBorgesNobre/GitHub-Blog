import { Container, ProfilePicture, ProfileUser, ProfileUserData, ProfileUserDescription, ProfileUserName } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ArrowSquareOut } from "phosphor-react";
import { PostContext, PostContextType } from "../../../@PostContext";

export function Profile (){

 const { user } = useContext(PostContext) as PostContextType;
 console.log(user)
  return(
    <>
        <Container>
        <ProfilePicture src={user?.avatar_url}  alt="foto de perfil"/>
        <ProfileUser>
          <ProfileUserName>
            <p>{user.name}</p> <a href={user.html_url}>GITHUB <ArrowSquareOut size={13} color="#3294F8"/></a>
          </ProfileUserName>
          <ProfileUserDescription>
            <p>{user.bio}</p>
          </ProfileUserDescription>
          <ProfileUserData>
            <p><FontAwesomeIcon icon={faGithub} color='#3A536B' size="1x"/>{user.login}</p> 
            <p><FontAwesomeIcon icon={faBuilding} color='#3A536B' size="1x"/> -</p>
            <p><FontAwesomeIcon icon={faUserGroup} color='#3A536B' size="1x"/>{user.followers} seguidores</p>
          </ProfileUserData>
        </ProfileUser>
     </Container>
    </>
  )
}