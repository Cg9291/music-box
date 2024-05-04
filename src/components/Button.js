import { audioKeyMappings } from "../objects/audio-key-mappings.js";

export default function Button(props) {
	return (
		<div className="col  ">
			<button
				id={props.id}
				ref={ref => (props.buttonRefs.current[props.keyid] = ref)}
				className="p-0 justify-content-center btn drum-btn btn-dark ratio ratio-1x1"
				onClick={() => props.playSound([props.keyid])}
				style={{ boxShadow: `2px 5px ${props.boxshadowcolor}` }}
			>
				<div className="fs-3 d-flex align-items-center justify-content-center">
					{props.keyid}
				</div>

				<audio
					id={props.keyid}
					ref={ref => (props.audioRefs.current[props.keyid] = ref)}
					className="clip"
					src={audioKeyMappings[props.keyid].audio}
				>
					Your browser does not support this type of file.
				</audio>
			</button>
		</div>
	);
}
