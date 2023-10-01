import Image from "next/image";
import banner from "@/assets/images/banner-images/banner.png";

const Banner = () => (
  <div>
    <Image
      src={banner}
      alt="banner-image"
      style={{ height: "500px", width: "100%" }}
    />
  </div>
);
export default Banner;
