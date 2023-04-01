import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Hompage from "./modules/home/Hompage";
import Details from "./modules/details/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/home`} element={<Hompage />} />
        <Route path={`/`} element={<Hompage />} />
        <Route path={`/:id`} element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
