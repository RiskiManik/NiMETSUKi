import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import ListAnime from "./components/ListAnime";

const SeasonsTabs = () => {
  const [activeTab, setActiveTab] = useState("Airing");

  const url = {
    Airing: "/top/anime?filter=airing&limit=15",
    summer: "/seasons/2022/summer?limit=15",
    spring: "/seasons/2022/spring?limit=15",
    fall: "/seasons/2022/fall?limit=15",
    winter: "/seasons/2022/winter?limit=15",
  };

  const data = [
    {
      label: "Airing",
      value: "Airing",
    },
    {
      label: "Summer",
      value: "summer",
    },
    {
      label: "Spring",
      value: "spring",
    },
    {
      label: "Fall",
      value: "fall",
    },
    {
      label: "Winter",
      value: "winter",
    },
  ];

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b mt-4 border-amber-100 bg-transparent p-0 "
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-amber-700 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`${
              activeTab === value ? "text-gray-900" : ""
            } font-medium text-base cursor-pointer`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        <TabPanel key={activeTab} value={activeTab}>
          <ListAnime url={url[activeTab]} qkey={activeTab} />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
};

export default SeasonsTabs;
