import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Stack,
} from "@mui/material";
import Offerings from "../components/Offerings.tsx";
import { CustomButton } from "../components/Buttons.tsx";

export default function Services(){
    return (
        <Box sx={{display: "flex"}}>
            <Stack>
                <Box
                    sx={{
                        textAlign: "center",
                        paddingTop: "40px"
                    }}
                >
                    <Typography fontSize={34} fontWeight={800}>
                        Services
                    </Typography>
                </Box>
                <Box sx={{padding: "40px"}}>
                    <Typography fontSize={16} fontWeight={400}>
                            We excel in navigating your business through pivotal transitions, such as new acquisitions, expansions, and comprehensive IT system updates, ensuring seamless integration and enhanced operational efficiency.
                    </Typography>
                </Box>
                <Offerings/>
                <Box
                    sx={{
                        textAlign: "center",
                        paddingTop: "40px"
                    }}
                >
                    <CustomButton message="Contact Us" navigateTo="/contact"/>
                </Box>
            </Stack>
        </Box>
    )
}