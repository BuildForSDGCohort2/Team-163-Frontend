import React, { useState } from "react";
import "./Report.css";
import { SButton, ReportCard, LabelDiv, CommentBox } from "../StyledComponents";
import camera from "../../assets/img/camera.png";
import comment from "../../assets/img/conversation.png";

const Report = () => {
  const [imageename, setFilename] = useState("");
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  // const [address, setUserAddress] = useState(null);

  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     alert("Geolocation is not supported by this browser.")
  //   }
  // }

  // const showPosition = (position) => {
  //   console.log(position);
  // }

  const handleselectedFile = (event) => {
    const uploadedfiles = event.target.files;
    try {
      return uploadedfiles.length === 1
        ? setFilename(uploadedfiles[0].name)
        : setFilename(`${uploadedfiles.length} images`);
    } catch (err) {
      setFilename(`nothing uploaded`);
    }
  };

  return (
    <div className="report-container">
      <ReportCard>
        <form>
          <div className="report-label">REPORT</div>
          <div className="user-input">
            <LabelDiv>
              <img src={camera} alt="camera icon" />
              <div className="upload-image">
                <label className="upload-button" htmlFor="roadimage">
                  Upload Image
                </label>
                <input
                  id="roadimage"
                  name="roadimage"
                  type="file"
                  multiple
                  alt="road picture"
                  onChange={handleselectedFile}
                  accept="image/*"
                  className="upload-input"
                />
                <span className="filename">{imageename}</span>
              </div>
            </LabelDiv>
            <div className="image-preview"></div>
            <LabelDiv style={{margin:"1rem 0"}}>
              <label htmlFor="comment" style={{display:"inline"}}>
                <img src={comment} alt="comment icon" className="comment-icon" />
                <span>Comment:</span>
              </label>
            </LabelDiv>
            <CommentBox id="comment" name="comment" rows="4" cols="29" />
            <LabelDiv>
              <input type="checkbox" />
              <span>Allow Location</span>
            </LabelDiv>
          </div>
          <SButton report>+ REPORT</SButton>
        </form>
      </ReportCard>
    </div>
  );
};

export default Report;
