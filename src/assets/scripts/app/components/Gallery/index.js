import React from "react";
import images from "../../data/gallery";
const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {images.map((image, index) => {
        return (
          <figure key={index}>
            <img
              src={image.url}
              className="transition hover:opacity-70 ease-in-out"
              alt={image.name}
            />
          </figure>
        );
      })}
    </div>
  );
};

export default Gallery;
