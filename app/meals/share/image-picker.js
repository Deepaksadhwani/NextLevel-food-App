'use client'
import { useRef } from "react";
import classes from "./image-picker.module.css";
export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef();
  const handlePicClick = () => {
      imageInputRef.current.click();
  }
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <input
            ref={imageInputRef} 
            className={classes.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
        />
        <button onClick={handlePicClick} className={classes.button} type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
}
