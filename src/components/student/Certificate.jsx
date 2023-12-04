import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Certificate = () => {

 var [inputs, setInputs] = useState({ "sid": '', "qualification": ''})
 var [students, setStudents] = useState([]);
 var [selectedimage,setSelectedimage] = useState([]);

 useEffect(() => {
    axios.get("http://localhost:4005/sview")
        .then(response => {
            console.log(response.data)
            setStudents(response.data)
        })
        .catch(err => console.log(err))
},[])

 const inputHandler = (event) => {
    const {name, value} = event.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
    console.log(inputs)
  }

  const handleImage = (event) => {
     const file = event.target.files[0];
     setSelectedimage(file)
     inputs.certphoto=file;
  }

  const savedata = () => {
    const formdata = new FormData();
    formdata.append('sid',inputs.sid);
    formdata.append('qualification',inputs.qualification);
    formdata.append('certphoto',selectedimage);
    console.log(formdata);

    fetch("http://localhost:4005/certnew",
    {method:'post',body:formdata})
    .then((response)=>response.json())
    .then((data)=>{
        alert("Record Saved")
    })
    .catch((err)=>{
        console.log("err")
    })
  }

  return (
    <div className='s'>

       Name: <select name="sid" value={inputs.sid} onChange={inputHandler}>
        {
            students.map((value,index)=>{
                return(
                    <option key={index} value={value._id}>{value.Sname}</option>
                )
            })
        }
        <option>aa</option>
       </select>
       <br/>
       Qualification: <input type='text' name='qualification' value={inputs.qualification} onChange={inputHandler}/>
       <br/>
       Certificate: <input type="file" name='ct' onChange={handleImage}/>
       <br/><br/>
       <button className='c' onClick={savedata}>SUBMIT</button>
    </div>
  ) 
}

export default Certificate