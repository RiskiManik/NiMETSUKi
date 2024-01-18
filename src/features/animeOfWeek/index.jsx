import {
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Card,
  Spinner,
  Rating,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AnimeOfWeek = () => {
  const baseUrl = "https://api.jikan.moe/v4";

  const { data, isLoading } = useQuery(
    ["animeofweek"],
    async () => {
      const { data } = await axios.get(
        baseUrl + "/top/anime?limit=1&filter=favorite"
      );
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

  const anime = data[0];

  return (
    <>
      <Typography variant="h6" color="blue-gray" className="mt-4  px-4 z-10">
        Best Anime
      </Typography>
      <Card className="w-full rounded-none shadow-none  bg-transparent ">
        <List key={anime.mal_id} className="my-0 py-0">
          <ListItem className="border-b-2 border-gray-500 rounded-none">
            <ListItemPrefix className=" h-[250px]">
              <img
                src={anime.images.jpg.image_url}
                alt="rina"
                className="aspect-[4/3] w-[250px] h-full object-contain"
              />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                {anime.title}
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-light mt-[2px]"
              >
                {anime.genres.map((genre) => genre.name + ", ")}
              </Typography>
              <div className="flex">
                <Rating
                  value={Math.floor(anime.score / 2)}
                  readonly
                  className="scale-75 -ml-4 "
                />
                <Typography color="gray" className="font-medium ">
                  ({anime.score})
                </Typography>
              </div>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium mt-[2px]"
              >
                Type : {anime.type}
              </Typography>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium mt-[2px]"
              >
                Episodes : {anime.episodes}
              </Typography>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium mt-[2px]"
              >
                Duration : {anime.duration}
              </Typography>
              <a
                href={data.url}
                className="flex items-center gap-2 py-2 w-fit rounded px-4 font-medium text-sm my-1 text-amber-700 hover:text-amber-500 outline outline-2 outline-amber-500 "
              >
                Start Watching{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </ListItem>
        </List>
      </Card>
    </>
  );
};

export default AnimeOfWeek;
