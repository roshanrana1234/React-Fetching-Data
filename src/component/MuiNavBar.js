import {
    AppBar, Toolbar, Button, Typography
    , IconButton, Stack, Link
} from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddIcon from '@mui/icons-material/Add';
// import { Link } from "react-router-dom";
const MuiNavBar = () => {
    return (
        <>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton
                        href="/"
                        edge='start'
                        size="large"
                        color="inherit" >
                        <WhatsAppIcon />
                    </IconButton>
                    <Typography

                        m={1}
                        variant='h5'
                        component='div'
                        sx={{ flexGrow: 1 }}>
                        RR notes
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={2} >
                        <Button
                            href="/home"
                            color="inherit" >
                            Home
                        </Button>
                        <Button
                            href="/contact"
                            color="inherit"
                        >Contact
                        </Button>
                        <Button
                            href="/notes"
                            size="small"
                            endIcon={<AddIcon />}
                            color="error"
                            variant="contained"
                        >

                            Note
                        </Button>
                        {/* <Link
                            p={2}
                            // component='button'
                            href="/link" color='inherit'
                            variant="button"
                            underline="none" >
                            Link
                        </Link> */}
                        {/* <Link
                            component='button'
                            href="#" color='inherit'
                            variant="button"
                            underline="none" >
                            Contact
                        </Link>

                        <Link
                            component='button'
                            href="#" color='inherit'
                            variant="button"
                            underline="hover" >
                            add Notes
                        </Link>  */}

                        {/* <h1>This is main</h1> */}

                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default MuiNavBar