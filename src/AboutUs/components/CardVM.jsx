import { Box, Paper, styled } from '@mui/material'
import React from 'react'

export const CardVM = styled(Box)(({ theme }) => ({

    height: 'auto',
    borderRadius: '20px',
    borderColor: theme.palette.primary.main,
    borderStyle: 'hidden',
    borderWidth: '1px',
    transition: 'all 0.3s',

    ":hover": {

        transform: 'scale(1.01)',
        backgroundColor: theme.palette.primary.light

    },

}))


