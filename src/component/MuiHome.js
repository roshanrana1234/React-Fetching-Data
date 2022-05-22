
import { Typography } from "@mui/material";
import MuiBlogList from "./MuiBlogList";
import Usefetch from "./usefetch";

const MuiHome = () => {

    const { data: blogs, ispending, error } = Usefetch('http://localhost:8000/blogs')



    return (

        <>
            {error && <Typography variant="h3" color='error' textAlign='center' mt={10} >{error}</Typography>}
            {ispending && <Typography color="error" variant="h2" >Loding...</Typography>}
            {blogs && <MuiBlogList blog1={blogs} title='All My Blogs' />}
        </>

    )
}

export default MuiHome
