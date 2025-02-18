import { Container, ProfilePicture, ProfileUser, ProfileUserData, ProfileUserDescription, ProfileUserName } from "./styles";
import {ArrowSquareOut} from "phosphor-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile (){
  return(
    <>
     <Container>
        <ProfilePicture/>
        <ProfileUser>
          <ProfileUserName>
            <p>Levy Borges</p> <a href="">GITHUB <ArrowSquareOut size={13} color="#3294F8"/></a>
          </ProfileUserName>
          <ProfileUserDescription>
            <p>Olá, me chamo Levy e sou desenvolvedor front-end focado em React/React-Native/HTML/CSS/JS.</p>
          </ProfileUserDescription>
          <ProfileUserData>
            <p><FontAwesomeIcon icon={faGithub} color='#3A536B' size="1x"/> LevyNobre</p> 
            <p><FontAwesomeIcon icon={faBuilding} color='#3A536B' size="1x"/> -</p>
            <p><FontAwesomeIcon icon={faUserGroup} color='#3A536B' size="1x"/> 32 Seguidores</p>
          </ProfileUserData>
        </ProfileUser>
     </Container>
    </>
  )
}