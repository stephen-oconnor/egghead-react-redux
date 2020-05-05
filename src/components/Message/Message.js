import React from "react";
import { connect } from "react-redux";

const Message = ({ message }) =>
	message ? <span className="message">{message}</span> : null;

// Map slices of state to props of connected component. Available on props.
const mapStateToProps = (state) => ({ message: state.message });

export default connect(mapStateToProps)(Message);
