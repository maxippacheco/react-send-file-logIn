import React from 'react'
import { CircularProgress } from '@material-ui/core'

export const LoadingScreen = () => {
    return (
        <div className='user__container'>
            <CircularProgress className='loader' />
        </div>
    )
}
