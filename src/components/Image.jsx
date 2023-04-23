import React from "react";
import { storage } from "./firebase/Firebase";

const Image = ({ id, url }) => {
  const handleDelete = () => {
    const imageRef = storage.refFromURL(url);
    imageRef.delete().then(() => {
      console.log("Image deleted successfully");
    }).catch((error) => {
      console.log(`Error deleting image: ${error}`);
    });
  };

  return (
    <div>
      <img src={url} alt="" />
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default Image;