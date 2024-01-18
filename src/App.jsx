import { useState } from "react";

import SeasonsTabs from "./features/season";
import NavbarDefault from "./components/Navbar";
import Hero from "./components/Hero";
import RecentEpisodes from "./features/recent episodes";
import RecentNews from "./features/recent news";
import AnimeOfWeek from "./features/animeOfWeek";
import MostRecentPoll from "./features/mostRecentPoll";
import MostRecentVideos from "./features/most recent videos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full bg-blue-gray-50/50 ">
      <NavbarDefault />
      <Hero />
      <div className="w-full px-16 bg-base-100 mt-4 grid grid-cols-10 gap-2 ">
        <div className="col-span-7">
          <SeasonsTabs />
          <RecentNews />
          <MostRecentVideos />
        </div>
        <div className="col-span-3">
          <RecentEpisodes />
          <AnimeOfWeek />
          <MostRecentPoll />
        </div>
      </div>
    </div>
  );
}

export default App;
