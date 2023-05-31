import { Box, Button, Grid, Typography } from '@mui/material'   
import React from 'react'
import up from '../images/up.png'
import down from '../images/down.png'
import lft from '../images/lft.png'
import rht from '../images/rht.png'

const DeviceStatus = () => {

    const items = [
        {
            id: '1',
            name: 'Test device 01',
            status: 'Online',
            time: 'Wed Apr 26 2023 ; 03:00:10'
        },
        {
            id: '2',
            name: 'Test device 02',
            status: 'Online',
            time: 'Wed Apr 26 2023 ; 15:00:10'
        },
        {
            id: '3',
            name: 'Test device 03',
            status: 'Offline',
            time: 'Wed Apr 26 2023 ; 20:00:10'
        },
        {
            id: '4',
            name: 'Test device 04',
            status: 'Offline',
            time: 'Wed Apr 26 2023 ; 10:00:10'
        },
        {
            id: ' 5',
            name: 'Test device 05',
            status: 'Online',
            time: 'Wed Apr 26 2023 ; 12:00:10 '
        },
    ]

    return (


        <Box sx={{ height: '180px', p: '1rem 0rem 1rem 1rem', border: '1px solid rgba(223,223,223, 0.41)', borderRadius: '2px', bgcolor: 'white' }}>
            <Typography sx={{ fontWeight: 400, fontSize: '16px', my: '0.5rem' }}>Device Status</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: '0.5rem' }}>
                <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#545454' }}>Device Status</Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#545454', }}>Status</Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#545454', mr: '7.5rem' }}>Last Responce</Typography>
            </Box>
            <Grid container >
                <Grid item xs={11.5}>
                    {items.map((item) => (
                        <Box sx={{ display: 'flex', alignItems: 'center', pb: '0.5rem', backgroundColor: item.id % 2 === 1 ? '#F6F6F6' : 'transparent', gap: 1.5 }}>
                            <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#545454' }}>{item.name}</Typography>
                            {item.status === "Online" ? (<Button size='sm' contained variant="contained" sx={{ backgroundColor: '#009421', textTransform: 'none', height: '14px', width: '37px', fontSize: '10px', fontWeight: '400' }}>{item.status}</Button>) :
                                <Button size='sm' contained variant="contained" sx={{ backgroundColor: '#E40404', textTransform: 'none', height: '14px', width: '37px', fontSize: '10px', fontWeight: '400' }}>{item.status}</Button>
                            }
                            <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#545454' }}>{item.time}</Typography>
                            {item.id === '2' && <img src={rht} style={{ height: '12px', width: '12px', opacity: '0.3' }} alt="" />}
                            {item.id === '4' && <img src={lft} style={{ height: '12px', width: '12px', opacity: '0.3' }} alt="" />}
                        </Box>
                    ))}
                </Grid>
                <Grid item xs={0.5}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'column', gap: 0.5 }}>
                        <img src={up} alt="" style={{ height: '6px', width: '8px', opacity: '0.4' }} />
                        <Box sx={{ height: '6.5rem', width: '8px', backgroundColor: '#D9D9D9', borderRadius: '22px' }}></Box>
                        <img src={down} alt="" style={{ height: '6px', width: '8px', opacity: '0.4' }} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DeviceStatus