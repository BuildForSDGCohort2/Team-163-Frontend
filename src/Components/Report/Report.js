import React from 'react';
import "./styles.css"
import {SButton, ReportCard, InputLabel, CommentBox} from '../StyledComponents'

const Report =()=>{
	return(
		<div className="report-container">
			<ReportCard>
			<div className="report-label">REPORT</div>
				<div className="user-input">
					<div className="upload-image">
						<i className="fas fa-camera"></i>
						<SButton userInput>Upload Image</SButton>
					</div>
					<div className="image-preview">
					</div>
					<InputLabel><label htmlFor="comment">
					<i className="far fa-comment-dots"></i>
					<span>Comment:</span>
					</label>
					</InputLabel>
					<CommentBox id="comment" name="comment"
          rows="4" cols="29"/>
          		<InputLabel><i className="fas fa-map-marker-alt"></i><span>Allow Location</span>
          		</InputLabel>
				</div>
				<SButton access>+Report</SButton>
			</ReportCard>
		</div>)
}

export default Report