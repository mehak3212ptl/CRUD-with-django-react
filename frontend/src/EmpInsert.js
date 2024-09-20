import { useState } from "react";
import axios from "axios";
const EmpInsert=()=>
{
const [input, setInput]=useState({});
   const handleInput=(e)=>
   {
     let name=e.target.name;
     let value=e.target.value;
      setInput( values=>({...values, [name]:value}));
      console.log(input);
   }
   const dataSave=()=>
   {
    let url="http://127.0.0.1:8000/";
    axios.post(url, input).then((res)=>{ alert("Data save!!!")});
   }
    return(
        <>
           <h1> Insert Employee Records!</h1>        
           Enter Emp No. : <input name="EmpNo" type="text" 
           onChange={handleInput} />
           <br/>
           Enter Emp Name: <input name="EmpName" type="text"  onChange={handleInput} />
           <br/>
           Designation : <input name="Designation" type="text"  onChange={handleInput} />
           <br/>
           Salary : <input name="Salary" type="text"  onChange={handleInput} />
           <br/>
           <button onClick={dataSave}>Data save!</button>
        </>
    );
}

export default EmpInsert;