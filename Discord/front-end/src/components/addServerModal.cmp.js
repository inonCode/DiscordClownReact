import React, { Component } from "react";
import svgService from "../services/svgService";
import { createServer } from "../store/server/actions";
import { connect } from "react-redux";
import { imgService } from "../services/img-service";

//-----------Sub Components Imports---------//
import Default from "./addServerDef.cmp";
import Join from "./addServerJoin.cmp";
import Create from "./addServerCreate.cmp";

export class AddServer extends Component {
  constructor(props) {
    super();
    this.state = {
      //currModalView controls the current modal content Can change to createServer/joinServer
      currModalView: "default",
      //name,imgUrl are connected to their reletive inputs via event handler functions
      name: "",
      imgUrl: "",
    };
  }

  changeModalView = (viewName) => {
    this.setState((state) => ({
      currModalView: viewName,
    }));
  };
  updateServerName = (ev) => {
    ev.persist();
    this.setState((state) => ({
      name: ev.target.value,
    }));
  };
  createServer = (ev) => {
    ev.preventDefault();
    const { name, imgUrl } = this.state;
    console.log(name, imgUrl);
    this.props.createServer({ name, imgUrl });
    this.setState((state) => ({
      name: "",
      imgUrl: "",
    }));
    this.props.closeModal();
  };
  uploadServerImg = async (ev) => {
    const res = await imgService.uploadImg(ev);
    this.setState((state) => ({
      imgUrl: res.url,
    }));
  };

  render() {
    const { currModalView, imgUrl } = this.state;

    const { closeModal } = this.props;

    return (
      <div className="add-server-modal">
        <form className="modal-content flex align-center">
          <button className="close-btn" onClick={closeModal}>
            {svgService.query("closeIcon")}
          </button>
          {currModalView === "default" && (
            <Default changeModalView={this.changeModalView} />
          )}
          {currModalView === "createServer" && (
            <Create
              imgUrl={imgUrl}
              uploadImgIcon={svgService.query("uploadImgIcon")}
              uploadServerImg={this.uploadServerImg}
              updateServerName={this.updateServerName}
            />
          )}
          {currModalView === "joinServer" && <Join />}
          {currModalView !== "default" && (
            <div className="form-controls flex space-between">
              <button
                className="back-btn"
                onClick={() => this.changeModalView("default")}
              >
                Back
              </button>
              {currModalView === "joinServer" ? (
                <button className="submit-btn" onClick="">
                  Join server
                </button>
              ) : (
                <button className="submit-btn" onClick={this.createServer}>
                  Create
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createServer,
};

export default connect(null, mapDispatchToProps)(AddServer);
