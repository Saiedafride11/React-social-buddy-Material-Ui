import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import './Post.css';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "10px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
  },
  cover: {
    width: 200
  },

}));
const Post = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then(info => setPost(info.data))
  })
  const classes = useStyles();
  return (
    <div className="post-wrapper" >
      <h2>Featured Articles</h2>
      <div className="post-card ">
        {
          post.slice(0, 5).map(ele => <>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {ele.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {ele.body}
                  </Typography>
                  <Link to={`/comment/${ele.id}`}    >
                    <Button variant="contained" color="primary" >Details</Button>
                  </Link>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image={`https://loremflickr.com/600/400?random=${ele.id}`}
                title="Live from space album cover"
              />
            </Card>
          </>)
        }
      </div>

      <Link to={`/post/4${post}`} variant="contained" color="primary">
        <Button className="mx-auto d-block" variant="contained" color="primary" >View all post</Button>
      </Link>

    </div>
  );
};

export default Post;