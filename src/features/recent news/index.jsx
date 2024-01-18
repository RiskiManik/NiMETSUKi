import { Card, Typography } from "@material-tailwind/react";
import ListNews from "./components/ListNews";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const RecentNews = () => {
  const { data } = useQuery(
    ["news"],
    async () => {
      const { data } = await axios.get(
        "https://api.jikan.moe/v4/top/anime?limit=10&filter=upcoming"
      );
      return data.data;
    },
    {
      retryDelay: 1000,
    }
  );

  const anime = data;

  return (
    <>
      <Typography
        variant="h6"
        color="blue-gray"
        className="mt-4 text-xl font-bold px-4 z-10"
      >
        Top News
      </Typography>
      <div className="w-full max-h-screen overflow-y-auto bg-blue-gray-50/75 scroll_bar mt-4">
        <Card className="w-full rounded-none shadow-none py-4 bg-transparent ">
          {(anime &&
            anime.map((anime) => (
              <ListNews key={anime.mal_id} id={anime.mal_id} />
            ))) ||
            "Loading"}
        </Card>
      </div>
    </>
  );
};

export default RecentNews;
