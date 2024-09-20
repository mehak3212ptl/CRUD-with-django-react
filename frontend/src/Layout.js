import { Link, Outlet } from "react-router-dom";
const Layout=()=>
{
  return(
    <>
    <Link to="home">Home</Link> |
    <Link to="insert">Insert Data</Link> |
    <Link to="display">Display Data</Link> |
    <Link to="update">Update</Link> |
    <Link to="search">Search</Link> |
    <Link to="contact">Contact us</Link>  
    <hr size="4" color="red"/>
      <Outlet/>
    <hr size="4" color="red" />
    www.mycomputer.com
    </>
  );
}
export default Layout;