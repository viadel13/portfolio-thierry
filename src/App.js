import Navbar from "./components/Navbar/Index";
import Hero from "./components/Hero/Index";
import { createTheme, ThemeProvider } from "@mui/material";


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
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
     <div>dsds</div>
    </ThemeProvider>
  );
}

export default App;
