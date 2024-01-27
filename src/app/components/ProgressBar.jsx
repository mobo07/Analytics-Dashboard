export default function ProgressBar({
  title,
  color,
  progress,
  price,
  percentage,
}) {
  return (
    <div className="flex flex-col gap-3 my-5 w-full">
      <h6 className="font-semibold">{title}</h6>
      <div className="w-full h-[10px] rounded-[999px] bg-[var(--gray-100)] dark:bg-[var(--gray-200)]">
        <div
          className="h-full rounded-[999px]"
          style={{
            backgroundColor: color,
            width: progress + "%",
          }}
        ></div>
      </div>
      <div className="w-full flex items-center justify-between text-sm">
        <p>{price}</p>
        <p>{percentage}</p>
      </div>
    </div>
  );
}
