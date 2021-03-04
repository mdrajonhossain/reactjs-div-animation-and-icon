import React, { useEffect } from "react";

import logo from './logo.svg';
import './App.css';
import 'aos';
import AOS from 'aos';
import { FaBeer } from 'react-icons/fa';

import { AiTwotonePhone, 
  AiFillAudio, 
  AiFillFolderOpen,
  AiFillWindows,
   } from "react-icons/ai";


import { FcHome,
FcNightPortrait,
FcFilm,
 } from "react-icons/fc";


 


function App() {

  useEffect(() => {
   AOS.init({
  duration: 1000,
})

});

  return (
      <div className="App">
      
      <div class="item" data-aos="fade-up"><FaBeer className="aa"/></div>

      <div class="item" data-aos="fade-down"><AiFillFolderOpen className="aa"/></div>
      <div class="item" data-aos="fade-right"><AiFillAudio className="aa"/></div>
      <div class="item" data-aos="fade-left"><AiTwotonePhone className="aa"/></div>

      <div class="item" data-aos="zoom-in"><AiFillWindows className="aa"/></div>
      <div class="item" data-aos="zoom-out"><FcHome className="aa"/></div>
      <div class="item" data-aos="zoom-out"><FcNightPortrait className="aa"/></div>      
      <div class="dtd" data-aos="flip-down"><FcFilm className="aa"/></div>

      <div class="item" data-aos="slide-up">7</div>

      <div class="item" data-aos="flip-up">8</div>
      <div class="item" data-aos="flip-down">9</div>
      <div class="item" data-aos="flip-right">10</div>
      <div class="item" data-aos="flip-left">11</div>
</div>
  );
}

export default App;