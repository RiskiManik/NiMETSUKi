import {
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Spinner,
} from "@material-tailwind/react";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const ListNews = ({ id }) => {
  const { data, isLoading } = useQuery(
    ["news", id],
    async () => {
      const { data } = await axios.get(
        `https://api.jikan.moe/v4/anime/${id}/news`
      );
      return data.data;
    },
    { retry: 10 },
    {
      retryDelay: 1000,
    }
  );

  const queryClient = useQueryClient();

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
      {data.map((data, i) => (
        <List key={i} className="my-0 py-0">
          <ListItem className="border-b-2 border-gray-500 rounded-none">
            <ListItemPrefix>
              <img
                src={data.images.jpg.image_url}
                alt="rina"
                className=" w-[300px] object-contain"
              />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                {data.title || "N/A"}
              </Typography>
              <Typography
                variant="paragraph"
                color="gray"
                className="font-normal"
              >
                {data.excerpt || "N/A"}
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-light mt-[2px]"
              >
                {data.date || "N/A"}
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal mt-[2px]"
              >
                Comments : {data.comments || "N/A"}
              </Typography>
              <a
                href={data.url}
                className="flex items-center gap-2 py-1 font-medium text-sm text-amber-700 underline"
              >
                Read more{" "}
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
    </>
  );
};

export default ListNews;
