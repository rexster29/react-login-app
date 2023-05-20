import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { FormControl, Grid, Box } from '@mui/material';
import BasicButtons from './Button';

export default function BasicTextField({ title, setEmail, setPassword, handleAction}){
    const navigateToRegistration = (title == "Login")? 'block' : 'none';

    const useEffect = () => {
        let authToken = sessionStorage.getItem('Auth Token');
        console.log(authToken);
        if (authToken) {
            window.location = '/home';
        }
        else {
            if(title == "Register")
                window.location = '/';
        }
    }

    return(
        <div>
            <div className='heading-container'>
                <h3>
                    {title} Form
                </h3>
            </div>
            <FormControl>
                <TextField 
                    id="email" 
                    label="Enter the Email" 
                    variant="outlined" 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <TextField 
                    id="password" 
                    label="Enter the Password" 
                    variant="outlined"
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <BasicButtons title={title} handleAction={handleAction}/>
                <a href='/register' target='' style={{display: navigateToRegistration}}>New? Sign up</a>
            </FormControl>
        </div>
    )
}