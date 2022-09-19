import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default () => (
    <div style={{ height: 900, width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    </div>
)