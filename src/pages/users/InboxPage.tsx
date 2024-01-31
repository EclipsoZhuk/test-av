import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container, Grid } from "@mui/material";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

export default function RecipeReviewCard() {
  const messages = useSelector((state: RootState) => state.message.inbox);

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={2}>
        {messages.map((message) => (
          <Grid key={message.id} item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 320 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {message.avatar}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={message.title}
                subheader={message.email}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {message.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
