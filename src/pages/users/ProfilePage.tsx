import Grid from "@mui/material/Grid";
import WelcomeBack from "../../components/WelcomeBack";
import CardProfileInfo from "../../components/CardProfileInfo";
import { Container } from "@mui/material";

const ProfilePage = () => {
  return (
    <Container sx={{ py: 8, height: "100vh" }} maxWidth="lg">
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        style={{ padding: "40px" }}
      >
        <WelcomeBack />
        <CardProfileInfo />
      </Grid>
    </Container>
  );
};

export default ProfilePage;
