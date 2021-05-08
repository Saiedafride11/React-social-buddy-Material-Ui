import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import Post from '../Post/Post';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div style={{display: 'flex', backgroundColor: '#ecf0f1'}}>
                <div style={{width: '73%'}}>
                    <Post></Post>
                </div>
                <div style={{width: '27%'}}>
                    <Catagory></Catagory>
                </div>
            </div>
        </div>
    );
};

export default Home;