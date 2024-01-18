import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Rating,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CharPoll = () => {
  const { data, isLoading } = useQuery(
    ["char"],
    async () => {
      const { data } = await axios.get(
        "https://api.jikan.moe/v4/top/characters?limit=3"
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
  return (
    <>
      <Typography variant="h6" color="blue-gray" className="mt-4   px-4 z-10">
        Top Characters
      </Typography>
      <Card className="w-full rounded-none shadow-none  bg-transparent  ">
        {data &&
          data.map((anime) => (
            <List key={anime.mal_id} className="my-0 py-0">
              <ListItem className="border-b-2 border-gray-500 rounded-none">
                <ListItemPrefix className=" h-[250px]">
                  <img
                    src={anime.images.jpg.image_url}
                    alt="rina"
                    className="aspect-[4/3] w-[250px] h-full object-contain"
                  />
                </ListItemPrefix>
                <div className="flex flex-col w-full h-48 justify-between self-start mt-4">
                  <div className="flex flex-col gap-1">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="font-bold"
                    >
                      {anime.name}
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-semibold jepang text-base "
                    >
                      {anime.name_kanji}
                    </Typography>
                    <p className="font-light line-clamp-3   overflow-hidden ">
                      {anime.about}
                    </p>
                    <div className="flex">
                      <Typography
                        color="blue-gray"
                        className="font-semibold text-base flex gap-2 items-center "
                      >
                        {anime.favorites}{" "}
                        <span className="outline outline-2 rounded-sm drop-shadow-sm outline-[#ff9ecf]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="#ff9ecf"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </Typography>
                    </div>
                  </div>

                  <a
                    href={data.url}
                    className="flex items-center   gap-2 py-2 w-fit rounded px-4 font-medium text-sm my-1 text-amber-700  hover:text-amber-700 /85 outline outline-2 outline-amber-500 "
                  >
                    Read More{" "}
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
          ))}
      </Card>
    </>
  );
};

export default CharPoll;
