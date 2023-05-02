import { TextField } from '@mui/material'
import React, { useRef, useState } from 'react'


export default function Nights() {
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
const formattedToday = `${yyyy}-${mm}-${dd}`;
const [date, setDate] = useState(formattedToday)

const ref1 = useRef()
const ref2 = useRef()
const ref3 = useRef()

function getNights(){
const date1 = new Date(ref1.current.value);
const date2 = new Date(ref2.current.value);
const diffInMs = date2.getTime() - date1.getTime();
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
ref3.current.options[diffInDays - 1].selected = true
}

function checkOut(){
const day = new Date(ref1.current.value) ;
const dd = String(day.getDate()).padStart(2, '0') ;
const mm = String(day.getMonth() + 1).padStart(2, '0');
const yyyy = day.getFullYear();
const lastDay = +dd + +ref3.current.value
setDate(`${yyyy}-${mm}-${+dd + +ref3.current.value}`);
ref2.current.value = `${yyyy}-${mm}-${+dd + +ref3.current.value}`
}






  return (
    <div className='d-flex align-items-center gap-5 mt-4'>
    <div className='d-flex align-items-center'>
    <p className='dest'>Check in<span className='text-danger'>*</span></p>
    <input ref={ref1} type="date" min={formattedToday} defaultValue={formattedToday} className='date' onChange={(e)=>setDate(e.target.value)} id="checkIn" />
    </div>
    <div className='d-flex align-items-center'>
    <p className='dest'>Check out<span className='text-danger'>*</span></p>
    <input ref={ref2} type="date" className='date' min={date} defaultValue={date} onChange={getNights}   />
    </div>
    <div className='d-flex align-items-center'>
    <p className='dest '>Nights</p>
      <select className='date' ref={ref3} onChange={checkOut}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
        <option>23</option>
        <option>24</option>
        <option>25</option>
        <option>26</option>
        <option>27</option>
        <option>28</option>
        <option>29</option>
        <option>30</option>
        <option>31</option>
        <option>32</option>
        <option>33</option>
        <option>34</option>
        <option>35</option>
        <option>36</option>
        <option>37</option>
        <option>38</option>
        <option>39</option>
        <option>40</option>
        <option>41</option>
        <option>42</option>
        <option>43</option>
        <option>44</option>
        <option>45</option>
        <option>46</option>
        <option>47</option>
        <option>48</option>
        <option>49</option>
        <option>50</option>
        <option>51</option>
        <option>52</option>
      </select>
    </div>
    <div className='d-flex align-items-center'>
    <p className='dest'>Travellers</p>
    <select className='date' >
        <option>1 Room , Adult 2 , 0 Children</option>
        <option>1 Room , Adult 3 , 0 Children</option>
        <option>1 Room , Adult 4 , 0 Children</option>
        <option>1 Room , Adult 2 , 1 Children</option>
      
      </select>
    </div>
  </div>
  )
}
