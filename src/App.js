import Navbar from "./components/Navbar/Index";
import Hero from "./components/Hero/Index";
import { createTheme, ThemeProvider } from "@mui/material";
import SlideTest from "./components/SlideTest";


const theme = createTheme({
  palette:{
    secondary:{
      main: '#787878'
    },
    col:{
      customColor: 'red'
    }
  }
})

function App() {
 
  return (
    <ThemeProvider theme={theme}>
     <Navbar />
     <Hero />
     dsdsdsd
     dsdsdsd
     dsdsdsd
     dsdsdsd
    </ThemeProvider>
  );
}

export default App;
