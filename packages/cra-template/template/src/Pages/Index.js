import React from 'react';

import desk from '../assets/deskspace.jpg';

const MainPage = () => {
  return (
    <div>
      <div className="Content-Wrap">
        <div className="Main-Content">
          <h1 className="App-Subtitle">Full Stack Developer</h1>
          <p className="Summary">
            Looking to work in a professional development environment where I
            can develop my technical skills and work with new technologies to
            create meaningful and interesting solutions and products for
            clients. As well as work in team environment to create new
            relationships and meet likeminded people who share my passion for
            technology.
          </p>

          {/* <img src={desk} alt="Logo" className="Image-Content" /> */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
