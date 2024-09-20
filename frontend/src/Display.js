import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>
{
    const [empData, setEmpData]= useState([]);
    const loadData=()=>
    {
        let url="http://127.0.0.1:8000/";
        axios.get(url).then((res)=>{
        setEmpData(res.data);
        });
    }
    useEffect(()=>{
        loadData();
    }, [])
    const employeeData=empData.map((key)=>{
             return(
                <>
                  <tr>
                    <td> {key.EmpNo} </td>
                    <td> {key.EmpName} </td>
                    <td> {key.Designation} </td>
                    <td> {key.Salary} </td>
                  </tr>
                </>
            )
         });
    return(
        <>
           <h1> Display students Record</h1>
            <table align="center" border="1">
                <tr>
                    <th>Emp No</th>
                    <th>Emp Name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                </tr>
                {employeeData}

            </table>                   
        </>
    );
}
export default Display;