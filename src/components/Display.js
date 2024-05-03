export default function Display(props) {
	return (
		<div
			id="display"
			className="col-12 b-0  h-100 px-0  bg-warning fs-2 fw-bold   align-content-center"
		>
			<div className="row h-75 w-75  mx-auto align-items-center justify-content-center align-content-center border border-dark m-0">
				{props.toggle ? props.playing : "OFF"}
			</div>
		</div>
	);
}
