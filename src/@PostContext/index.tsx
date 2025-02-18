import { createContext, ReactNode } from "react";

export const PostContext = createContext()

export function PostContextProvider ({children} : {children : ReactNode}){
    

    return(
    <div>
      <PostContext.Provider
      value={{  
      
      }}
      >
        {children}
      </PostContext.Provider>
    </div>
    )
}