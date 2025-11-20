"use client";

import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/app/store";
``;

export const WidgetsGrid = () => {
  const isCart = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-col items-center mt-10 p-2">
      <SimpleWidget
        title={`${isCart}`}
        subtitle="Simple Counter"
        lable="Contador"
        icon={<IoCartOutline size={70} className="text-blue-500" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
