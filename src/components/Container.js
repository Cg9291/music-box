import ButtonsSection from "./ButtonsSection.js";
import React, { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton.js";
import Display from "./Display.js";

/*
 TODOS:
 - fix issue where btndefault class would either get overwritten or wont be ran in timeout after long pressing a key
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
			setPlaying(volume);
		}
	};

	function changeVolume(event) {
		setVolume(event.target.value);
	}

	return (
		<div
			id="drum-machine"
			className="container-fluid justify-content-center align-items-center  vh-100"
		>
			<div className="row h-100">
				<div
					id="volume-container"
					className="col-2 p-0"
				>
					<div className="row bg-black m-0 p-0 h-100 w-100">
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
					className="col-10 d-flex flex-column p-0 b-0 h-100"
				>
					<div
						id="power-row-container"
						className="row prc flex-0015 b-0 bg-black mx-0 w-100 h-100 d-flex justify-content-between align-items-center"
					>
						<svg
							id="power-button"
							viewBox="0 0 100 100"
							className="col-3 power-button col-sm-1 col-md-2 p-0 ms-2 mh-50 "
							preserveAspectRatio="xMinYMid"
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
						className="row irc flex-0025 b-0 bg-black mx-0 px-2 justify-content-center "
					>
						<Display
							playing={playing}
							toggle={toggle}
						/>
					</div>
					<div
						id="drumpad-container"
						className="row dpc flex-100 bg-secondary mx-0"
					>
						<ButtonsSection
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
			</div>
		</div>
	);
}
