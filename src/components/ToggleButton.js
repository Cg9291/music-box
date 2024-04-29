export default function ToggleButton(props) {
	return (
		<div
			className="container-fluid row m-0 p-0 border border-success bg-warning h-50 w-25 mt-3 ms-0 me-3"
			style={{ minHeight: "25px" }}
		>
			{props.toggle ? (
				<>
					<div className="col-6 d-flex justify-content-center align-items-center">
						ON
					</div>
					<button
						className=" col-6 m-0 p-0 border border-3 bg-primary "
						onClick={props.switchToggle}
					></button>
				</>
			) : (
				<>
					<button
						className=" col-6 m-0 p-0 bg-primary border border-3"
						onClick={props.switchToggle}
					></button>
					<div className="col-6 d-flex justify-content-center align-items-center">
						OFF
					</div>
				</>
			)}
		</div>
	);
}
