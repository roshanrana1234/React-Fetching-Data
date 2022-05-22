import { Container, Typography, Button } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
// import { Link } from 'react-router-dom'
import Link from '@mui/material/Link';
const MuiBlogList = ({ blog1, title, }) => {
    return (
        <>
            <Typography
                variant="h4"
                gutterBottom>
                {title}
            </Typography>
            {blog1.map((value) => (
                < >
                    <div className="blog-preview" key={value.id} >
                        <Link
                            underline="none"
                            href={`/blogs/${value.id}`}
                            underlin='none'>

                            <Typography
                                variant="subtitle2"
                                component='div'
                                color="error"
                            >
                                {value.title}
                            </Typography>

                            <Typography
                                variant="h6"
                                paragraph
                            >
                                Written By {value.author}
                            </Typography>


                        </Link>
                    </div>
                </>
            ))
            }
        </>
    )
}

export default MuiBlogList