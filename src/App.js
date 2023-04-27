import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <div className="App">
      App
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<LoginComponent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
