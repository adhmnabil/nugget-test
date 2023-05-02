import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Hotel() {
  return (
    <div className='d-flex align-items-center mt-4'>
    <p className='dest'>Hotel Name</p>
    <TextField id="outlined-basic" label="Hotel Name" variant="outlined" />
  </div>
  )
}
