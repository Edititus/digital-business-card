//  import React from 'react'
import "./main.css";
import profilePicture from "../../assets/Edi.jpeg";
import email from "../../assets/Icon.png"
const Main = () => {
  return (
    <main className="container">
      <img src={profilePicture} alt="Profile Picture" className="img" />
      <div className="inner-div">
        <h1 className="text-style">Ediomo Titus</h1>
        <h4 className="text-style">Fullstack Developer(Node.Js)</h4>
        <h5 className="text-style">tediomo.et@gmail.com</h5>
        <button>
          <img src={email} alt="emailicon" className="email"/>
          Email</button>
        <h2>About</h2>
        <p>
        I am a Node.js Engineer with a strong focus on utilizing technology to develop sustainable solutions. As a Software Developer,I possess extensive knowledge in web development with technologies like Typescript, Express, Postgres etc. and I also keep myself updated with the latest industry trends. 
        </p>
        <h2>Interest</h2>
        <p>
          Learning new languages. Travelling. Trying out new stuff. 
        </p>
      </div>
    </main>
  );
};

export default Main;
