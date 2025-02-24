import { Container, Publications, SearchContent } from "./styles"
import { PostContext } from "../../../@PostContext"
import { useContext } from "react"

export function SearchBar(){

    const { user, search, handleSearch, handleKeyPress  } = useContext(PostContext);
    
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