import { Player, Controls } from "@lottiefiles/react-lottie-player";
import React, { useState } from 'react';
import Lottie from "react-lottie";
import animationData from "./assets/shot.json";
import animationData1 from "./assets/clean.json";
import Button from "@material-ui/core/Button";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import audio from "./assets/act1.mp3"

const myAudio = new Audio(audio)

export default function App() {


  const showTextList = [
    'Title',
    'Act1',
  ];
  const showDialogList = [
    'Keeping Clean and Healthy',
    'Girl : I like to play with Frugu and Dippy. Frugu is so dirty. Tap Frugu to clean him.',
  ];
  const showSourceList = [
    animationData1, animationData
  ];
  const [index, setIndex] = useState(0);


  var defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: showSourceList[index],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }

  };


  function nextFunc() {
    if (index == 0) {
      setIndex(1);
      myAudio.play();
    }

  }
  function backFunc() {
    if (index == 1) {
      setIndex(0);
      myAudio.pause();
      myAudio.currentTime = 0;
    }

  }
  return (
    <>
      <div className="App">
        {/* <Player
        autoplay
        loop
        speed={40}
        src="./assets/ball.json"
        // background='#123123'
        style={{ height: "400px", width: "400px" , margin:"100px",position:"fixed",left:"100px" }}
        id={'kkk'}
        // onMouseEnter={()=>{console.log('ok')}}
        onEvent={event => {
          if (event === 'load') 
          console.log('ok');
        }}
        renderer={'svg'}
      >
      
        <Controls
          visible={true}
          darkTheme = {true}
          mouseDown = {true}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player> */}

        <div style={{ width: "70%", textAlign: "center", margin: "auto" }}>

          <h1 style={{ display: "inline-block", float: "left", left: "0px;", color: "#124122" }}>{showTextList[index]}</h1>
          <div style={{ display: "inline-block", float: "right", marginTop: "23px", padding: "auto" }}>
            <Button onClick={backFunc} variant="contained" size="mideum" color="primary" startIcon={<SkipPreviousIcon />} 
            style={{ marginRight: "5px", cursor: "pointer" }}>
              Before
            </Button>
            <Button onClick={nextFunc} variant="contained" size="mideum" color="primary" 
            endIcon={<SkipNextIcon />} style={{cursor: "pointer" }}>
              Next
            </Button>

          </div>

          <Lottie autoplay loop options={defaultOptions} mouseDown={false}
            style={{ height: "100%", textAlign: "center", border: "1px solid black", margin: "auto" }}
          />
          <p style={{ textAlign: "center", fontSize: "18pt", fontFamily: "time News Roman" }}>
            {showDialogList[index]}
          </p>
        </div>
      </div>
    </>
  );
}
