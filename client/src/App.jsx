// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./components/login-page";
import RegisterPage from "./components/RegisterPage";
import PrivateRoute from "./components/PrivateRoute";
import MainPage from "./pages/alternative-futures-dashboard";
import { UserProvider } from "./Context/useContext";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    // <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Toaster position="top-right" />
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/main"
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            />
            <Route path="/tyf" element={<MainPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
    // </React.StrictMode>
  );
}

export default App;
