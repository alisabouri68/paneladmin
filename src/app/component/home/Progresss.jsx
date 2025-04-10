import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'20px',padding:'10px' }}>
            <CircularProgress color={"success"} variant="determinate" {...props} />
            <Box
                sx={{
                    top: -95,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    fontSize={30}
                    fontWeight={'bold'}
                    variant="caption"
                    component="div"
                    sx={{ color: 'text.secondary' }}
                >
                    {`${Math.round(props.value)}%`}
                </Typography>

            </Box>
            <Typography variant="body1" color="">My Progresss</Typography>
            <Typography variant="body1" color="textDisabled"></Typography>
            <Button variant="contained" color="success">
                more
            </Button>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
};

export default function Progresss() {
    return (
        <>
            <CircularProgressWithLabel size="15rem" value={75} />
        </>

    )
}