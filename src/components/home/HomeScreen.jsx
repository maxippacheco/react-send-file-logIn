import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout, startLogout } from '../../actions/auth'
import { Navbar } from '../navbar/Navbar'

export const HomeScreen = () => {
  
  const dispatch = useDispatch();

  const handleLogout = () => {
    
    dispatch(startLogout());

  }

  return (
    <div>
        <Navbar />

        <div className='mt-5'>
        <Button onClick={handleLogout} variant='contained' color='primary'>Log Out</Button>  

        </div>

    </div>
  )
}
