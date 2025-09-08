import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notFound";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./routes/privateRoute";
import AuthRoute from "./routes/authRoute";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<AuthRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
