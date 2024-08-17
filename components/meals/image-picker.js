"use client";

import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInput = useRef();

  const buttonClickHandler = () => {
    fileInput.current.click();
  };

  const imageHandler = (event) => {
    const img = event.target.files[0];
    if (!img) {
      setSelectedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setSelectedImage(fileReader.result);
    };

    fileReader.readAsDataURL(img);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        {selectedImage && (
          <div className={classes.preview}>
            <Image src={selectedImage} fill />
          </div>
        )}
        <input
          ref={fileInput}
          type="file"
          className={classes.input}
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={imageHandler}
          required
        />
        <button
          onClick={buttonClickHandler}
          className={classes.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
