import React from "react";
import Image from "next/image";
import { IoBrowsersOutline, IoLogoReact } from "react-icons/io5";
import { LuCalculator } from "react-icons/lu";
import { MdCatchingPokemon } from "react-icons/md";
import { SidebarMenuItems } from "./SidebarMenuItems";
import { CiStar } from "react-icons/ci";


const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} className="text-amber-700"/>,
    title: "Dashboard",
    subtitle: "Visualizacion",
  },
  {
    path: "/dashboard/counter",
    icon: <LuCalculator  size={40} className="text-gray-500"/>,
    title: "Counter",
    subtitle: "Contador",
  },
  {
    path: "/dashboard/pokemons",
    icon: <MdCatchingPokemon  size={40} className="text-red-400" />,
    title: "Pokemons",
    subtitle: "Lista de Pokemons",
  },
  {
    path: "/dashboard/favorites",
    icon: <CiStar  size={40} className="text-amber-300" />,
    title: "Favorites",
    subtitle: "Lista de Pokemons favoritos",
  },
];

export const Sidebar: React.FC = () => {

  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="flex items-center my-4 px-6">
        <IoLogoReact className="mr-2" />
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Dash<span className="text-blue-500">8</span>.
        </h1>
      </div>
      <p className="text-slate-500 text-sm -mt-4 ml-4">
        Manage your actions and activities
      </p>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500 mb-5">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              src="/perfil-hombre-dibujos-animados_18591-58483.avif"
              width={50}
              height={50}
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">Arnau Aumedes</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItems
            key={item.path}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};
