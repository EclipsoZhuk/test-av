import { Divider, Grid, Paper, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const CardProfileInfo = () => {
  const info = useSelector((state: RootState) => state.user.infoProfile);

  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          {info.fullName}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {info.subtitle}
        </Typography>
        <Divider style={{ margin: "16px 0" }} />
        <Typography variant="body1">{info.description}</Typography>
        <Divider style={{ margin: "16px 0" }} />
        <Grid container spacing={1}>
          <Grid item xs={5}>
            <Typography variant="body2">
              <LocationOnIcon /> {info.city}, {info.country}
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body2">
              <EmailIcon /> {info.email}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default CardProfileInfo;
