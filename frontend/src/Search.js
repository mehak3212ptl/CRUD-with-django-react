import axios from "axios";
import { useState } from "react";
const Search=()=>
{
    const [empno, setEmpno]=useState();
    const [myData, setMydata]= useState([]);
    // const [data,setData]=useState("")


    const handleSubmit=()=>
    {
      let url=`http://127.0.0.1:8000/${empno}`;
      
      axios.get(url).then((res)=>{
        console.log(res.data)
        //  setData(res.data)
        // if(res.data.EmpNo == Number(empno)){
        //   setMydata(res.data);
        // }
        
        res.data.id == empno?setMydata(res.data): alert("No record Found For This Emp no");
        
        // if (res.data.length<1)
        // {
        //    alert("No record Found For This Emp no");
        // }
       
      });
    }

    
    const ans= (myData)=>{
        return(
             <>
              <h1> Employee Name : {myData.EmpNo} </h1>
              <h2> Employee Number : {myData.EmpName} </h2>
              <h2> Employee Designation : {myData.Designation} </h2>
              <h2> Employee Salary : {myData.Salary} </h2>
             </>  
        );
    };
    return(
        <>
         <h1> Search Employee Records</h1>
         Enter Emp no :
        <input type="number" value={empno} onChange={(e)=>{setEmpno(e.target.value)}} />
        <button onClick={handleSubmit}>Search</button>
          {ans}
           <br/>
           <h1> Employee Name : {myData.EmpNo} </h1>
              <h2> Employee Number : {myData.EmpName} </h2>
              <h2> Employee Designation : {myData.Designation} </h2>
              <h2> Employee Salary : {myData.Salary} </h2>

          {/* {data} */}
        </>
    );
}
export default Search;