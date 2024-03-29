import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
       <div>
            <p className="f3 white">
                {'This Smart Brain can detect faces in your pictures'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className="br3 f4 pa2 w-70 center" type='text' onChange={onInputChange} />
                    <button className="br3 b--white w-30 grow f4 link ph3 pv2 dib white"
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
       </div>
    );
}

export default ImageLinkForm;