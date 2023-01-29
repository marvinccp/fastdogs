import React from "react";
const Home = () => {
  return (
    <div>
      <video style={{objectFit:'cover', position:'absolute', zIndex:'-3', top: '0', left:'0',width:'100%', height:'100vh'}} autoPlay loop muted width="100%" height="100%">
        <source src="./assets/videos/video-hot-dog.mp4" type="video/mp4" />
      </video>
      <div style={
        {width:'100%', 
        height:'90vh',
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center'
        }
        }>

      <img style={{ width:'50%', zIndex:'-2'}} src="./assets/images/fastdogstittle.png" alt="fd" />
      </div>
    </div>
  );
};

export default Home;
