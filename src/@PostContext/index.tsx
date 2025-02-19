import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";


export const PostContext = createContext()

export function PostContextProvider ({children} : {children : ReactNode}){
    
  const [issues, setIssues] = useState([]);
    
  async function fetchIssues(){
    const response = await api.get('/search/issues?q=repo:LevyBorgesNobre/GitHub-Blog')
    
    setIssues(response.data.items || [])
  }
 
  useEffect(() => {
    fetchIssues()
  }, [])


   const [userName, setUserName] = useState()

  async function fetchIssuesName(){
    const response = await api.get('/users/LevyBorgesNobre')

    setUserName(response.data.items || [])
  }

    return(
    <div>
      <PostContext.Provider
      value={{  
      issues,
      fetchIssues,
      fetchIssuesName,
      userName      
      }}
      >
        {children}
      </PostContext.Provider>
    </div>
    )
}