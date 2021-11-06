import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';

const MaterialUi = () => {

    const onClick = () => {
        console.log('You clicked me.')
    }

    return (
        <Container
            maxWidth = "xl"
            align = "left"
        >
            <Typography
                align = "left"
                variant = "h6"
                marginTop = {2}
                gutterBottom
                color = "textSecondary"
            >
                Create New Note
            </Typography>

            <Button
                onClick = {onClick}
                type = "submit"
                variant = "contained"
                color = "primary"
                endIcon = {<SendIcon/>}
            > SEND </Button>
        </Container>
    )
}

export default MaterialUi
