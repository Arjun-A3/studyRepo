
import React from 'react';
import './cssFile/display.css';


function Subdisplay() {
  const url = window.location.href;
  console.log(url);
  
  
  return (
    <div>
      <div class="A" id="A1">
        <a class="button" href="/main/csbs/sem1/bcvs" style={{ color: "#1e9bff" }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h1>
            B C V S
          </h1>
        </a>
      </div>

      <div class="A" id="A2">
        <a class="button" href="phy.html" style={{ color: " #1e9bff" }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h1>P H Y S I C S</h1>
        </a>
      </div>

      <div class="A" id="A3">
        <a class="button" href="eg.html" style={{ color: "#1e9bff" }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h1>E G</h1>
        </a>
      </div>

      <div class="A" id="A4">
        <a class="button" href="m1.html" style={{ color: "#1e9bff" }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h1>M A T H S</h1>
        </a>
      </div>

      <div class=" A" id="A5">
        <a class="button" href="c.html" style={{ color: "#1e9bff" }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h1>C</h1>

        </a>
      </div>





    </div>
  )
}

export default Subdisplay;