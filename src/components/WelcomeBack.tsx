import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import avatar from "../assets/avatar.webp";

const WelcomeBack = () => {
  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Avatar
          alt="User Avatar"
          src={avatar}
          sx={{ width: 120, height: 120, margin: "0 auto 20px" }}
        />
        <Typography variant="h4" gutterBottom>
          Welcome Back
        </Typography>
        <Typography variant="body1">
          We're glad to see you again! Explore your profile and stay connected.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Edit Profile
        </Button>
      </Paper>
    </Grid>
  );
};

export default WelcomeBack;
