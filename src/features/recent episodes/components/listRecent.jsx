import {
  Spinner,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Slider from "react-slick";

const listRecent = ({ url, qkey }) => {
  const baseUrl = "https://api.jikan.moe/v4";

  const { data, isLoading } = useQuery(
    ["recent", qkey],
    async () => {
      const { data } = await axios.get(baseUrl + url);
      return data.data;
    },
    {
      retryDelay: 1000,
    }
  );

  if (isLoading) {
    return (
      <div>
        <Spinner className="h-8 w-8" />{" "}
        <span className="ml-2 font-medium text-base">Loading...</span>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 1.35,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full px-2">
      <Slider {...settings}>
        {data.map((data, i) => (
          <div key={i}>
            <Card
              key={data.mal_id}
              className="w-[250px] h-[100%] flex flex-col items-center rounded-none shadow-none bg-transparent"
            >
              <CardHeader
                floated={false}
                className="rounded-none shadow-sm ring  ring-gray-50"
              >
                <img
                  src={data.images.jpg.image_url}
                  alt={data.title}
                  className="object-cover h-96   "
                />
              </CardHeader>
              <CardBody className="text-center h-40 overflow-hidden py-4 ">
                <p className=" text-sm -mt-2 text-gray-500 font-light line-clamp-1">
                  {data.genres.map((genre) => genre.name + ", ")}
                </p>

                <Popover>
                  <PopoverHandler>
                    <h1 className="text-xl font-bold cursor-pointer    text-blue-gray-800 mb-2 line-clamp-1">
                      {data.title}
                    </h1>
                  </PopoverHandler>
                  <PopoverContent className="z-10 ">
                    {data.title}
                  </PopoverContent>
                </Popover>

                <div className="flex gap-2 justify-center items-center mb-2 w-full ">
                  <div className="bg-gray-200 py-2 px-4 w-1/2 ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="mb-2 "
                    >
                      {data.score != null ? "Score" : "Aired "}
                    </Typography>
                    <Typography variant="paragraph" color="blue-gray">
                      {data.score || data.aired.prop.from.year || "N/A"}
                    </Typography>
                  </div>
                  <div className="bg-gray-200 py-2 px-4 w-1/2  ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="mb-2 "
                    >
                      Episode
                    </Typography>
                    <Typography variant="paragraph" color="blue-gray">
                      {data.episodes || "N/A"}
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default listRecent;
