import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import './Allpost.css';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from "@material-ui/core/styles";
import BackToTop from '../UseScroll/UseScroll';

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




const Allpost = () => {
    const [allPost, setAllPost] = useState([]);
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/posts")
            .then(info => setAllPost(info.data))
    })
    const classes = useStyles();
    return (
        <div className="container my-5" >
            <Typography gutterBottom variant="h4" component="h4">
            Total {allPost.length}      Titile available right now : 
                                </Typography>
            
            <BackToTop></BackToTop>
            <div className="row">

                {
                    allPost.map(ele =>
                        <div className="col-lg-6">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={`https://loremflickr.com/600/400?random=${ele.id}`}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {ele.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {ele.body}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Link to={`/comment/${ele.id}`} variant="contained" color="primary">   <Button size="small" variant="contained" color="primary" >View  post</Button></Link>
                                </CardActions>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Allpost;