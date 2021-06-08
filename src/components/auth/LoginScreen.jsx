import React from 'react'
import { Button, TextField } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { startLoadingPublicKey } from '../../actions/public_key';

export const LoginScreen = () => {
  
    const dispatch = useDispatch();
    
    const [loginValues, handleInputChange, ] = useForm({
        email: 'test@test.com',
        password: '123456'
    })
    const {email, password} = loginValues;
    


    const loginSubmit = (ev) => {
        ev.preventDefault();        


        dispatch(startLogin(email, password, '123213jsdifwu'));
        dispatch(startLoadingPublicKey())
    }

    return (
        <div className='container'>
            <form className='form__container' onSubmit={loginSubmit}>
                    <h1 className='form__title'>Send File <CloudQueueIcon fontSize='large' className='ml-4'></CloudQueueIcon></h1>
                    
                    <div className='m-20 w-80'>
                        <TextField 
                            label='Email' 
                            type='email' 
                            className='w-100' 
                            name='email'
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='mb-20 w-80'>
                        <TextField 
                            label='Password' 
                            type='password' 
                            className='w-100' 
                            name='password'
                            value={password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='m-20 w-80'>
                        <Button variant='outlined' color='primary' className='w-100' type='submit' onSubmit={loginSubmit}>Submit<PersonIcon></PersonIcon></Button>
                    </div>

                    <div>
                        <Link to='/auth/register' className='form__link'>Create an account</Link>
                    </div>
            </form>            
        </div>
    )
}
