import React from "react";
import Image from "next/image";

type Props = {
  containerStyles: string;
  imgSrc: string;
};

const DevImg = ({ containerStyles, imgSrc }: Props) => {
  return (
    <div className={`${containerStyles}`}>
      <Image className="h-36" src={imgSrc} alt="" fill priority />
    </div>
  );
};

export default DevImg;
