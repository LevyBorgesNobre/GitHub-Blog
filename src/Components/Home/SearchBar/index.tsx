import { Container, Publications, SearchContent } from "./styles"
import { PostContext, PostContextType } from "../../../@PostContext"
import { useContext } from "react"

export function SearchBar(){

    const { user, search, handleSearch, handleKeyPress  } = useContext(PostContext) as PostContextType;
    
    return(
      <Container>
      <Publications>
        <p>Publicações</p> 
        <span>{user.public_repos} publicações</span>
      </Publications>
      <SearchContent placeholder="Buscar conteúdo"
      value={search}
      onChange={handleSearch}
      onKeyDown={handleKeyPress}
      />
      </Container>
    )
}