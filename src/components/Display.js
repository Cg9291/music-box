export default function Display(props) {
	return (
		<div
			id="display"
			className="col-12 d-flex h-100 p-0  justify-content-center bg-warning col-6 fs-2 fw-bold align-items-center mx-auto my-auto  "
		>
			<div className="row h-75 w-75 d-flex align-items-center justify-content-center border border-dark m-0">
				{!props.toggle ? "OFF" : props.playing}
			</div>
		</div>
	);
}
