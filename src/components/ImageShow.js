import React from "react";

const ImageShow = ({ img }) => {
  console.log(img);
  return (
    <div>
      <img src={img.urls.small} alt={img.description} />
    </div>
  );
};

export default ImageShow;
