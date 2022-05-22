import { Container } from "@mui/material"
import MuiNavBar from "./component/MuiNavBar"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MuiHome from "./component/MuiHome";
import MuiContact from "./component/MuiContact";
import MuiNote from "./component/MuiNote";
import MuiLink from "./component/MuiLink";
import MuiBlogDetail from "./component/MuiBlogDetail";
// import MuiFooter from "./component/MuiFooter";
// import MuiNote from "./component/MuiNote";


const App = () => {
  return (
    <>

      <Container>
        <BrowserRouter>
          <MuiNavBar />
          <Routes>
            <Route path="/home" element={<MuiHome />} />
            <Route path="/contact" element={<MuiContact />} />
            <Route path="/notes" element={<MuiNote />} />
            <Route path="/blogs/:id" element={<MuiBlogDetail />} />
            {/* <Route path="/link" element={<MuiLink />} /> */}
          </Routes>
          {/* <MuiFooter /> */}
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App