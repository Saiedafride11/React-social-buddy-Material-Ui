import React, { useState, useEffect } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from "@material-ui/core/styles";
import './AllPost.css'

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        margin: "20px"
    },
    paper: {
        height: "100%",
        width: 500,
    },
    media: {
        height: 200,
    },

});
const AllPost = () => {
    const [allPost, setAllPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(info => {
            console.log(info);
            setAllPost(info)
        })
    }, []);
    const classes = useStyles();
    return (
        <div className="container my-5">
            <Typography gutterBottom variant="h4" component="h4">
                Total {allPost.length} Titile available right now :
             </Typography>
            <div className="row">
                {
                    allPost.map(element =>
                        <div className="col-lg-6">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={`https://loremflickr.com/600/400?random=${element.id}`}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {element.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {element.body}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Link to={`/comment/${element.id}`} variant="contained" color="primary">   <Button size="small" variant="contained" color="primary" >View  post</Button></Link>
                                </CardActions>
                            </Card>
                        </div>
                    )
                }
                
            </div>
        </div>
    );
};

export default AllPost;