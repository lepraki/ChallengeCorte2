import React, { useState, useEffect } from "react";
import Image from "./components/Image";
import { storage } from "./firebase/Firebase";

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const listRef = storage.ref().child("images");
    listRef.listAll().then((res) => {
      const urls = [];
      res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {
          urls.push({ id: itemRef.name, url });
        });
      });
      setImages(urls);
    });
  }, []);

  return (
    <div>
      {images.map((image) => (
        <Image key={image.id} id={image.id} url={image.url} />
      ))}
    </div>
  );
};

export default App;