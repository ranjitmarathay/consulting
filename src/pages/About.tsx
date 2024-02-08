import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Stack,
    Paper,
} from "@mui/material";

import picture from "../images/picture.jpeg";

export default function About(){
    return (
        <Box sx={{ width: '100%', pt: '40px' }}>
            <Typography sx={{ fontSize: 34, fontWeight: 800, textAlign: 'center', mb: 4 }}>
                About
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6} md={3} lg={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={picture} alt="Your Name" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: "20px" }}>
                        <Typography variant="body1" sx={{ fontWeight: 700 }}>
                            Ranjit Marathay
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} md={3} lg={2}>
                    <Stack spacing={2}>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            Who I Am
                        </Typography>
                        <Typography variant="body1">
                            Ranjit is a software engineer with a passion for technology and business optimization. After earning a degree from Rensselaer Polytechnic Institute in Computer Science, he honed his skills at a data analytics, a cybersecurity and a property management start up before starting his consulting practice.
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            My Journey
                        </Typography>
                        <Typography variant="body1">
                            Starting my career as [Your Initial Job Position], I quickly realized the importance of [something you learned or experienced]. Over the years, I've had the privilege to work with [mention any renowned companies or projects, if applicable], allowing me to deepen my expertise in [Your Area of Expertise] and make a real impact in [Industry/Field].
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            Unique Skills
                        </Typography>
                        <Typography variant="body1">
                            Today, I leverage my extensive background in [Your Professional Background] to provide [services you offer or contributions you make to your field or company]. I'm committed to [what you're passionate about professionally], and I'm always looking for new ways to [goal or mission related to your profession].
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
        // <Box sx={{display: "flex"}}>
        //     <Stack>
        //         <Box
        //             sx={{
        //                 textAlign: "center",
        //                 paddingTop: "40px"
        //             }}
        //         >
        //             <Typography fontSize={34} fontWeight={800}>
        //                 About
        //             </Typography>
        //         </Box>
        //     </Stack>
        // </Box>
    )
}