import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@headlessui/react";
  import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
  import { Link, useLocation } from "react-router-dom";
  
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }
  
 function PreNavbar() {
    const location = useLocation();
    const pathName= location.pathname.toLowerCase();
    const navigationTabs = [
      { name: "Fit Lezzet Nedir", href: "/", current: pathName === "/" },
      // {
      //   name: "Kalori Takibi",
      //   href: "/kalori-takip",
      //   current: pathName === "/kalori-takip",
      // },
      // {
      //   name: "Yemek Listesi",
      //   href: "/yemek-listem",
      //   current: pathName === "/yemek-listem",
      // },
      // {
      //   name: "Alışveriş Listesi",
      //   href: "alisveris-listem",
      //   current: pathName === "/alisveris-listem",
      // },
    ];
    const navigationEndTabs = [
        { name: "Giriş Yap", href: "/Giris", current: pathName === "/giris" },
        {
          name: "Kayıt Ol",
          href: "/Kayit",
          current: pathName  === "/kayit",
        },
      ];
  
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
                  alt="Fit Lezzet Logo"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigationTabs.map((item) => (
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
                  ))}                   
                </div>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
            {navigationEndTabs.map((item) => (
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
                  ))}
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
            {navigationEndTabs.map((item) => (
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
  
export default PreNavbar;