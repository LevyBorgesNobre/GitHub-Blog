import { Route, Routes, Outlet } from "react-router-dom";
import { Home } from "./Components/Home";
import { Post } from "./Components/Post";
import { GlobalHeader } from "./Components/GlobalHeader/GlobalHeader";

export function Router(){
    return(
        <Routes>
            <Route element={<GlobalHeader><Outlet/></GlobalHeader>}>
            <Route path='/' element={<Home/>} />
             <Route path='/Post' element={<Post/>}/>
             </Route>
        </Routes>
    );
}