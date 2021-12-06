// import { Autocomplete } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import { useForm } from 'react-hook-form';
import './Services.css';
import ReactDatePicker from 'react-datepicker';

const Services = () => {
    const [waterArea, setWaterArea] = useState(0);
    const [waterDepth, setWaterDepth] = useState(0);
    const [Volume, setVolume] = useState(0)
    // const { register} = useForm();
    // const cdate = new Date().toLocaleDateString();
    // const [value, onChange] = useState(new Date());
    // const [value, setValue] = React.useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    useEffect(()=>{
        let newVolume = waterArea * waterDepth
        setVolume(newVolume)
    }, [waterArea, waterDepth])
console.log({waterArea, waterDepth, Volume})

    return (
        <div className = "container">
           <div className = "row">
                <div className = "col-md-9">
                <form>
                <FloatingLabel controlId="floatingTextarea" label="Problems" className="mb-3 mx-5">
                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                    </FloatingLabel>
                        
                        <input type="text" id="firstNumber" placeholder="Water area" onChange={(e)=>setWaterArea(e.target.value)} style = {{height: "35px"}} />
                       <input type="text" id="secondNumber" placeholder="Water Depth" onChange={(e)=>setWaterDepth(e.target.value)} />
                        <Autocomplete
                        disablePortal
                        id=""
                        options={species}
                        sx={{ width: 240, mx:2, px:3}}
                        renderInput={(params) => <TextField {...params} label="Species" size = "small"/>}
                        />
                        {/* <input type="text" id="problematicSpecies" placeholder="Problematic Species" onChange="multiplyBy()" maxlength="15"/> */}
                        {/* <p>{cdate}</p> */}
                        {/* <DateTimePicker
                            onChange={onChange}
                            value={value}
                        /> */}
                        <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        <input type="date" id="stockingDate" placeholder="Stocking Date" onChange="multiplyBy()"/>
                        <input type="text" id="aeratorQuantity" placeholder="Aerator Quantity" onChange="oxygenBy()" />
                        <input type="text" id="aeratorCapacity" placeholder="Aerator Capacity"onChange="oxygenBy()"/>
                        <input type="text" id="culturePeriod" placeholder="Culture Period"/>
                        <input type="text" id="stockingQuantity" placeholder="Stocking Quantity"/>
                        
                </form>
                </div>
                <div className = "col-md-3 text-start">
                    <p>The Water Volume {Volume} is : 
                    <br/>
                    <sub>2</sub> Production (tentitive):
                    <br/>
                    Total O<sub>2</sub> demand:
                    <br/>f
                    Total O<sub>2</sub> demand harvest size:
                    <br/>f
                    Zonewise Fish Distribution:
                    <br/>
                    Upper layer: <br/>
                    Mid Layer: <br/>
                    Bottom Layer: <br/>f
                    Rmd Feed size: <br/>
                    Solution:
                    </p>
                </div>

           </div> 
        </div>
    );
};
const species = [
  
    { label: 'Tilapia' },
    { label: 'Pangasius' },
    { label: 'Rui' },
    { label: 'Mrigel' },
    { label: 'Koi' },
    { label: 'Catla' },
    { label: 'Silver Carp' },
    { label: 'Carpio' },
    { label: 'Grass Carp' },
    { label: 'Big Head' },
    { label: 'Black Carp' },
    { label: 'Kali Baus' },
    { label: 'Pabda' },
    { label: 'Gulsha' },
    { label: 'Shing' },
    { label: 'Magur' },
    { label: 'Shol' },
    { label: 'Shorputi' },
    { label: 'Bagdha' },
    { label: 'Goldha' },
    { label: 'Others' }
    
  ];
export default Services;