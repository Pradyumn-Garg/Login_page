import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { useState } from "react";





export default function App() {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [ph, setPh] = useState();
  const [role, setRole] = useState();
  const [country, setCountry] = useState();

  return (
    <div className="page">
      <div className="form">

        <Box sx={{ '& > :not(style)': { m: 1 }, maxWidth: '542px', marginTop: '20px', marginLeft: '10px' }}>
        
          <TextField
            required
            label="First Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            value={fname}
            onChange={(e) => {setFname(e.target.value);}}
            variant="outlined"
          />

          <TextField
            required
            label="Last Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            value={lname}
            onChange={(e) => {setLname(e.target.value);}}
            variant="outlined"
          />

          <TextField 
            required sx={{ width: '97.5%'}} 
            label="Email Address"
            value={email}
            onChange={(e) => {setEmail(e.target.value);}}
          />

          <TextField
            required
            sx={{ width: '97.5%'}}
            label="Password"
            type="password"
            value={pass}
            onChange={(e) => {setPass(e.target.value);}}
          />

          <TextField 
            required label="Phone Number" 
            sx={{ width: '47%'}}
            value={ph}
            onChange={(e) => {setPh(e.target.value);}}
          />

          <FormControl sx={{ width: '47%'}}>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Country"
              value={role}
              onChange={(e) => {setRole(e.target.value);}}
            >
              <MenuItem value={101}>India</MenuItem>
              <MenuItem value={102}>China</MenuItem>
              <MenuItem value={103}>America</MenuItem>
            </Select>
          </FormControl>

          <FormControl required sx={{ width: '97.5%'}}>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Role"
              value={country}
              onChange={(e) => {setCountry(e.target.value);}}
            >
              <MenuItem value={1}>Front End Developer</MenuItem>
              <MenuItem value={2}>Back End Developer</MenuItem>
              <MenuItem value={3}>Full Stack Developer</MenuItem>
              <MenuItem value={3}>Tester</MenuItem>
            </Select>
          </FormControl>
      
        </Box>

        <Box sx={{ '& > :not(style)': { m: 1 }, maxWidth: '542px', marginTop: '20px', marginLeft: '10px' }}>
          <Button variant="contained" color="success">Sign Up</Button>
        </Box>

        <FormControlLabel control={<Checkbox/>} label={<Typography variant="h6" style={{ fontSize:"15px" ,color: '#000000' }}>Confirm Sign Up?</Typography>}/>
          
      </div>
    </div>
  );
}