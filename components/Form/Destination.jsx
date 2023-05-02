import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Form() {
    const cities = [
        { label: 'Cairo' },
        { label: 'Luxor' },
        { label: 'Aswan' },
        { label: 'Alexandria' },
        { label: 'Fayom' },
        { label: "Paris"},
        { label: 'London' },
    ]
  return (
    <div className='d-flex align-items-center mt-4'>
    <p className='dest'>Destination<span className='text-danger'>*</span></p>
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={cities}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Destination" />}
  />
  </div>
  )
}
