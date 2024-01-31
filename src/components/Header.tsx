import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { login } from "../store/authSlice";

const Header = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    dispatch(login(null));
    navigate("/");
  };

  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AV Task
        </Typography>

        <Box>
          {user && (
            <>
              {pathname === "/profile" ? (
                <Link to={"/profile/message"}>
                  <Button sx={{ color: "#fff" }}>message</Button>
                </Link>
              ) : (
                <Link to={"/profile"}>
                  <Button sx={{ color: "#fff" }}>profile</Button>
                </Link>
              )}
              <Button onClick={handleLogOut} sx={{ color: "#fff" }}>
                logOut
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
