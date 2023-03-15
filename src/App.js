import "./App.css";
import Login from "./Components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  if (localStorage.getItem("token") != null) {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  else{
    return(
      <div>
        <Dashboard />
      </div>
    )
  }
}

export default App;
