import React, { useState, useEffect } from "react";
import DogImage from "./DogImage";

// WARNING: this useEffect will run in an infinite loop!
// to fix, pass an empty array as the second argument for useEffect
function DogPics() {
  // state
  const [images, setImages] = useState([]);

  // function to fetch/pass in useEffect
  const fetchData = () => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("setState");
        setImages(data.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // useEffect i.e. side effect
  // pass empty dependency array/run only on initial render
  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  console.log("render");

  return (
    <div>
      {images.map((image) => (
        <DogImage image={image} key={image} />
      ))}
    </div>
  );
}

export default DogPics;

