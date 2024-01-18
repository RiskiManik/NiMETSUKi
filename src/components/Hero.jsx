import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import { bghero, hero, mangabg, mangaspy } from "../assets/index";

const Hero = () => {
  return (
    <div className="w-full h-screen text-black bg-blue-gray-50 px-16 gap-4 flex justify-between items-center relative overflow-hidden">
      <span className="absolute top-0 left-0 h-full w-full  bg-gradient-to-br  z-10 from-amber-700  via-transparent to-gray-300"></span>
      <img
        src={hero}
        alt="hero"
        className={`  h-full w-96 object-cover object-center z-10  drop-shadow-2xl  `}
      />

      <div className="z-10 flex-1 mb-12">
        <h1 className="text-5xl font-bold uppercase text-gray-900 drop-shadow-lg ">
          Streaming Anime Dengan Qualitas tinggi Hanya di{" "}
          <span className="text_gradient  ">NimeTsuki</span>
        </h1>
        <div>
          <Button
            ripple={true}
            size="lg"
            variant="gradient"
            color="amber"
            className="mt-4"
          >
            Watch Now
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 opacity-50">
        <img
          src={bghero}
          alt="manga"
          className="w-fit left-0 rotate-45 h-full z-0 absolute"
        />
        <img
          src={mangabg}
          alt="manga"
          className="w-fit left-[25rem] -top-[25rem] rotate-45 h-full z-0 absolute"
        />
      </div>
      <div className="absolute inset-0 translate-x-[25rem] translate-y-[20rem] opacity-50">
        <img
          src={mangabg}
          alt="manga"
          className="w-fit left-0 rotate-45  h-full z-0 absolute"
        />
        <img
          src={mangaspy}
          alt="manga"
          className="w-fit left-[34rem] outline outline-gray-900 -top-[32rem] scale-[1.1] rotate-45 h-full z-0 absolute"
        />
      </div>
    </div>
  );
};

export default Hero;
