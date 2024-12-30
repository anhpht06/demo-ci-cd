import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>trang chu</h1>
      <Image
        src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645-t.jpg"
        alt="My image"
        width={300}
      />
    </div>
  );
}
