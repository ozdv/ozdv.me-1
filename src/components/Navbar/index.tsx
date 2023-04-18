import React from "react";

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  const navigation = [
    { label: "iCatholic", link: "/#/icatholic" },
    { label: "OpenGames", link: "/#/opengames" },
  ];

  return (
    <nav className="Navbar bg-neutral-100 fixed flex w-full h-16 overflow-x-hidden">
      <div className="shadow-lg px-4 md:px-12 flex items-center border-b border-neutral-400 w-full">
        <a
          className="text-3xl font-bold text-neutral-1000 mr-12 hover:text-blue-400"
          href="/"
        >
          OZDV
        </a>
        <div className="space-x-8 flex h-full">
          {navigation.map((item, index) => (
            <a
              className="inline-flex h-full items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-neutral-900 hover:text-neutral-1000 hover:border-b-blue-400"
              key={`${item.label}-${index}`}
              href={item.link}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
