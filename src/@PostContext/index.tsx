import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Issue {
  id: number;
  title: string;
  body: string;
  updated_at: string;
  html_url:string;
  user: {
    login: string;
  }
  comments: number;
}

interface User {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  public_repos: number;
  html_url: string;
}

export interface PostContextType {
  issues: Issue[];
  user: User;
  fetchIssues: () => void;
  fetchIssuesName: () => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const PostContext = createContext<PostContextType | undefined>(undefined);

export function PostContextProvider({ children }: { children: ReactNode }) {
  const [issues ,setIssues] = useState<Issue[]>([]);
  const [user, setUser] = useState<User>({ login: '', name: '', avatar_url: '', bio: '', followers: 0, public_repos: 0, html_url: '' });
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useSearchParams({});
  
   const navigate = useNavigate();

   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
   
    if( e.target.value === ''){
      navigate(-1);
    }
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