import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { Map } from '../Components/Map/Map'
import { DashBox } from '../Components/DashBox'
import { DevicesList } from '../Components/Table/DevicesList'
import { TitleBox } from '../Components/TitleBox'
import { BarChart } from '../Components/Chart/BarChart'
import { GroupMeasures } from '../Components/Measures/GroupMeasures'

import './Dashboard.css'

export const Dashboard = () => {
    return (
        <>

            <div className='blur_effect'>
                <Box bgcolor={'secondary.light'} minHeight={'100vh'} maxWidth={'100vw'} pt={10} justifyContent={'center'} display={'flex'} pb={2} >

                    <Grid container width={'99%'} spacing={4} display={'flex'}>

                        <Grid item xs={12} md={4}>

                            <DashBox height={'50vh'} width={'100%'} component={Paper} elevation={6}>
                                <Map />
                            </DashBox>

                        </Grid>

                        <Grid item xs={12} md={8}>

                            <DashBox component={Paper} elevation={6} height={'50vh'} bgcolor={'primary.contrastText'} p={2}>

                                <TitleBox title={'Devices'} />
                                <DevicesList />

                            </DashBox>

                        </Grid>

                        <Grid item xs={12} md={12} lg={6}>

                            <DashBox component={Paper} elevation={6} height={'50vh'} bgcolor={'primary.contrastText'} p={2}>
                                <TitleBox title={'Medición'} />
                                <BarChart />

                            </DashBox>

                        </Grid>

                        <Grid item xs={12} md={12} lg={6}>

                            <GroupMeasures />

                        </Grid>

                    </Grid>

                </Box>

            </div>
        </>
    )
}
