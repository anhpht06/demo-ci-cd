import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <div>
      <Image
        src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645-t.jpg"
        alt="My image"
        width={300}
      />
    </div>
  );
}
