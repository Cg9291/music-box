import Buttons from "./Buttons.js";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ToggleButton from "./ToggleButton.js";
import Vinyl from "./Vinyl.js";
import VinylContainer from "./VinylContainer.js";
import Display from "./Display.js";
//import "../buttons.scss";
import clap_Sound from "../audio/basic sounds/clap.mp3";
import closed_HH_Sound from "../audio/basic sounds/closed-HH.mp3";
import heater_1_Sound from "../audio/basic sounds/heater-1.mp3";
import heater_2_Sound from "../audio/basic sounds/heater-2.mp3";
import heater_3_Sound from "../audio/basic sounds/heater-3.mp3";
import heater_4_Sound from "../audio/basic sounds/heater-4.mp3";
import kick_n_hat_Sound from "../audio/basic sounds/kick_n_Hat.mp3";
import kick_Sound from "../audio/basic sounds/kick.mp3";
import open_HH_Sound from "../audio/basic sounds/open - HH.mp3";
import sax from "../audio/Midnight Sillage Kit/Sax_Midnight_Sillage.mp3";
import electric_guitar_01 from "../audio/Midnight Sillage Kit/Electric Guitar 01 - Midnight Sillage.mp3";
import kick from "../audio/Midnight Sillage Kit/Electric Piano 01 - Midnight Sillage.mp3";

/*
 TODOS:
 -import all sounds directly into PadButtons component
 -add instrument id to PadButtons components
 -rework alignment for buttons letters
 -add responsiveness to indicator
 - fix issue where btndefault class would either get overwritten or wont be ran in timeout after long pressing a key
 - download better sounds(maybe look at Logic Pro (in files))
  */

export default function Container(props) {
	const [volume, setVolume] = useState(50);
	const [playing, setPlaying] = useState();
	const [indicatorLightColor, setIndicatorLightColor] = useState("black");
	const [toggle, setToggle] = useState(true);

	useEffect(() => {
		toggle && setPlaying(volume);
	}, [toggle]);

	const switchToggle = () => {
		if (toggle) {
			setToggle(false);
		} else {
			setToggle(true);
			props.setPlaying(props.volume);
		}
	};

	function changeVolume(event) {
		setVolume(event.target.value);
	}

	return (
		<div
			id="drum-machine"
			className="container-fluid justify-content-center align-items-center"
		>
			<div className="row h-100">
				<div
					id="volume-container"
					className="col-2 bg-warning p-0"
				>
					<div className="row bg-primary m-0 p-0 h-100 w-100">
						<input
							type="range"
							min={0}
							max={100}
							className="slider col-12 h-50 my-auto"
							onChange={changeVolume}
						/>
					</div>
				</div>

				<div
					id="main-area"
					className="col-10 bg-primary d-flex flex-column p-0"
				>
					<div
						id="power-row-container"
						className="row bg-success mx-0 w-100 h-100 d-flex justify-content-between align-items-center"
					>
						<svg
							id="power-button"
							viewBox="0 0 100 100"
							className="col-2 col-sm-1 p-0 ms-2"
							/* style={{ width: "10%" }} */
						>
							<circle
								cx="50"
								cy="50"
								r="50"
								fill={indicatorLightColor}
							/>
						</svg>
						<ToggleButton
							toggle={toggle}
							switchToggle={switchToggle}
						/>
					</div>
					<div
						id="info-row-container"
						className="row bg-danger mx-0 "
					>
						<Display
							playing={playing}
							toggle={toggle}
						/>
					</div>
					<div
						id="drumpad-container"
						className="row bg-secondary mx-0"
					>
						<Buttons
							volume={volume}
							playing={playing}
							setPlaying={setPlaying}
							indicatorLightColor={indicatorLightColor}
							setIndicatorLightColor={setIndicatorLightColor}
							toggle={toggle}
							switchToggle={switchToggle}
						/>
					</div>
				</div>
				{/*  <div
          id="left-side"
          className="col-8 bg-black p-0"
        >
          <div className="row">
            <div className="col-1 d-flex align-items-end justify-content-center">
              <input
                type="range"
                min={0}
                max={100}
                className="slider p-0 m-0 mb-5"
                onChange={changeVolume}
              ></input>
            </div>
            <Vinyl />
          </div>
        </div> */}

				{/* <div
          id="right-side"
          className="col-4 m-0 p-0"
        >
          <Buttons volume={volume} />
        </div> */}
			</div>
		</div>
	);
}
