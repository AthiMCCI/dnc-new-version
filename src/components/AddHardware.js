import React from 'react';
import Button from '@mui/material/Button';
import "../App.css";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const org =
[
  {
    value: 'SigFox',
    label: 'SigFox',
  },

  {
    value: 'LoraWAN',
    label: 'LoraWAN',
  }, 
];

const network = 
[
    {
        value: 'TTN',
        label: 'TTN',
      },
      {
        value: 'SigFox',
        label: 'SigFox',
      },
    
      {
        value: 'LoraWAN',
        label: 'LoraWAN',
      }, 
      {
        value: 'Actility',
        label: 'Actility',
      }, 
]
const band = 
[
    {
        value: 'US',
        label: 'US',
      },
      {
        value: 'AU',
        label: 'AU',
      },
    
      {
        value: 'UK',
        label: 'UK',
      }, 
]
const action = 
[
    {
        value: 'Added',
        label: 'Added',
      },
      {
        value: 'Removed',
        label: 'Removed',
      },
]

const reason = 
[
    {
        value: 'New deployment',
        label: 'New deployment',
      },
      {
        value: 'Tech Change',
        label: 'Tech Change',
      },
      {
        value: 'Network Change',
        label: 'Network Change',
      },
]


  function Addnewuser (props)
  {
    const [value, setValue] = React.useState(null);
    
    return (
    <div>
      <h1>Add Hardware</h1>
      <TextField className = "text" label="Hardware Id" id="outlined-size-small" size="small" />
      <h1> </h1>
      <TextField className = "text" label="Board Rev" id="outlined-size-small" size="small" />
      <h1> </h1>
      <TextField className = "text" label="FwVer" id="outlined-size-small" size="small" />
      <h1> </h1>

       {/* DATEPICKER */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="FwUpdatedOn"
        className = "text"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
      <h1> </h1>
       {/* DATEPICKER ends */}
        
    <div>
      <TextField className="text" 
          id="outlined-select-Main Org" select label=" Technology" helperText=" " >
            {org.map((option) =>
            (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
        </div>
         
         <div>
        <TextField className="text" 
          id="outlined-select-Main Org" select label=" Network" helperText=" " >
            {network.map((option) =>
            (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
        </div>

        <div>
        <TextField className="text" 
          id="outlined-select-Main Org" select label=" Band/Region" helperText=" " >
            {band.map((option) =>
            (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
        </div>

     
      <div>
        <TextField className="text" 
          id="outlined-select-Main Org" select label=" Action" helperText=" " >
            {action.map((option) =>
            (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
        </div>
        
        <div>
        <TextField className="text" 
          id="outlined-select-Main Org" select label=" Reason" helperText=" " >
            {reason.map((option) =>
            (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
        </div>

        {/* DATEPICKER */}
        <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date Of Action"
        className = "text"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
        </div>
        
        <Button className="save" variant="contained" href="Preferences"> Submit </Button> 

        <Button className="cancel" variant="contained" href="Preferences"> Cancel </Button> 
        
      
    </div>
  );
}

export default Addnewuser ;