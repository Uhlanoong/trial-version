import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Search() {
  return (
    <Autocomplete
      disablePortal
      id="id"
      options={species}
      getOptionLabel={option => option.label}
      sx={{ width: 300, mx:5, px:5}}
      renderInput={(params) => <TextField {...params} label="Species" size="small"/>}
    />
  );
}

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
