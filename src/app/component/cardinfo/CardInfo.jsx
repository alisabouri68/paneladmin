import React from 'react'
import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";
function CardInfo({ t1, t2, t3, t4, icon,color }) {
    return (
        <Grid
            container
            direction={"column"}
            size={{ xs: 12, sm: 6, md: 4 }}
            boxShadow={3}
            padding={2}
            spacing={5}
        >
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
                <Stack spacing={2}>
                    <Box>
                        <Typography variant="body1" color="" fontWeight={"bold"}>
                            {t1}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" fontWeight={"bold"} color="">
                            {t2}
                        </Typography>
                    </Box>
                </Stack>
                <Box>
                    <Avatar sx={{ width: 56, height: 56 }}>
                        {icon}
                    </Avatar>
                </Box>
            </Stack>
            <Divider />
            <Stack display={"flex"} flexDirection={"row"} alignItems={"cventer"}>
                <Typography variant="subtitle1" color={color} fontWeight={"bold"}>
                    {t3}
                </Typography>
                <Typography variant="subtitle1" color="textDisabled">
                    {t4}
                </Typography>
            </Stack>
        </Grid>
    )
}

export default CardInfo