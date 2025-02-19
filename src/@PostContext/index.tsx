import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";


export const PostContext = createContext()

export function PostContextProvider ({children} : {children : ReactNode}){
    
  const [issues, setIssues] = useState([]);
    
  async function fetchIssues(){
    const response = await api.get('/search/issues?q=repo:LevyBorgesNobre/GitHub-Blog')
    
     
    setIssues(response.data.items)
  }
 
  useEffect(() => {
    fetchIssues()
  }, [])

    return(
    <div>
      <PostContext.Provider
      value={{  
      issues,
      fetchIssues      
      }}
      >
        {children}
      </PostContext.Provider>
    </div>
    )
}