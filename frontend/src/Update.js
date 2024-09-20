import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import delImg from "./delete.jpg";
import editImg from "./edit.jpg";

const Update=()=>
{

   const [empData, setEmpData]= useState([]);
   const loadData=()=>
   {
    let url="http://127.0.0.1:8000/";
    axios.get(url).then((res)=>{
        setEmpData(res.data);
    }
    );
}
useEffect(()=>{
    loadData();
   }, []);

const recDelete=(myid)=>
{
    let url=`http://127.0.0.1:8000/${myid}/`;
    axios.delete(url).then((res)=>{
    alert("Record Succesfully deleted!!!");
    });
    loadData();
}
const myData=empData.map((key)=>{
      return(
        <>
          <tr>
          <td> {key.EmpNo} </td>
          <td> {key.EmpName} </td>
          <td> {key.Designation} </td>
          <td> {key.Salary} </td>
          <td>  
              <a href="#" onClick={()=>{recDelete(key.id)}}>
              <img src={delImg}  width="20" height="20"/>
              </a>

              <Link to={"/edit/"+key.id+"/"}>
              <img src={editImg} width="20" height="20"/>
              </Link>
              
          </td>
          </tr>
        </>
      );
});
 return(
        <>
         <h1>Edit Employee Record</h1>    
         <table align="center">
            <tr>
                <th>Empno</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Salary</th>
                <th> </th>
            </tr>
           {myData}
        </table>  
        </>
    );
}
export default Update;