import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function Nationallity() {
    const nationallites = [
        { label: 'Egypt' },
        { label: 'Saudi' },
        { label: 'France' },
        { label: 'Uk' },
        { label: 'USA' },
        { label: "Sudan"},
        { label: 'Morrocco' },
    ]
  return (
    <div className='mt-4 d-flex gap-5 mb-5'>
    <div className='d-flex align-items-center'>
    <p className='dest'>Nationality<span className='text-danger'>*</span></p>
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={nationallites}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Nationality" />}
  />
  </div>
  <div className='d-flex align-items-center'>
    <p className='dest'>Rating<span className='text-danger'>*</span></p>
    <Stack spacing={1}>
      <Rating className='date' name="half-rating-read" defaultValue={3} precision={1}  />
    </Stack>
  </div>
  </div>
  )
}
