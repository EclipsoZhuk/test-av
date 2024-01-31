import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./store/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Route
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Layout from "./layouts/Layout";
import LoginPage from "./pages/auth/LoginPage";
import ProfilePage from "./pages/users/ProfilePage";
import InboxPage from "./pages/users/InboxPage";

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storageAuth = localStorage.getItem("auth");
    if (storageAuth) {
      dispatch(login(JSON.parse(storageAuth)));
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<Layout />}>
          <Route index element={<ProfilePage />} />
          <Route path="/profile/message" element={<InboxPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
