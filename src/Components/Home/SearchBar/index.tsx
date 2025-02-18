import { Container, Publications, SearchContent } from "./styles"

export function SearchBar(){
    return(
      <Container>
      <Publications>
        <p>Publicações</p> 
        <span>6 publicações</span>
      </Publications>
      <SearchContent placeholder="Buscar conteúdo"/>
      </Container>
    )
}