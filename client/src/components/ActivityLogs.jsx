import React from 'react'
import { Box, Divider, Grid, Typography } from '@mui/material'
import up from '../images/up.png'
import down from '../images/down.png'
import devices from '../images/devices.png'
import cmd from '../images/cmd.png'
import plist from '../images/plist.png'

const ActivityLogs = () => {

    const datas = [
        {
            img: devices,
            name: 'Device',
            desc: 'FutureIK-device 1 report generated successfully',
            date: '16 Mar 2023,',
            time: '06:30:25 PM'
        },
        {
            img: cmd,
            name: 'Campaign',
            desc: 'FutureIK-cinemas Modified successfully',
            date: '16 Mar 2023, ',
            time: '06:30:25 PM'
        },
        {
            img: plist,
            name: 'Device',
            desc: 'FutureIK-device 1 report generated successfully',
            date: '16 Mar 2023, ',
            time: '06:30:25 PM'
        },
    ]

    return (
        <Box sx={{ height: '180px', p: '1rem 0rem 1rem 1rem', border: '1px solid rgba(223,223,223, 0.41)', borderRadius: '2px', bgcolor: 'white' }}>
            <Typography sx={{ fontWeight: 400, fontSize: '16px', my: '0.5rem' }}>Activity Logs</Typography>
            <Grid container >
                <Grid item xs={11.5}>
                    {datas.map((item) => (
                        <>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: '0.5rem' }}>
                                <img src={item.img} alt="" style={{ height: '13.46px', width: '14px', opacity: '0.4' }} />
                                <Box sx={{ width: '14rem' }}>
                                    <Typography sx={{ fontWeight: 400, color: '#545454', fontSize: '15px' }}>{item.name}</Typography>
                                    <Typography sx={{ fontWeight: 400, color: '#545454', fontSize: '10px' }}>{item.desc}</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: 400, color: '#909090', fontSize: '12px' }}>{item.date}</Typography>
                                    <Typography sx={{ fontWeight: 400, color: '#909090', fontSize: '12px' }}>{item.time}</Typography>
                                </Box>
                            </Box>
                            <Divider width={'97%'} />
                        </>
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

export default ActivityLogs