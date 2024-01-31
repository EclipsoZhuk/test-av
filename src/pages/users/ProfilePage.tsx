import Grid from "@mui/material/Grid";
import WelcomeBack from "../../components/WelcomeBack";
import CardProfileInfo from "../../components/CardProfileInfo";

const ProfilePage = () => {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="center"
      style={{ padding: "40px 0 40px", height: "100vh" }}
    >
      <WelcomeBack />
      <CardProfileInfo />
    </Grid>
  );
};

export default ProfilePage;
