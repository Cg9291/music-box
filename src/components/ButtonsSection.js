/*had to convert Midnight Sillage Kit (logic macbook sounds) from aif to mp3 using online converter*/

import React, { useEffect, useLayoutEffect, useRef } from "react";
import Button from "./Button.js";
import { audioKeyMappings } from "../objects/audio-key-mappings.js";

export default function ButtonsSection(props) {
	const buttonRefs = useRef([]); //using REFCALLBACK to dynamically target specific node/element
	const audioRefs = useRef([]);

	useEffect(() => {
		props.setPlaying(props.volume);
	}, [props.volume]);

	useLayoutEffect(() => {
		if (!props.toggle) {
			props.setPlaying(); //remove
			props.setIndicatorLightColor("grey");
		} else {
			props.setIndicatorLightColor("red");
		}
	}, [props.toggle]);

	useLayoutEffect(() => {
		if (props.toggle) {
			window.addEventListener("keypress", handleKeyPress, false);
		}
		return () => window.removeEventListener("keypress", handleKeyPress, false);
	}, [props.toggle, props.volume]); //maybe remove props.volume dependency

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

	Button.defaultProps = {
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
				<Button
					id={audioKeyMappings.Q.name}
					keyid="Q"
					boxshadowcolor="red"
				/>
				<Button
					id={audioKeyMappings.W.name}
					keyid="W"
					boxshadowcolor="blue"
				/>
				<Button
					id={audioKeyMappings.E.name}
					keyid="E"
					boxshadowcolor="green"
				/>
				<Button
					id={audioKeyMappings.R.name}
					keyid="R"
					boxshadowcolor="lightgreen"
				/>
				<Button
					id={audioKeyMappings.A.name}
					keyid="A"
					boxshadowcolor="purple"
				/>
				<Button
					id={audioKeyMappings.S.name}
					keyid="S"
					boxshadowcolor="brown"
				/>
				<Button
					id={audioKeyMappings.D.name}
					keyid="D"
					boxshadowcolor="orange"
				/>
				<Button
					id={audioKeyMappings.F.name}
					keyid="F"
					boxshadowcolor="lightgreen"
				/>
				{/* </div>
			<div className={rowStyle}> */}
				<Button
					id={audioKeyMappings.Z.name}
					keyid="Z"
					boxshadowcolor="turquoise"
				/>
				<Button
					id={audioKeyMappings.X.name}
					keyid="X"
					boxshadowcolor="yellow"
				/>
				<Button
					id={audioKeyMappings.C.name}
					keyid="C"
					boxshadowcolor="white"
				/>
				<Button
					id={audioKeyMappings.V.name}
					keyid="V"
					boxshadowcolor="lightgreen"
				/>
			</div>
		</div>
	);
}
