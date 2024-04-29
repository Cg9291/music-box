/*had to convert Midnight Sillage Kit (logic macbook sounds) from aif to mp3 using online converter*/

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ToggleButton from "./ToggleButton.js";
import PadButtons from "./PadButtons.js";
import Vinyl from "./Vinyl.js";
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

export default function Buttons(props) {
	const buttonRefs = useRef([]); //using REFCALLBACK to dynamically target specific node/element
	const audioRefs = useRef([]);

	useEffect(() => {
		props.setPlaying(props.volume);
	}, [props.volume]);

	useLayoutEffect(() => {
		if (!props.toggle) {
			props.setPlaying();
			props.setIndicatorLightColor("bg-dark");
		} else {
			props.setIndicatorLightColor("red");
		}
	}, [props.toggle]);

	useLayoutEffect(() => {
		if (props.toggle) {
			window.addEventListener("keypress", handleKeyPress, false);
		}
		return () => window.removeEventListener("keypress", handleKeyPress, false);
	}, [props.toggle, props.volume]);

	function playSound(keyid) {
		if (props.toggle) {
			const btnDefaultClass = buttonRefs.current.Q.className;

			audioRefs.current[keyid].play();
			audioRefs.current[keyid].volume = props.volume / 100;
			buttonRefs.current[keyid].className += " pad-keys";
			props.setPlaying(buttonRefs.current[keyid].id);

			setTimeout(() => {
				buttonRefs.current[keyid].className = btnDefaultClass;
			}, 100);
		}
	}

	function handleKeyPress(event) {
		const btnDefaultClass = buttonRefs.current.Q.className;
		let pressedKey = event.key.toUpperCase();

		audioRefs.current[pressedKey].play();
		audioRefs.current[pressedKey].volume = props.volume / 100;
		buttonRefs.current[pressedKey].className += " pad-keys";
		props.setPlaying(buttonRefs.current[pressedKey].id);

		setTimeout(() => {
			buttonRefs.current[pressedKey].className = btnDefaultClass;
		}, 100);
	}

	PadButtons.defaultProps = {
		playSound: playSound,
		buttonRefs: buttonRefs,
		audioRefs: audioRefs,
	};

	const rowStyle = "row pad-row w-100 px-3 gx-3";

	return (
		<div
			id="pad"
			className="col d-flex flex-column justify-content-evenly align-items-center h-100 m-0 px-0 py-0 bg-black"
		>
			<div className={rowStyle}>
				<PadButtons
					id="1"
					keyid="Q"
					boxshadowcolor="red"
				/>
				<PadButtons
					id="2"
					keyid="W"
					boxshadowcolor="blue"
				/>
				<PadButtons
					id="3"
					keyid="E"
					boxshadowcolor="green"
				/>
				<PadButtons
					id="4"
					keyid="R"
					boxshadowcolor="lightgreen"
				/>
			</div>

			<div className={rowStyle}>
				<PadButtons
					id="5"
					keyid="A"
					boxshadowcolor="purple"
				/>
				<PadButtons
					id="6"
					keyid="S"
					boxshadowcolor="brown"
				/>
				<PadButtons
					id="7"
					keyid="D"
					boxshadowcolor="orange"
				/>
				<PadButtons
					id="8"
					keyid="F"
					boxshadowcolor="lightgreen"
				/>
			</div>

			<div className={rowStyle}>
				<PadButtons
					id="9"
					keyid="Z"
					boxshadowcolor="turquoise"
				/>
				<PadButtons
					id="10"
					keyid="X"
					boxshadowcolor="yellow"
				/>
				<PadButtons
					id="11"
					keyid="C"
					boxshadowcolor="white"
				/>
				<PadButtons
					id="12"
					keyid="V"
					boxshadowcolor="lightgreen"
				/>
			</div>
		</div>
	);
}
