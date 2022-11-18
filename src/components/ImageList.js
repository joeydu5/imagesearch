import React from "react";
import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  console.log("images", images);
  const renderImages = images.map((img) => {
    return (
      <div key={img.id}>
        <ImageShow img={img} />
      </div>
    );
  });
  return <div>{renderImages}</div>;
};

export default ImageList;
