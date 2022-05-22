import { Typography, Button } from "@mui/material"
import { useParams } from "react-router-dom";
import Usefetch from "./usefetch";
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from "react-router-dom";


const MuiBlogDetail = () => {
    const { id } = useParams();

    const { data: blog, error, ispending } = Usefetch('http://localhost:8000/blogs/' + id);

    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate("/home")
        })
    }

    return (
        <>
            {/* <div>
                {ispending && <div>Loadiing...</div>}
                {error && <div>{error}</div>}
                {blog && (
                    <article>
                        <h1>{blog.title}</h1>
                        <p>Written By {blog.author}</p>
                        <div>{blog.body}</div>
                    </article>
                )}
                <p>This is detaill-{id}</p>
            </div> */}

            <Typography
                variant="h5"
                component='h2' >
                {ispending && <Typography variant="h5">Loading</Typography>}
                {error && <Typography>{error}</Typography>}
                {blog && (
                    <article>
                        <Typography
                            variant="h5"
                            color='error' >
                            {blog.title}
                        </Typography>
                        <Typography
                            color='secondary'
                            variant="subtitle2"
                        >Written by {blog.author}
                        </Typography>
                        <Typography
                            variant="subtitle2">
                            {blog.body}
                        </Typography>

                        <Button
                            size="small"
                            endIcon={<RemoveIcon />}
                            variant="contained"
                            color="error"
                            onClick={handleClick}
                        >Delete
                        </Button>

                    </article>

                )}

            </Typography>
        </>
    )
}

export default MuiBlogDetail;