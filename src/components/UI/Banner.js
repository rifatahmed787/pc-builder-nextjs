import Image from "next/image";

import hombeBanner from "@/assets/images/banner-images/banner.png";

const contentStyle = {
  height: "425px",
  color: "#000",
};

const Banner = () => (
  <div>
    <Image
      src={hombeBanner}
      fill
      alt="eagle_image"
      style={{ grayScale: "-1" }}
    />
  </div>
);
export default Banner;
