import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notFound";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact"
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/about" element={<AboutPage />} />  
        <Route path="/contact" element={<ContactPage/>} />  
        <Route path="/login" element={<LoginPage/>} />  
        <Route path="/signup" element={<SignupPage/>} />  
        <Route path="*" element={<NotFoundPage />} />  
      </Routes>
    </>
  );
}

export default App;
