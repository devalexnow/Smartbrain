import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className="center mt2">
            {/* <div className="absolute"> */}
            <img className="faceImage" alt='' src={imageUrl}/>
            {/* </div> */}
        </div>
    );
}

export default FaceRecognition;