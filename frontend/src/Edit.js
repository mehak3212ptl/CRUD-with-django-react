import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Edit =()=>
{
    const {id} = useParams();
    const myNav= useNavigate();
    const [myData, setMyData]= useState({});
    const loadData=()=>
    {
     let url=`http://127.0.0.1:8000/${id}`;
     axios.get(url).then((res)=>{
        setMyData(res.data);
     });
    }
    useEffect(()=>{
        loadData();
    }, []);
   const handleInput=(e)=>
   {
    let name=e.target.name;
    let value=e.target.value;
    setMyData(values=>({...values, [name]:value}));
    console.log(myData)
   }
   const handleSubmit=()=>
   {
    let url=`http://127.0.0.1:8000/${id}/`;
    axios.put(url, myData).then((res)=>{
          alert("Record Succesfully updated!!!");
          myNav("/update");
    });
   }
    return(
        <>
         <h1> Edit Employee Records</h1>
            Edit Empno  : <input type="text" name="EmpNo" value={myData.EmpNo}
            onChange={handleInput} />
            <br />
            Edit Name  : <input type="text" name="EmpName" value={myData.EmpName} onChange={handleInput}  />
            <br />
            Edit Designation  : <input type="text" name="Designation" value={myData.Designation}  onChange={handleInput} />
            <br />
            Edit Salary  : <input type="text" name="Salary" value={myData.Salary}  onChange={handleInput} />
            <br />
            <button onClick={handleSubmit}> Update!</button>
        </>
    );
}
export default Edit;