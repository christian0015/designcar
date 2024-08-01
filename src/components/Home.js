import React from 'react';

const Home = () => {
  return (
    <div className="Home">
      <div className="HomeLeft">
        <h1>New Digital Experiences<span className="pointH1">.</span></h1>
        <p>Welcome to Christo, where innovation meets excellence in web design and digital transformation. <br/>
        Elevate your online presence and drive results.</p>
        
        <a href='https://mysite-fbcd68.webflow.io/'>
          <div className="goingS2a">
            <div className="goingS2b"> 
              <img src="arrow (2).png" alt="Description of image" ></img>
            </div>
          </div>
        </a>
      </div>

      <div className="HomeRight">
        <div className="HomeRightTop">
        <h2>Our Expertise <span className="pointH1">.</span></h2>
        <p>At Christo, we excel in crafting cutting-edge web designs 
          that drive engagement and results. Explore our array of services 
          and stay informed about the latest design innovations and trends.</p>

        </div>
        <div className="avis">
          <div className="profil">
            <div>
              <img src="investisseurs/diddi.jpg" alt="Description of image"></img>
              <img src="investisseurs/leonie.jpg" alt="Description of image"></img>
              <img src="investisseurs/gabriella.jpg" alt="Description of image"></img>
              <img src="investisseurs/christian.jpg" alt="Description of image"></img>            
            </div>
            
            <p>Nos avis ...</p>
            <a href='https://www.tiktok.com/@christian_tukunda'>
              <div className="goingS3b"> 
                <img src="arrow (3).png" alt="Description of image" ></img>
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
