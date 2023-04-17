import Login from "./views/loginPage";
import Register from "./views/signupPage";
import RegisterForm from "./views/signupForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className = "App">
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/registerForm" element={<RegisterForm/>}/>
    </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;