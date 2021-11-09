import React from "react";

export default function Loader() {
	const style = {
		display: 'flex', 
		justifyContent: 'center', 
		margin:'.5rem'
	}

	return (
		<div style={style}>
			<div className="lds-dual-ring" />
		</div>
	)
}