import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Winners from "./pages/Winners";



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/winners" element={<Winners/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
