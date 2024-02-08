import React, {useState, useEffect} from 'react';
import { 
    Box,
    Button,
    Typography,
    Toolbar,
    Grid,
    Stack,
    Link,
} from "@mui/material";
import { InlineWidget } from "react-calendly";

import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

export default function Contact(){

    useEffect(() => {
        // Create the script element
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        
        // Append the script to the body
        document.body.appendChild(script);
        
        // Clean up the script when the component unmounts
        return () => {
          document.body.removeChild(script);
        };
    }, []); 

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2} sx={{ textAlign: "center", paddingTop: "40px" }}>
                <Typography fontSize={34} fontWeight={800}>
                    Contact
                </Typography>
                <Typography fontSize={20} fontWeight={700} sx={{ px: 2 }}>
                    Your success is our top priority.
                </Typography>
            </Stack>
            <Stack spacing={2} sx={{ textAlign: "left", paddingTop: "40px" }}>
                <Typography fontSize={16} fontWeight={400} sx={{ px: 2 }}>
                    We guarantee a response to all inquiries within 24 hours, because we understand the value of your time. During our consultation call, we'll dive deep into your business needs and explore how we can propel you towards your goals. And in the rare instance we're not the perfect fit, we're committed to guiding you to someone who can help. Let's start a conversation that could transform your business. Schedule your meeting today.
                </Typography>
            </Stack>
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ padding: "20px", paddingTop: "30px" }}>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className="calendly-inline-widget" data-url="https://calendly.com/ranjitmarathay/30min?hide_event_type_details=1&hide_gdpr_banner=1" style={{ minWidth: '320px', height: '700px' }}></div>
                </Grid>
            </Grid>
        </Box>
    )
}