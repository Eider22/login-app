import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import LoginComponent from "./components/LoginComponent";
import { AuthProvider } from "./contexts/authContext";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    
    <div className="App">
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
        
    </div>
  );
}

export default App;
