import React from 'react';
import { Grid } from '@material-ui/core';
import { Navbar } from '../navbar/Navbar';
import userDefault from '../../img/userDefault.png';
import { useSelector } from 'react-redux';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';

export const UserProfile = () => {

    const { name, email } = useSelector(state => state.auth);
    const { public_key } = useSelector(state => state.keys);


    return (

        <div>
            <Navbar />


                <div className='user__container'>

                    <Grid className='user__data_container'>
                        <div className='user__data_img'>
                            <img src={userDefault} alt="user default" className='rounded' />
                            
                        </div>
                    
                        <div className='user__data_data'>
                            <div>
                                <PersonIcon className='color-444'></PersonIcon>
                                <div className='user__data_outputs_info'>
                                    { name.charAt(0).toUpperCase() + name.slice(1) }
                                </div>
                            </div>
                            <div>
                                <EmailIcon className='color-444'></EmailIcon>
                                <div className='user__data_outputs_info'>
                                    {email}
                                </div>
                            </div>
                            <div>
                                <VpnKeyIcon className='color-444'></VpnKeyIcon> 
                                <div className='user__data_outputs_info'>
                                    {public_key}
                                </div>
                            </div>
                        </div>
                    </Grid>

                </div>
            </div>
    )
}
