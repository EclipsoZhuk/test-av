import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../components/Header";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import cabinetBg from "../assets/cabinet-bg.webp";

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
    <>
      <Header />
      <Container
        maxWidth={false}
        sx={{
          height: "100%",
          pt: "50px",
          backgroundColor: { xs: "#fff", md: "#f4f4f4" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          backgroundImage: `url(${cabinetBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
