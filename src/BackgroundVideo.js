import React from 'react';
import classes from './BackgroundVideo.module.css';
import logo from './logo.png';

const BackgroundVideo = () => { 
    const videoSource = "https://offset-earth-wp-assets.s3-eu-west-1.amazonaws.com/hero-video.mp4"
    return ( 
      <div className={classes.Container} >
     <img src={logo} className={classes.Image} alt="logo" />
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video} > 
        <source src ={videoSource} type="video/mp4" />
        </video>
      </div>

      
    )
    }

    export default BackgroundVideo