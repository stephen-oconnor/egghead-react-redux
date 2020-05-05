import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<Link to="/">All</Link>
			<Link to="/active">Active</Link>
			<Link to="/completed">Completed</Link>
		</div>
	);
};

export default Footer;
