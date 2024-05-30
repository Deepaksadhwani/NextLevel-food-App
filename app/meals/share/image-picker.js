"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef();
  const [pickedImage, setPickedImage] = useState(null);
  const handlePicClick = () => {
    imageInputRef.current.click();
  };

  function handleImageChange(event) {
    const file = event.target.files[0];
    console.log(file)
    if (!file) {
      return;
    }
    const fileReader = new FileReader();

    // this function will be trigged once DataUrl (readAsDataUrl) method is done
    fileReader.onload = () => {
      // to access generated data url
      setPickedImage(fileReader.result);
    };

    //this does not return any value or promise so we use onLoad
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage && (
            <Image src={pickedImage} fill alt="The image is select by the user." />
          )}
          {!pickedImage && <p>No image is picked yet.</p>}
        </div>
        <input
          ref={imageInputRef}
          className={classes.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleImageChange}
        />
        <button
          onClick={handlePicClick}
          className={classes.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
