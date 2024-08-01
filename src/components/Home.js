import React from 'react';

const Home = () => {
  return (
    <div className="Home">
      <div className="HomeLeft">
        <h1>Mercedes-Benz G 63 AMG Brabus 800 Widestar<span className="pointH1">.</span></h1>
        <p>Bienvenue chez designCar, où l'innovation rencontre l'excellence dans la conception automobile. <br/>
        Découvrez la puissance et le luxe de la Mercedes-Benz G 63 AMG Brabus 800 Widestar.</p>
        
        <div className="goingS2a">
          <a href='https://mysite-fbcd68.webflow.io/' target="_blank" rel="noopener noreferrer">
            <div className="goingS2b"> 
              <img src="arrow (2).png" alt="Flèche pointant vers l'avant"></img>
            </div>
          </a>
        </div>
      </div>

      <div className="HomeRight">
        <div className="HomeRightTop">
          <h2> Notre Savoir-Faire<span className="pointH1">.</span></h2>
          <p>Chez designCar, nous excellons dans la présentation de designs automobiles avant-gardistes 
            qui suscitent l'engagement et les résultats. Explorez notre gamme de services 
            et restez informé des dernières innovations et tendances en matière de design automobile.</p>
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
