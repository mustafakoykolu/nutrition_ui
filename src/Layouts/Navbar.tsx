import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../Helpers/AuthHelper";

import logo from "../assets/Logos/logo.svg"

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const auth = useAuth();
  const location = useLocation();
  const foodListSubMenu = [
    {
      name: "Yemek Tarifleri",
      href: "/yemek-tarifleri",
      current: location.pathname === "/yemek-tarifleri",
    },
    {
      name: "Yemek Listem",
      href: "/yemek-listem",
      current: location.pathname === "/yemek-listem",
    },
  ];
  const caloryListSubMenu = [
    {
      name: "Kalori Durumum",
      href: "#",
      current: location.pathname === "asd",
    },
    {
      name: "Besin Kalorileri",
      href: "/besin-kalorileri",
      current: location.pathname === "/besin-kalorileri",
    },
  ];
  const navigationTabs = [
    { name: "Dashboard", href: "/", current: location.pathname === "/" },
    {
      name: "Yemek",
      href: "/yemek",
      current: location.pathname === "/yemek",
      subMenu: foodListSubMenu,
    },
    {
      name: "Kalori Takip",
      href: "/kalori-takip",
      current: location.pathname === "/kalori-takip",
      subMenu: caloryListSubMenu,
    },
    {
      name: "Sosyal",
      href: "/sosyal-medyam",
      current: location.pathname === "/sosyal-medyam",
    },
    // {
    //   name: "Alışveriş Listem",
    //   href: "alisveris-listem",
    //   current: location.pathname === "/alisveris-listem",
    // },
  ];


  function logout(): void {
    auth.logout();
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Logo"
                src={logo}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigationTabs.map((item) => {
                  if (item.subMenu) {
                    return (
                      <Menu as="div" className="relative ml-3">
                        <div
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                        >
                          <MenuButton className="relative flex rounded-full text-sm :outline-none">
                            <span className="absolute -inset-1.5" />
                            {item.name}
                          </MenuButton>
                        </div>
                        <MenuItems
                          transition
                          className="absolute  z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          {item.subMenu.map((subMenu) => (
                            <MenuItem>
                              <Link
                                to={subMenu.href}
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                              >
                                {subMenu.name}
                              </Link>
                            </MenuItem>
                          ))}
                        </MenuItems>
                      </Menu>
                    );
                  } else {
                    return (
                      <Link
                        key={item.name}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        to={item.href}
                      >
                        {item.name}
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link
                    to={"/profilim"}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Profilim
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to={"#"}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Ayarlar
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to={"#"}
                    onClick={logout}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Çıkış Yap
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigationTabs.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
