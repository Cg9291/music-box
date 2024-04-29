export default function ToggleButton(props) {
	return (
		<div className="col-4  m-0 p-0 border border-success bg-warning h-50 ">
			<div className="row mx-0 h-100">
				{props.toggle ? (
					<>
						<div className="col p-0 text-center align-content-center">ON</div>
						<button
							className=" col m-0 p-0 border border-3 bg-primary "
							onClick={props.switchToggle}
						></button>
					</>
				) : (
					<>
						<button
							className=" col m-0 p-0 bg-primary border border-3"
							onClick={props.switchToggle}
						></button>
						<div className="col p-0 text-center align-content-center">OFF</div>
					</>
				)}
			</div>
		</div>
	);
}
