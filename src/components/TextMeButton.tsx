import React from 'react';
import { Button } from "@mui/material";

const TextMeButton = () => {

    const phoneNumber = "+14084761238";
    const email = "rmarathay+consulting@gmail.com"
    const emailMessage = "Hello, I would like to chat about a custom data solution!\n\nMy name is:\n\nThe name of my business is:\n\nMy website is:\n\nThe problem I am facing is:\n\n Thanks!\n <Your Name>"
    // const textMessage = "Hi,%I%would%like%to%chat%about%a%custom%data%solution!"

    const handleClick = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Mobile device detected
            window.open(`sms:${phoneNumber}`);
        } else {
            // Non-mobile device, prompt to manually send a message
            window.open(`mailto:${email}?body=${encodeURIComponent(emailMessage)}`)
        }
    }

    const detectDevice = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Mobile device detected
            return "Text";
        } else {
            // Non-mobile device, prompt to manually send a message
            return "Email";
        }
    }

    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: "#FFD700",
                color: "black",
                href: "sms:+1234567890?body=Hello, I would like to chat!",
                borderRadius: "10px",
                padding: "10px",
                fontSize: "20px",
                fontWeight: 600,
                width: "70%",
                '&:hover': {
                    backgroundColor: "#FFD700",
                    color: "black",
                },
            }}
            onClick={() => handleClick()}
        >
            {detectDevice()} Ranjit to Learn More 
        </Button>
    )
}

export default TextMeButton;