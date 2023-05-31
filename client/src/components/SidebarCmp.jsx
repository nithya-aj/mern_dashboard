import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import dashboard from '../images/dashboard.png'
import channels from '../images/network.png'
import history from '../images/history.png'
import mediaLibrary from '../images/playlist.png'
import display from '../images/display.png'
import zones from '../images/zones.png'
import commands from '../images/terminal.png'
import cmp from '../images/cmp1.png'
 
const SidebarCmp = () => {
    return (
        <>
            <Box sx={{ height: '6.125rem' }}>   
                <img src={''} alt="" />
            </Box>
            <Stack spacing={1}>
                <Box sx={{ height: '2rem', display: 'flex', alignItems: 'center', gap: 2, bgcolor: '#082A56' }}>
                    <img src={dashboard} alt="" style={{ width: '20px', height: '19.7px', paddingLeft: '33px' }} />
                    <Typography sx={{ fontSize: '16px', lineHeight: '24px' }}>Dashboard</Typography>
                </Box>
                <Box sx={{ height: '2rem', display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img src={cmp} alt="" style={{ width: '20px', height: '19.7px', paddingLeft: '33px' }} />
                    <Typography>Campaigns</Typography>
                </Box>
                <Box sx={{ height: '2rem', display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img src={commands} alt="" style={{ width: '20px', height: '19.7px', paddingLeft: '33px' }} />
                    <Typography>Commands</Typography>
                </Box>
                <Box sx={{ height: '2rem', display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img src={zones} alt="" style={{ width: '20px', height: '19.7px', paddingLeft: '33px' }} />
                    <Typography>Zones</Typography>
                </Box>
                <Box sx={{ height: '2rem', display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img src={channels} alt="" style={{ width: '20px', height: '19.7px', paddingLeft: '33px' }} />
                    <Typography>Channels</Typography>
                </Box>
                <Box sx={{ height: '2rem', display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img src={display} alt="" style={{ width: '20px', height: '19.7px', paddingLeft: '33px' }} />
                    <Typography>Devices</Typography>
                </Box>
                <Box sx={{ height: '2rem', display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img src={mediaLibrary} alt="" style={{ width: '20px', height: '19.7px', paddingLeft: '33px' }} />
                    <Typography>Media Library</Typography>
                </Box>
                <Box sx={{ height: '2rem', display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img src={history} alt="" style={{ width: '20px', height: '19.7px', paddingLeft: '33px' }} />
                    <Typography>History</Typography>
                </Box>
            </Stack>
        </>
    )
}

export default SidebarCmp