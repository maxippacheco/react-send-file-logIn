import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Navbar } from '../navbar/Navbar'

export const HomeScreen = () => {
  
  const { name } = useSelector(state => state.auth);

  return (
    <div>
        <Navbar />

              <ul>
                <li>Routes that I did: </li>
                <li>
                  <Link to='/user'>
                    User-settings
                  </Link>
                </li>
              </ul>

    </div>
  )
}
