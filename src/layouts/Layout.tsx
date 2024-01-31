import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../components/Header";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Layout: FC = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === "null") {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div>
      <Header />
      <Container
        maxWidth={false}
        sx={{
          height: "100%",
          py: "50px",
          backgroundColor: { xs: "#fff", md: "#f4f4f4" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
