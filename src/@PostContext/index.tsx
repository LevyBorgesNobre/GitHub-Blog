import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

export const PostContext = createContext({});

export function PostContextProvider({ children }: { children: ReactNode }) {
  const [issues, setIssues] = useState([]);
  const [user, setUser] = useState({});

  async function fetchIssues() {
      const response = await api.get('/search/issues?q=repo:LevyBorgesNobre/GitHub-Blog');
      setIssues(response.data.items || []);
  }

  async function fetchIssuesName() {
      const responseProfile = await api.get('/users/LevyBorgesNobre');
      setUser(responseProfile.data);
  }

  useEffect(() => {
    fetchIssues();
    fetchIssuesName();
  }, []);

  return (
    <PostContext.Provider value={{ issues, user, fetchIssues, fetchIssuesName }}>
      {children}
    </PostContext.Provider>
  );
}