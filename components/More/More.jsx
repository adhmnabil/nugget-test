import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {MdCancel} from 'react-icons/md'

export default function More() {
    const nationallites = [
        { label: 'Egypt' },
        { label: 'Saudi' },
        { label: 'France' },
        { label: 'Uk' },
        { label: 'USA' },
        { label: "Sudan"},
        { label: 'Morrocco' },
    ]
    const Currency = [
        { label: 'EGP' },
        { label: 'USD' },
        { label: 'RIY' },
        { label: 'EURO' },
        { label: 'GBP' },
    ]
  return (
    <div className='mt-5 d-flex justify-content-between p-5'>
        <button className='btn btn-dark' onClick={()=>{
                    let form = document.getElementById('form')
                    form.classList.remove('d-none')
                    form.classList.add('d-flex')
                 }}>More Options</button>
        <button className='btn btn-search'>Search</button>
        <div className='form' id='form'>
            <div className='form-data'>
                <div className='d-flex justify-content-between mb-4'>
                    <p>More Search Options</p>
                <MdCancel cursor='pointer' fontSize="1.5em" color='#a18f61' onClick={()=>{
                    let form = document.getElementById('form')
                    form.classList.add('d-none')
                 }}/>
                </div>
            <div className='d-flex gap-5'>
            <div className='d-flex align-items-center'>
    <p className='dest2'>Country</p>
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={nationallites}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Nationality" />}
  />
              </div>
                <div className='d-flex align-items-center'>
    <p className='dest2'>City</p>
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={nationallites}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Nationality" />}
  />
                </div>
                 <div className='d-flex align-items-center'>
    <p className='dest2'>Currency</p>
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={Currency}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Nationality" />}
  />
                 </div>
                 </div>
                 <div className='text-end'>
                 <button className='mt-3 btn btn-search' onClick={()=>{
                    let form = document.getElementById('form')
                    form.classList.add('d-none')
                 }}>Done</button>
                 </div>
            </div>

        </div>
    </div>
  )
}
