import { Component } from "react";
import ReactPlayer from "react-player";
import { GrLocation } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";

import "./index.css";

class DemoContainer extends Component {
  state = { location: "", searchHospital: "" };
  render() {
    const { location, searchHospital } = this.state;
    const videoUrl =
      "https://s3.ap-south-1.amazonaws.com/dru.assets/video/drucare-intro.mp4";

    return (
      <div className="demo-container">
        <div className="responsive-container">
          <div className="text-container">
            <h1 className="demo-heading">
              ENGAGE AND DELIVER CARE IN A WAY THAT DELIGHTS YOUR PATIENTS
            </h1>
            <p className="demo-desc">
              Grow your revenue and lower costs: Digitize business & clinical
              workflows, analyze metrics and find opportunities to grow.
            </p>
            <button className="demo-button" type="button">
              Request Demo
            </button>
          </div>
          <div className="video-container">
            <ReactPlayer controls url={videoUrl} className="video-player" />
          </div>
        </div>
        <div className="search-container">
          <h2 className="search-heading">
            Search specialities, doctors & hospitals for appointment booking
          </h2>
          <div className="input-container">
            <button type="button" className="button">
              <GrLocation />
            </button>
            <input
              type="search"
              value={location}
              placeholder="Select location"
              onChange={this.onChangeLocation}
              className="input-element"
            />
            <input
              type="search"
              value={searchHospital}
              placeholder="Search specialities, doctors & hospitals"
              onChange={this.onChangeHospital}
              className="input-element"
            />
            <button type="button" className="button">
              <BsSearch />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DemoContainer;
