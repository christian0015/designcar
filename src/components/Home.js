import React from 'react';

const Home = () => {
  return (
    <div className="Home">
      <div className="HomeLeft">
        <h1>WE BLUID DIGITAL<span className="pointH1">.</span></h1>
        <p>Welcome to the DesignCar website! <br/>
        Here you can find all the information about our company and our services.</p>
        <div className="photo">GO</div>
      </div>

      <div className="HomeRight">
        <div className="HomeRightTop">
          <h2>WHAT WE DO <span className="pointH1">?</span></h2>
          <p>We specialiste to the DesignCar website! <br/>
          Here you can find all cars et trend or services.</p>
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
            </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
