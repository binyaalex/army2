import "./Sidebar.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = (props) => {

	return (
		<div
			className={
				props.openSideBar
				? "customizer border-left-blue-grey border-left-lighten-4 open"
				: "customizer border-left-blue-grey border-left-lighten-4 d-none d-md-block"
			}
			>
			<div className="customizer-content p-2">
				{props.sidebarComponent}
			</div>
		</div>
	)
}
export default Sidebar
