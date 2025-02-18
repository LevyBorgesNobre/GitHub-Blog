import { HomePosts } from "./HomePosts";
import { Profile } from "./Profile";
import { SearchBar } from "./SearchBar";

export function Home(){
    return(
        <>
        <Profile/>
        <SearchBar/>
        <HomePosts/>
        </>
    )
}