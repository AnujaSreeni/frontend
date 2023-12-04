import { Button, TextField } from '@mui/material'
import React from 'react'
import './Student.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

  const Student = () => {

  var [inputs, setInputs] = useState({ "Admno": '', "Sname": '', "Age": '', "Status": 'ACTIVE' })

  const navigate = useNavigate();

  const inputHandler = (event) => {
    const { name, value } = event.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
    console.log(inputs)
  }

  const savedata = () => {
    axios.post("http://localhost:4005/snew", inputs)
      .then((response) => { alert("Record Saved") })
      .catch(err => console.log(err))
      navigate('/studentview')
  }

  return (
    <div className='s'>
      <h1>Registration form</h1>
      <br />
      <TextField label="Admission No" variant="outlined" name='Admno' value={inputs.Admno} onChange={inputHandler} />
      <br />
      <br />
      <TextField label="Name" variant="outlined" name='Sname' value={inputs.Sname} onChange={inputHandler} />
      <br />
      <br />
      <TextField label="Age" variant="outlined" name='Age' value={inputs.Age} onChange={inputHandler} />
      <br />
      <br />
      Status   &nbsp;
      <select name='Status' value={inputs.Status} onChange={inputHandler}>
        <option value="ACTIVE">ACTIVE</option>
        <option value="INACTIVE">INACTIVE</option>
      </select>
      <br />
      <br />

      <Button variant='contained' onClick={savedata}>SUBMIT</Button>


    </div>
  )
}

export default Student