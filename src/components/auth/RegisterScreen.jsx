import React from 'react'
import { Button, TextField } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startRegisterWithEmailAndPassword } from '../../actions/auth';

export const RegisterScreen = () => {
    
    const dispatch = useDispatch();

    const [loginValues, handleInputChange] = useForm({
        name:'test',
        email: 'test@test.com',
        password: '123456',
        password2: '123456'
    })
    const {name, email, password, password2} = loginValues;
    

    const registerSubmit = (e) => {
        e.preventDefault();  

        // console.log(email, password, name);
        dispatch(startRegisterWithEmailAndPassword(email, password, name))
    }

    return (
        <div className='container'>
            <form className='form__container' onSubmit={registerSubmit}>
                    <h1 className='form__title'>Send File <CloudQueueIcon fontSize='large' className='ml-4'></CloudQueueIcon></h1>
                    
                    <div className='m-20 w-80'>
                        <TextField 
                            label='Name' 
                            type='text' 
                            className='w-100'
                            autoComplete='off' 
                            name='name'
                            value={name}
                            onChange={handleInputChange}
                        />
                    </div>

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

                    <div className='mb-20 w-80'>
                        <TextField 
                            label='Confirm Password' 
                            type='password' 
                            className='w-100' 
                            name='password2'
                            value={password2}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='m-20 w-80'>
                        <Button variant='outlined' color='primary' className='w-100' type='submit' onSubmit={registerSubmit}>Submit<PersonIcon></PersonIcon></Button>
                    </div>

                    <div>
                        <Link to='/auth/login' className='form__link'>Have you alredy an account?</Link>
                    </div>
            </form>            
        </div>
    )
}
