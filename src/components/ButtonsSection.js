/*had to convert Midnight Sillage Kit (logic macbook sounds) from aif to mp3 using online converter*/
import React, { useEffect, useRef } from "react";
import PadButton from "./Button.js";
import { audioKeyMappings } from "../objects/audio-key-mappings.js";

export default function ButtonsSection(props) {
	const buttonRefs = useRef([]); //using REFCALLBACK to dynamically target specific node/element
	const audioRefs = useRef([]);

	useEffect(() => {
		props.setPlaying(props.volume);
	}, [props.volume]);

	useEffect(() => {
		props.toggle
			? props.setIndicatorLightColor("red")
			: props.setIndicatorLightColor("grey");
	}, [props.toggle]);

	useEffect(() => {
		if (props.toggle) {
			window.addEventListener("keydown", handleKeyPress, false);
			window.addEventListener("keyup", handleKeyUp, false);
		}
		return () => {
			window.removeEventListener("keydown", handleKeyPress, false);
			window.removeEventListener("keyup", handleKeyUp, false);
		};
	}, [props]);

	const btnDefaultClass =
		"p-0 justify-content-center btn pad-btn btn-dark ratio ratio-1x1";

	const animatedBtnClass = " animated-pad-btn"; //should include a space at start of string

	function playSound(keyid) {
		if (props.toggle) {
			audioRefs.current[keyid].currentTime = 0;
			audioRefs.current[keyid].volume = props.volume / 100;
			audioRefs.current[keyid].play();
			buttonRefs.current[keyid].className += animatedBtnClass;
			props.setPlaying(buttonRefs.current[keyid].id);
			console.log(keyid, audioKeyMappings[keyid].audio);
			setTimeout(() => {
				buttonRefs.current[keyid].className = btnDefaultClass;
			}, 100);
		}
	}

	function handleKeyPress(event) {
		const pressedKey = event.key.toUpperCase();
		audioRefs.current[pressedKey].currentTime = 0;
		audioRefs.current[pressedKey].volume = props.volume / 100;
		audioRefs.current[pressedKey].play();
		buttonRefs.current[pressedKey].className += animatedBtnClass;
		props.setPlaying(buttonRefs.current[pressedKey].id);
		console.log(pressedKey);
	}

	function handleKeyUp(event) {
		const pressedKey = event.key.toUpperCase();
		buttonRefs.current[pressedKey].className = btnDefaultClass;
	}

	PadButton.defaultProps = {
		playSound: playSound,
		buttonRefs: buttonRefs,
		audioRefs: audioRefs,
	};

	return (
		<div
			id="pad"
			className="col-12 flex-100 align-content-center  bg-black"
		>
			<div className="row row-cols-4 gx-2 gy-2">
				<PadButton
					id={audioKeyMappings.Q.name}
					keyid="Q"
					boxshadowcolor="red"
				/>
				<PadButton
					id={audioKeyMappings.W.name}
					keyid="W"
					boxshadowcolor="blue"
				/>
				<PadButton
					id={audioKeyMappings.E.name}
					keyid="E"
					boxshadowcolor="green"
				/>
				<PadButton
					id={audioKeyMappings.R.name}
					keyid="R"
					boxshadowcolor="lightgreen"
				/>
				<PadButton
					id={audioKeyMappings.A.name}
					keyid="A"
					boxshadowcolor="purple"
				/>
				<PadButton
					id={audioKeyMappings.S.name}
					keyid="S"
					boxshadowcolor="brown"
				/>
				<PadButton
					id={audioKeyMappings.D.name}
					keyid="D"
					boxshadowcolor="orange"
				/>
				<PadButton
					id={audioKeyMappings.F.name}
					keyid="F"
					boxshadowcolor="lightgreen"
				/>

				<PadButton
					id={audioKeyMappings.Z.name}
					keyid="Z"
					boxshadowcolor="turquoise"
				/>
				<PadButton
					id={audioKeyMappings.X.name}
					keyid="X"
					boxshadowcolor="yellow"
				/>
				<PadButton
					id={audioKeyMappings.C.name}
					keyid="C"
					boxshadowcolor="white"
				/>
				<PadButton
					id={audioKeyMappings.V.name}
					keyid="V"
					boxshadowcolor="lightgreen"
				/>
			</div>
		</div>
	);
}
