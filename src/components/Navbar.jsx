import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuList,
  MenuHandler,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { InputIcon } from "./Input";
import { Link } from "react-router-dom";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <Typography
        as="p"
        variant="small"
        color="blue-gray"
        className="font-normal "
      >
        Hello, Riski
      </Typography>
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default function NavbarDefault() {
  const [openNav, setOpenNav] = useState(false);

  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Menu>
        <MenuHandler>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 mt-4 mr-4 font-normal"
          >
            <button className="flex flex-col items-center gap-1">
              News <ChevronDownIcon strokeWidth={2.5} className={`h-3 w-3 `} />
            </button>
          </Typography>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <Link to="/">News</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuHandler>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 mt-4 mr-4 font-normal"
          >
            <button className="  flex flex-col gap-1 items-center">
              Anime{" "}
              <ChevronDownIcon strokeWidth={2.5} className={`h-3 w-3   `} />
            </button>
          </Typography>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <Link to="/anime/list">List Anime</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/anime/genre">Genre</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 mr-4 font-normal"
      >
        <a href="#" className="flex items-center">
          Review
        </a>
      </Typography>
      <div className="relative flex w-full gap-2 md:w-max z-50">
        <InputIcon />
      </div>
      {isLogin ? (
        <ProfileMenu />
      ) : (
        <Typography
          key="account"
          as="a"
          href="/login/"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <UserCircleIcon />
          Login
        </Typography>
      )}
    </ul>
  );

  return (
    <div className="w-full relative  bg-gray-50 h-full">
      <Navbar
        color="transparent"
        className="sticky bg-blue-gray-50 top-0 z-10 h-max max-w-full rounded-none py-0 px-4  lg:px-8 "
      >
        <div className="flex items-center justify-between relative">
          <Typography
            as="a"
            href="#"
            className="-ml-8  cursor-pointer font-extrabold  drop-shadow-lg  bg-blue-gray-900  flex items-center gap-2  w-[31%]  px-16  text-white py-6  text-4xl"
          >
            愛{" "}
            <span className="block font-bold text-2xl text_gradient">
              NiMETSUKi
            </span>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
        <span className=" absolute z-[20] w-[75%] bottom-0 left-0 h-[2px] bg-amber-800 shadow "></span>
      </Navbar>
    </div>
  );
}
