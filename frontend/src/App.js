import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import EmpInsert from "./EmpInsert";
import Display from "./Display";
import Update from "./Update";
import Edit from "./Edit";
import Search from "./Search";
import Contact from "./Contact";


const App =()=>
{
  return(
    <>
    {/* <Display/> */}
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
           <Route path="home" element={<Home/>}/>
           <Route path="insert" element={<EmpInsert/>}/>
           <Route path="display" element={<Display/>} />
           <Route path="update" element={<Update/>} />
           <Route path="edit/:id/" element={<Edit/>} />
           <Route path="search" element={<Search/>}/>
           <Route path="contact" element={<Contact/>}/>

          </Route>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App;