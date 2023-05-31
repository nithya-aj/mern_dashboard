import React from 'react'
import account from '../images/account.png'
import notification from '../images/notification.png'
import headset from '../images/headset.png'
import { Box } from '@mui/material'

const Topbar = () => {
    return (
        <Box bgcolor={'#FAFAFA'} sx={{ height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', }}>
            <Box sx={{ paddingRight: '33.36px' }}>
                <img src={headset} alt="" style={{ height: '24px', width: '26.61px', opacity: '0.7', marginLeft: '15px' }} />
                <img src={notification} alt="" style={{ height: '24px', width: '26.61px', opacity: '0.7', marginLeft: '15px' }} />
                <img src={account} alt="" style={{ height: '24px', width: '26.61px', opacity: '0.7', marginLeft: '15px' }} />
            </Box>
        </Box>
    )
}

export default Topbar