import React, { Component, Fragment } from "react";

export default class centeredModal extends Component {
  componentDidMount() {}
  render() {
    const { children, closeModal, showModal } = this.props;
    if (!showModal) return null;
    return (
      <Fragment>
        <div className="centered-modal">{children}</div>;
        <div className="back-drop-layer" onClick={closeModal}></div>
      </Fragment>
    );
  }
}
