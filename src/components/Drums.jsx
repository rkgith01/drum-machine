/* eslint-disable react/prop-types */
// import React from 'react'

import { useEffect } from "react";
import { useState } from "react";

const data = [
  {
    keyCode: 81,
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    text: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    text: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    text: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    text: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    text: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    text: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    text: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    text: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const Drums = () => {
  const [displayText, setDisplayText] = useState("");
  const [volume, setVolume] = useState(10); // Initial volume level

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playsound(event.key.toUpperCase());
    });
  }, []);

  const playsound = (selector) => {
    const sound = document.getElementById(selector);
    sound.play();
    setDisplayText(selector);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  return (
    <div
      id="drum-machine"
      className="flex flex-col items-center justify-center h-screen bg-stone-700 text-white"
    >
      <div
        id="display"
        className="w-1/5 text-center lg:text-4xl md:text-2xl sm:text-lg my-8 mx-8 bg-slate-400 rounded-lg lg:p-6    "
      >
        <span className="text-md">Selected Audio:</span> {displayText}
      </div>
      <div className="drum-pads flex flex-wrap justify-center">
        {data.map((item) => (
          <div
            key={item.src}
            className="shadow-xl shadow-gray-950 drop-shadow-lg drum-pad flex flex-col items-center bg-yellow-700 p-4 m-2 text-xl rounded-md cursor-pointer hover:bg-yellow-600 transition duration-300"
            onClick={() => playsound(item.text)}
            id={item.src}
          >
            <span className="text-2xl p-2 ">{item.text}</span>
            <audio className="clip" id={item.text} src={item.src}></audio>
          </div>
        ))}
      </div>
      <div className="mt-[2rem] volume flex flex-col items-center rounded-lg p-2 bg-slate-400">
        <span className="text-xl">Volume: {volume}</span>

        <input
          type="range"
          min="0"
          max="100"
          step="10"
          value={volume}
          onChange={handleVolumeChange}
          color="black"
          className="volume-slider mt-4 w-64 input-gray-500"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>Name of the each sound source from left to right</p>

        <div className="text-xl my-2 flex flex-col lg:flex-row gap-2">
          {data.map((item) => (
            <span key={item.src} className="bg-yellow-600 p-1 rounded ">
              <span className="text-yellow-700">{item.text}: </span>
              {item.src.split("/").pop().split(".")[0]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drums;
