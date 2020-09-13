import React, {useState} from 'react';
import "./styles.css"
import { SButton, ReportCard, LabelDiv, CommentBox } from '../StyledComponents'

const Report =()=> {

    const [imageename, setFilename] = useState("");

    const handleselectedFile = event => {
    const uploadedfiles= event.target.files;
        try{
            return (uploadedfiles.length===1?setFilename(uploadedfiles[0].name)
                :setFilename(`${uploadedfiles.length} images`))}
        catch(err){setFilename(`nothing uploaded`)}
    }

return (
            <div className="report-container">
    		 <ReportCard>
    		  <form>
    			<div className="report-label">REPORT</div>
    			 <div className="user-input">
    			   <LabelDiv>
    				<i className="fas fa-camera"></i>
    				<div className="upload-image">
    				 <label className="upload-button" htmlFor="roadimage">Upload Image</label>
    				 <input id="roadimage" name="roadimage" type="file" multiple alt="road picture"
                      onChange={handleselectedFile} 
                     accept="image/*"
                      className="upload-input"/>
    				 <span className="filename">{imageename}</span>
    				</div>
    				</LabelDiv>
    			    <div className="image-preview">
    			    </div>
    				<LabelDiv>
    				 <label htmlFor="comment">
    				 <i className="far fa-comment-dots"></i>
    				 <span>Comment:</span>
    				 </label>
    			    </LabelDiv>
    				<CommentBox id="comment" name="comment"
              rows="4" cols="29"/>
              		<LabelDiv>
              		 <i className="fas fa-map-marker-alt"></i>
              		 <span>Allow Location</span>
              		</LabelDiv>
    			 </div>
    				<SButton report>+ REPORT</SButton>
    			</form>
    			</ReportCard>
    		</div>)}

export default Report