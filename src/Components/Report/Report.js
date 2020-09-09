import React from 'react';
import "./styles.css"
import {SButton, ReportCard} from '../StyledComponents'

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
				</div>
			</ReportCard>
		</div>)
}

export default Report