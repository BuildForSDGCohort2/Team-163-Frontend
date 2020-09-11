import React from 'react';
import "./styles.css"
import {SButton, ReportCard, InputLabel, CommentBox} from '../StyledComponents'

const Report =()=>{
	return(
		<div className="report-container">
		 <ReportCard>
		  <form>
			<div className="report-label">REPORT</div>
			 <div className="user-input">
			   <InputLabel>
				<i className="fas fa-camera"></i>
				<div className="upload-image">
				 <label className="upload-button" htmlFor="image">Upload Image</label>
				 <input id="image" name="image" type="file" className="upload-input"/>
				 <span className="filename">{"Hello.jpg"}</span>
				</div>
				</InputLabel>
			    <div className="image-preview">
			    </div>
				<InputLabel>
				 <label htmlFor="comment">
				 <i className="far fa-comment-dots"></i>
				 <span>Comment:</span>
				 </label>
			    </InputLabel>
				<CommentBox id="comment" name="comment"
          rows="4" cols="29"/>
          		<InputLabel>
          		 <i className="fas fa-map-marker-alt"></i>
          		 <span>Allow Location</span>
          		</InputLabel>
			 </div>
				<SButton report>+ REPORT</SButton>
			</form>
			</ReportCard>
		</div>)
}

export default Report