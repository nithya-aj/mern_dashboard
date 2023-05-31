import { Box, Typography } from '@mui/material'
import React from 'react'
import MapLocation from './MapLocation'

const DeviceLocation = () => {
    return (
        <Box sx={{ height: '262px', width: '429px', bgcolor: 'white' }}>
            <Typography sx={{ fontSize: '15px', p: '0.5rem' }}>Location - Devices</Typography>
            <Box sx={{  height:'14rem' }}>
                <MapLocation />
            </Box>
        </Box>
    )
}

export default DeviceLocation