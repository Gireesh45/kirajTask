import React from 'react'
import { Header } from '../Header/Header'
import "./index.css"
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = 
["USA", "UK", "China", "India", "Japan", "Mexico", "Russia", "Brazil", "France", 
"Germany"];

const maritalStatus = [
    "Single", "Married"
]


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const Personal = () => {
    const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
    return (
        <>
         <Header />
        <div className='personal-bg-container'>
            <div className='sections-container'>
                <ul className='list-container'>
                    <li className="list-items">Configuration v</li>
                    <li className="list-items">Employee List</li>
                    <li className='list-items'>Add Employee</li>
                    <li className="list-items">Reports</li>
                </ul>
            </div>
            <div className='cards-container'>
            <div className='details-container'>
                <div>
                    <h3>Chahal <br />Vadalmiya</h3>
                    <div>
                        <div>
                            <img className='person' src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1712816523/person_yqol94.jpg" alt="person" />
                        </div>
                        <p className='list-items'>Personal Details</p>
                        <p>Contact Details</p>
                        <p>Emergency Contact Details</p>
                        <p>Dependents</p>
                        <p>Immigration</p>
                        <p>Job</p>
                        <p>Salary</p>
                        <p>Report to</p>
                        <p>Qualifications</p>
                        <p>Memberships</p>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className='details-container-2 details-container'>
                <div>
                    <h3>Personal Details</h3>
                    <hr/>
                    <div className='name-container'>
               
                <label className='label-text'>Employee Full Name *</label><br/>
                <input className='names' placeholder='First Name' value={"Chahal"}/>
                <input className='names' placeholder='Middle Name'/>
                <input className='names' placeholder='Last Name' value={"Vadalmiya"}/>
                
            </div>
            <hr/>
            <div className='id-container'>
                <div>
                <label className='label-text id'>Employee Id</label><br/>
                <input className='names id' placeholder='First Name' value={"004"}/><br/>
                </div>
                <div>
                <label className='label-text id'>Other Id</label><br/>
                <input className='names id' />
                </div>
                
            </div>
            <div className='id-container'>
                <div>
                <label className='label-text id'>Driver License Number</label><br/>
                <input className='names id' /><br/>
                </div>
                <div>
                <label className='label-text id'>License Expiry Date</label><br/>
                <input className='names id' type='date' placeholder='yyyy-mm-dd'/>
                </div>
            </div>
            <hr/>
            <div className='id-container'>
                {/* <div>
                <input className='names id' /><br/>
                </div>
                <div>
                <input className='names id' type='select'/>
                </div> */}
                 <div>
                 <label className='label-text id'>Nationality</label><br/>

      <FormControl sx={{ m: 1, width: 250 }}>
        {/* <InputLabel id="demo-multiple-name-label">Nationality</InputLabel> */}
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    <div>
    <label className='label-text id'>Marital Status</label><br/>
      <FormControl sx={{ m: 1, width: 250 }}>
        {/* <InputLabel id="demo-multiple-name-label">Marital Status</InputLabel> */}
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          shrink={false}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          sx={{ paddingTop: 0, paddingBottom: 0 }} 
        >
          {maritalStatus.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
            </div>
            <div className='gender-container'>
            <div className='id-container'>
                <div>
                <label className='label-text id'>Date Of Birth</label><br/>
                <input className='names id' type='date' placeholder='yyyy-mm-dd' value="2001-11-22"/>
                </div>
            </div>
           <div className='id'>
            <label className='label-text id'>Gender</label><br/>
           <input type="radio" id="male" name="gender" value="male"/>
<label for="male">Male</label>
<input type="radio" id="female" name="gender" value="female"/>
<label for="female">Female</label>
           </div>

                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}
