export default function ToggleButton(props) {
	return (
		<div id="toggle-button-container" className="col-4 tbc m-0 p-0 me-2 border border-success bg-warning h-50 ">
			<div className="row mx-0 h-100">
				<div
					className={` ${
						props.toggle ? "order-first" : "order-last"
					} col p-0 text-center align-content-center `}
				>
					{props.toggle ? "ON" : "OFF"}
				</div>
				<button
					className={`col m-0 p-0 border border-3 bg-primary `}
					onClick={props.switchToggle}
				></button>
			</div>
		</div>
	);
}
