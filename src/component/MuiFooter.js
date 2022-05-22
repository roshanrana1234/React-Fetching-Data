import { Container, Stack, Button, IconButton, Typography, Box } from "@mui/material"
const MuiFooter = () => {
    return (
        <>
            <Box bgcolor='black' height='250px' mt={39.3} >
                <Stack direction='row' spacing={3} >
                    <Stack m={4} >
                        <Typography color='white' justifyContent='center' ml={2} >
                            COMPANY
                        </Typography>
                        <Button>About Us</Button>
                        <Button>Blog</Button>
                        <Button>jobs</Button>
                        <Button>Contact Us</Button>
                        <Button> News</Button>
                    </Stack>
                    <Stack>
                        <Button></Button>
                        <Button></Button>
                        <Button></Button>
                        <Button></Button>
                    </Stack>
                </Stack>

            </Box>
        </>
    )
}

export default MuiFooter