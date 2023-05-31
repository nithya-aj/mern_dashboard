import React from 'react'
import Grid from '@mui/material/Grid';
import { Box, Stack, Typography } from '@mui/material';
import SidebarCmp from '../components/SidebarCmp';
import Topbar from '../components/Topbar';
import Generalnfo from '../components/Generalnfo';
import LiveStatistics from '../components/LiveStatistics';
import DeviceStatus from '../components/DeviceStatus';
import ProjectOverview from '../components/ProjectOverview';
import ActivityLogs from '../components/ActivityLogs';
import DomainQuota from '../components/DomainQuota';
import headphone from '../images/headphone.png'
import left from '../images/left.png'
import DeviceLocation from '../components/DeviceLocation';

const HomePage = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid bgcolor={'#0B3366'} item xs={1.73} sx={{ color: 'white' }}>
          <SidebarCmp />
        </Grid>
        <Grid item bgcolor={'#F6F6F6'} xs={10.2}>
          <Stack>
            <Topbar />
            <Box sx={{ bgcolor: '#F6F6F6', height: "71px", width: '10px', position: 'fixed', top: '40%', borderRadius: '16px 0px 0px 16px', left: ' 214px', display: 'flex', alignItems: 'center' }}>
              <img src={left} alt="" style={{ height: '12px', width: '12px', opacity: '0.7' }} />
            </Box>
            <Box sx={{ p: '1rem 1.5rem 1.5rem 1.5rem' }}>
              <Typography style={{ fontWeight: 400, fontSize: '24px', marginBottom: '1rem' }}>Project</Typography>
              <ProjectOverview />
              <Box >
                <Grid container>
                  <Grid item xs={7.779}>
                    <Grid container spacing={1.5} mt='0rem'>
                      <Grid item xs={6} >
                        <Generalnfo />
                      </Grid>
                      <Grid item xs={6} >
                        <LiveStatistics />
                      </Grid>
                      <Grid item xs={6} >
                        <DeviceStatus />
                      </Grid>
                      <Grid item xs={6} >
                        <ActivityLogs />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4} p={'0.8rem 0rem 0rem 0.8rem'}>
                    <Stack spacing={2}>
                      <DeviceLocation />
                      <DomainQuota />
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Stack>
          <Box sx={{ position: 'fixed', right: 17, top: '90%', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>
            <img src={headphone} alt="" style={{ height: '48px', width: '48px' }} />
          </Box>
          <Box sx={{ height: '30px', bgcolor: "white", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ color: '#909090', fontSize: '12px', fontWeight: 400 }}>Copyright@2023.FutureIK</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage 