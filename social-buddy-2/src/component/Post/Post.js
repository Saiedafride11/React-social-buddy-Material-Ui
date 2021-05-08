import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './Post.css'

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
    const classes = useStyles();

    const [post, setPost] =  useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(info => {
            // console.log(info);
            setPost(info)
        })
    },[])
    return (
        <div className="post-wrapper">
             <h2>Featured Articles</h2>
            <div className="post-card">
                {
                    post.slice(0, 5).map(element => 
                        <>  
                            
                            <Card className={classes.root}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    {element.title}
                                   
                                </Typography>
                                <Typography  variant="subtitle1" color="textSecondary">
                                    {element.body}
                                </Typography>
                                <Link to={`/comment/${element.id}`}    >
                                    <Button variant="contained" color="primary" >Details</Button>
                                </Link>
                                </CardContent>
                                </div>
                                <CardMedia className={classes.cover}
                                image={`https://loremflickr.com/320/240?random=${element.id}`}
                                title="Live from space album cover"
                            />
                            </Card>
                        </>)
                    
                }

            </div>

            <Link to={`/allPost`} variant="contained" color="primary">
                <Button className="mx-auto d-block" variant="contained" color="primary" >View all post</Button>
            </Link>
            
        </div>
    );
};

export default Post;