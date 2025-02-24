import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { useSearchParams } from "react-router-dom";

export const PostContext = createContext({});

export function PostContextProvider({ children }: { children: ReactNode }) {
  const [issues ,setIssues] = useState([]);
  const [user, setUser] = useState({});
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useSearchParams();
  
   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
   }

  async function fetchIssues() {
      const response = await api.get('/search/issues?q=repo:LevyBorgesNobre/GitHub-Blog');
      setIssues(response.data.items || []);
  }

  async function fetchIssuesName() {
      const responseProfile = await api.get('/users/LevyBorgesNobre');
      setUser(responseProfile.data );
  }
   
  const searchQuery = searchResult.get('query') || '';

  async function fetchIssuesSearch() {
    const response = await api.get(`/search/issues?q=${search}+repo:LevyBorgesNobre/GitHub-Blog`);
    setIssues(response.data.items || []);
    setSearch('');
  }

  function SearchIssues(){
    setSearchResult({query : search });
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>){
    if(e.key === 'Enter'){
      SearchIssues();
    }
  }

  useEffect(()=>{
  fetchIssuesSearch();
  }, [searchQuery])

  useEffect(() => {
    fetchIssues();
    fetchIssuesName();
  }, []);
  

  return (
    <PostContext.Provider value={{ 
    issues,
     user,
    fetchIssues,
    fetchIssuesName,
    search,
    setSearch,
    handleSearch,
    handleKeyPress,
     }}>
      {children}
    </PostContext.Provider>
  );
}