import { Input, List, ListItem, Card } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import useDebounce from "../hooks/useDebounce";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export function InputIcon() {
  return (
    <div className="w-72 relative">
      <Input
        type="search"
        onChange={(e) => searchQuery(e.target.value)}
        label="Type here..."
        className="pr-4"
        containerProps={{
          className: "min-w-[240px]",
        }}
        icon={<MagnifyingGlassIcon />}
      />
      {/* {data && (
        <Card className="w-full absolute z-50">
          <List>
            {data.map((data) => (
              <Link key={data.mal_id} to={`/anime/`} className="text-initial">
                <ListItem>{data.title}</ListItem>
              </Link>
            ))}
          </List>
        </Card>
      )} */}
    </div>
  );
}
