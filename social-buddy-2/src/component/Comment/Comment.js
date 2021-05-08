import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from "@material-ui/core/styles";
import './Comment.css';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        maxWidth: "%",
        margin: "20px"
    },
    media: {
        height: 200,
    },
});
const useStyless = makeStyles((theme) => ({
    root: {
        display: "flex",
        margin: "40px"
    },
    details: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    cover: {
        width: 100,
        border: "1px solid #ddd",
        borderRadius: "50%",
        padding: 10,
        margin: 10,
        height: "80px"
    },

}));
const Comment = () => {
    const {id} = useParams();
    const [setPost, setGetPost] =  useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(info => {
            // console.log(info);
            setGetPost(info)
        })
    },[id]);

    const [comment, setComment] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(info => {
            // console.log(info);
            setComment(info)
        })
    },[id])

    const classes = useStyles();
    const classess = useStyless();
    return (
        <div className="comment-wrapper">
            <div className="row mx-auto">
                <div className="col-lg-6 mx-auto">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={`https://loremflickr.com/320/240?random=${setPost.id}`}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {setPost.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                           {setPost.body}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <small>{comment.length} people Comment in here</small>
                    <div className="comment-Header" >
                        <Button >Like</Button>
                        <Button >Comment</Button>
                        <Button >Share</Button>
                    </div>
                    {
                        comment.map(ele => <>
                            <Card className={classess.root}>
                               <CardMedia
                               className={classess.cover}
                               image={`https://loremflickr.com/600/400?random=${ele.id}`}
                               title="Live from space album cover"
                            />
                                <div className={classess.details}>
                                    <CardContent className={classess.content}>
                                        <Typography component="h6" variant="h6">
                                            {ele.name}
                                        </Typography>
                                        <Typography variant="small" color="textSecondary">
                                            <small>Email : {ele.email}</small>
                                        </Typography>
                                        <Typography component="p" variant="p">
                                            {ele.body}
                                        </Typography>
                                    </CardContent>
                                    <CardContent>
                                    <Button variant="contained" color="primary" >Like</Button>
                                    </CardContent>
                                </div>
                            </Card>
                        </>)
                        }
                        <Box className="write-comment" >
                        <Typography component="h6" variant="h6">
                        Write your comment
                                            </Typography>

                            <textarea Placeholder="write a comment" ></textarea>
                        </Box>
                </Card>
                </div>
            </div>
        </div>
    );
};

export default Comment;