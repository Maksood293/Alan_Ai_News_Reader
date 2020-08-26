import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  Button,
  Typography,
  CardContent,
} from "@material-ui/core";
import useStyle from "./styles";

const NewsCard = ({
  article: { description, publishedAt, title, url, urlToImage, source, author },
  i,
}) => {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} image={urlToImage} />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}{" "}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}{" "}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">
          {title}{" "}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Learn More..
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}{" "}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
