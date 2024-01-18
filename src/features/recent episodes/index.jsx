import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ListRecent from "./components/listRecent";
const RecentEpisodes = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const url = {
    upcoming: "/top/anime?limit=15&filter=upcoming",
    recommended: "/top/anime?limit=15&filter=bypopularity",
  };

  const data = [
    {
      label: "Upcoming Episode",
      value: "upcoming",
    },
    {
      label: "Recommended",
      value: "recommended",
    },
  ];

  return (
    <div className="  ">
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b mt-4  border-amber-100 bg-transparent p-0"
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
            <ListRecent url={url[activeTab]} qkey={activeTab} />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default RecentEpisodes;
