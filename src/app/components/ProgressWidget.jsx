import ProgressBar from "./ProgressBar";

export default function ProgressWidget() {
  return (
    <div className="px-4 py-5">
      <div className="flex items-center justify-between mb-5">
        <h6 className="font-semibold">Top Platform</h6>
        <p className="text-[#34CAA5] cursor-pointer">See All</p>
      </div>
      <ProgressBar
        title="Book Bazaar"
        color="#6160DC"
        progress="55"
        price="$2,500,000"
        percentage="+15%"
      />
      <ProgressBar
        title="Artisan Aisle"
        color="#54C5EB"
        progress="47"
        price="$1,800,000"
        percentage="+10%"
      />
      <ProgressBar
        title="Toy Troop"
        color="#FFB74A"
        progress="30"
        price="$1,750,000"
        percentage="+12%"
      />
      <ProgressBar
        title="Xstore"
        color="#FF616B"
        progress="30"
        price="$2,000,000"
        percentage="+17%"
      />
    </div>
  );
}
