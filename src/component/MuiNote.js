import { Typography, Stack, TextField, Box, Container, MenuItem, Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MuiNote = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('roshan Rana')
    const [ispending, setIsPending] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // e.preventDefalult();
        const blog = { title, body, author };

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('a new blog added')
            setIsPending(false)
            navigate('/home')
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit} >

                <Container maxWidth="md"  >
                    <Box m={3}  >
                        <Typography
                            gutterBottom
                            variant="h4"
                            color='secondary' >
                            Add A Note
                        </Typography>
                        <Stack direction='column' spacing={4}>
                            <TextField label='Blog Title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                variant="outlined"
                                required
                            ></TextField>


                            <TextField
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                label='Blog Body' variant="outlined"
                                required
                            ></TextField>



                            <Box width='250px'
                            >
                                <TextField
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    label="Author " select>
                                    <MenuItem value="roshan Rana" >roshan Rana </MenuItem>
                                    <MenuItem value="Tanu Rana" >Tanu Rana </MenuItem>
                                </TextField>

                            </Box>


                            {!ispending &&
                                <Button
                                    onClick={handleSubmit}
                                    endIcon={<AddIcon />}
                                    color="success"
                                    variant="contained"
                                >
                                    Submit
                                </Button>
                            }
                            {ispending &&
                                <Button
                                    disabled
                                    onClick={handleSubmit}
                                    endIcon={<AddIcon />}
                                    color="error"
                                    variant="contained"
                                >
                                    Adding Blog....
                                </Button>


                            }



                            {/* <button>
                                submit
                            </button> */}

                        </Stack>

                    </Box>




                </Container>
            </form>


        </>
    )
}

export default MuiNote