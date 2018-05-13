import React, { Component } from "react";
import logo from "./logo.svg";
import Example from './example';
import "./App.css";

function animate(canvas, context, stars) {

  if (stars.length < 300 && Math.random() < 0.5) {
    // if fewer than 300 stars, a 50% chance of creating a new one
    let star = {
      x: 0,
      y: 0,
      vx: -5 + Math.random() * 10,
      vy: -5 + Math.random() * 10
    }; // create a new star in the middle with random velocity
    stars.push(star); // add the star to the array
  }
  context.clearRect(0, 0, canvas.width, canvas.height); // clear the frame
  for (let n = 0; n < stars.length; n++) {
    // for each star
    stars[n].x = stars[n].x + stars[n].vx; // add the velocity to the current position
    stars[n].y = stars[n].y + stars[n].vy; // in both axles
    if (stars[n].x > 400 || stars[n].x < -400) {
      // if the star is out of bounds
      stars[n].x = 0; // put it back in the center
      stars[n].y = 0;
    }
    let color = Math.floor((Math.abs(stars[n].x) + Math.abs(stars[n].y)) / 5);
    context.fillStyle = "rgb(" + color + "," + color + "," + color + ")"; // use the color value for the R, G and B component
    context.beginPath();
    context.arc(
      400 + stars[n].x,
      400 + stars[n].y,
      Math.abs(stars[n].y / 100 + n / 200),
      0,
      2 * Math.PI
    ); // draw a circle
    context.fill();
  }
  let animateFun = animate.bind(this, canvas, context, stars);
  window.requestAnimationFrame(animateFun); // request another animation frame
}

class App extends Component {
  componentDidMount() {
    let canvas = document.getElementById("starField");
    let context = document.getElementById("starField").getContext("2d");
    let stars = []; // the array of stars

    let animateFun = animate.bind(this, canvas, context, stars);
    window.requestAnimationFrame(animateFun); // initialize the animation
  }
  render() {
    return (
      <div className="App">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Zach Phillips-Gary</h1>
              <h2 className="subtitle">Full Stack Developer</h2>
            </div>
          </div>
          <canvas width="800" height="800" id="starField" />

        </section>

      </div>
    );
  }
}

export default App;
