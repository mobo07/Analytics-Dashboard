import Image from "next/image";
import trendingUp from "../assets/icons/trending-up.png";
import trendingDown from "../assets/icons/trending-down.png";
import greenGraph from "../assets/green-graph.png";
import redGraph from "../assets/red-graph.png";

export default function CardWidget({ icon, cardTitle, stats, percent, trend }) {
  return (
    <div className="bg-white col-span-1 rounded-lg border border-[var(--gray-100)] p-4 flex flex-col gap-2 dark:bg-[var(--dark-bg-secondary)] dark:border-[var(--gray-700)]">
      <div className="flex items-center justify-between">
        <span className="p-2 border border-[var(--gray-100)] rounded-full dark:border-[var(--gray-500)]">
          <Image src={icon} alt="" />
        </span>
        {trend === "up" ? (
          <Image src={greenGraph} alt="" />
        ) : (
          <Image src={redGraph} alt="" />
        )}
      </div>
      <h6 className="text-[var(--gray-300)]">{cardTitle}</h6>
      <h5>{stats}</h5>
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span
          className={`flex items-center gap-1 px-2 py-1 rounded-[999px] ${
            trend === "up" ? "bg-[#E7F9F4]" : "bg-[#FDEAEA]"
          } ${trend === "up" ? "text-[#34CAA5]" : "text-[#ED544E]"}`}
        >
          {trend === "up" ? (
            <Image src={trendingUp} alt="" />
          ) : (
            <Image src={trendingDown} alt="" />
          )}
          {percent}
        </span>
        <p className="text-xs">vs. previous month</p>
      </div>
    </div>
  );
}
