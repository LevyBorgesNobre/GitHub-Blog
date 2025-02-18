import HeaderImage from '../../../images/Header-Image.svg';
import { Img } from './styles';

export function Header(){
  return(
     <Img src={HeaderImage} alt="Header" />
  )
}