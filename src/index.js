import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Body from "./Components/Body.js";
import Profile from "./Components/ProfileImg.js"

const Main = () => {
  return (
    <>
      <Profile />
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));