import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { ImageSave } from "../redux/image"
import { ImageOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./imageUpload.css";

const UploadAndDisplayImage = () => {
  const { img } = useSelector((state) => state.image);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);


  useEffect(() => {
    console.log(2);
    if (selectedImage) {
      dispatch(ImageSave(URL.createObjectURL(selectedImage)))
    }
    console.log(img)
  }, [selectedImage]);

  return (
    <div>
      

    
        <>
          <input
            type="file"
            name="myImage"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
          <IconButton component="span" onClick={() => fileInputRef.current.click()}>
            <ImageOutlined className="tweetbox_icon" />
          </IconButton>
        </>
        <br/>
        {selectedImage && (
        <div id = "image">
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      
    </div>
  );
};

export default UploadAndDisplayImage;
