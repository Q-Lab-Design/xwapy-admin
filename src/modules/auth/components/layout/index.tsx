import { Link, Outlet } from "react-router-dom";
import authDesign from "@/assets/images/auth-design.png";
import appLogoLight from "@/assets/images/xwapy-logo-light.png";

export default function AuthLayout() {
  return (
    <div className="min-h-[100vh] bg-[#000000] relative py-[2rem] overflow-hidden">
      <div className="md:w-[80%] mx-auto h-full">
        <div className="z-20 mb-[6rem]">
          <Link to="/">
            <img src={appLogoLight} alt="Xwapy" />
          </Link>
        </div>
        <div className="flex justify-between  h-full z-30 relative">
          <div className="flex-shrink-0">
            <h1 className="text-6xl text-white font-bold mb-7 capitalize">
              xwapy admin
            </h1>
            <p className="text-white text-xl">
              <span className="text-primary">Swap</span> stable-coin to NGN,
              KES, & <br /> GHS in real-time
            </p>
          </div>
          <div className="flex-[0.7]">
            <Outlet />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-10">
          <img src={authDesign} alt="" />
        </div>
      </div>
    </div>
  );
}
