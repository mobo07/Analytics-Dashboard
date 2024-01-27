"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import arrowDownIcon from "../assets/icons/arrow-down.svg";

const data = [
  {
    name: "Jan",
    value: 6000,
  },
  {
    name: "Feb",
    value: 20000,
  },
  {
    name: "Mar",
    value: 3000,
  },
  {
    name: "Apr",
    value: 27000,
  },
  {
    name: "May",
    value: 8000,
  },
  {
    name: "Jun",
    value: 45000,
  },
  {
    name: "Jul",
    value: 8000,
  },
  {
    name: "Aug",
    value: 17000,
  },
  {
    name: "Sep",
    value: 32000,
  },
  {
    name: "Oct",
    value: 4000,
  },
  {
    name: "Nov",
    value: 30000,
  },
  {
    name: "Dec",
    value: 26000,
  },
];

export default function Chart() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Weekly");

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedValue = (val) => {
    setSelectedValue(val);
    handleDropDown();
  };

  return (
    <div className="">
      <div className="flex items-center justify-between mb-5">
        <h6 className="font-semibold">Sales Trend</h6>
        <div className="flex items-center gap-2 text-sm">
          Sort by:
          <div className="relative flex gap-3 items-center px-2 py-1 rounded-[999px] border  border-[var(--gray-200)] select-none dark:border-[var(--gray-700)]">
            <p>{selectedValue}</p>
            <Image
              src={arrowDownIcon}
              alt="arrow-down-icon"
              className="cursor-pointer"
              onClick={handleDropDown}
            />
            {isOpen && (
              <div className="absolute top-8 left-0 z-50 w-full bg-white border border-[var(--gray-200)] rounded-md shadow-sm dark:bg-[var(--dark-bg-secondary)] dark:border-[var(--gray-700)]">
                <span
                  className="block w-full p-2 cursor-pointer hover:bg-[var(--gray-100)] dark:hover:bg-[var(--gray-700)]"
                  onClick={() => handleSelectedValue("Weekly")}
                >
                  Weekly
                </span>
                <span
                  className="block w-full p-2 cursor-pointer hover:bg-[var(--gray-100)] dark:hover:bg-[var(--gray-700)]"
                  onClick={() => handleSelectedValue("Monthly")}
                >
                  Monthly
                </span>
                <span
                  className="block w-full p-2 cursor-pointer hover:bg-[var(--gray-100)] dark:hover:bg-[var(--gray-700)]"
                  onClick={() => handleSelectedValue("Yearly")}
                >
                  Yearly
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-[18.5rem]">
        <ResponsiveContainer
          width="100%"
          height="100%"
          style={{
            fontFamily: "inherit",
            fontSize: "0.8rem",
            fontWeight: 600,
          }}
        >
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[0, 50000]} />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar
              dataKey="value"
              fill="#30CEA0"
              barSize={30}
              radius={[999, 999, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
