import React from 'react'
import './index.css'
import { Header } from '../Header/Header'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export const Home = () => {
  return (
    <div className='home-container'>
       <Header/>
       <div className='sections-container'>
        <ul className='list-container'>
            <li className="list-items">Configuration v</li>
            <li className="list-items">Employee List</li>
            <li className='add-employee list-items'>Add Employee</li>
            <li className="list-items">Reports</li>
        </ul>
       </div>
       <div className='add-card'>
        <p className='heading'>Add Employee</p>
        <hr/>
        <div className='bottom-container'>
            <div>
            <div className='person-container'>
                <div >
            <img className='person' src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1712816523/person_yqol94.jpg" alt="person"/>
            </div>
            <div className='person-container-2'> 
            <span className='add-icon'>
               +
            </span>
            </div>
           
            </div>
            <p className='required'>Accepts jpg .png. gif upto 1MB Recommonded <br/> dimentions 200px X 200px</p>
            </div>
            
            <div>
            <div>
                <label className='label-text'>Employee Full Name *</label><br/>
                <input className='names' placeholder='First Name'/>
                <input className='names' placeholder='Middle Name'/>
                <input className='names' placeholder='Last Name'/>
            </div>
            <div className='id-container'>
                <label className='label-text'>Employee Id</label><br/>
                <input className='employee-id' value={1120}/>
            </div>
           
            <hr/>
            <FormGroup>
      <FormControlLabel control={<Switch  />} label="Create Login Details"  className='label-text'/>
    </FormGroup>
        </div>
        </div>
        <hr/>
        <div className='buttons-container'>
        <p className='required'>* Required</p>
        <div>
            <button className='cancle-button save-button'>Cancle</button>
            <button className='save-button'>Save</button>
        </div>
        </div>
       
       </div>
      
    </div>
  )
}
