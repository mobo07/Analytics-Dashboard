import Backdrop from "./Backdrop";
import PrintIcon from "@mui/icons-material/Print";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CloseIcon from "@mui/icons-material/Close";

export default function Modal({ show, setShow, data }) {
  return (
    <div>
      <Backdrop show={show} setShow={setShow} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[150] bg-white w-[85%] max-w-96 rounded-lg border border-[var(--gray-100)] p-4 dark:bg-[var(--dark-bg-secondary)] dark:border-[var(--gray-700)]">
        <div className="relative w-full h-full">
          <span
            className="absolute top-0 right-0 p-[1px] border border-[var(--gray-400)] dark:border-[var(--gray-700)] rounded-sm cursor-pointer"
            onClick={() => setShow(false)}
          >
            <CloseIcon fontSize="small" />
          </span>
          <h5 className="font-semibold text-center mb-4 text-[var(--gray-700)] dark:text-inherit">
            Invoice
          </h5>
          <p className="my-4 text-sm text-[var(--gray-600)] dark:text-[var(--gray-300)]">
            <span className="font-semibold">Name:</span> {data.Name}
          </p>
          <p className="my-4 text-sm text-[var(--gray-600)] dark:text-[var(--gray-300)]">
            <span className="font-semibold">Contact:</span> +234 5672 8901
          </p>
          <p className="my-4 text-sm text-[var(--gray-600)] dark:text-[var(--gray-300)]">
            <span className="font-semibold">Date:</span> {data.Date}
          </p>
          <p className="my-4 text-sm text-[var(--gray-600)] dark:text-[var(--gray-300)]">
            <span className="font-semibold">Amount:</span> {data.Amount}
          </p>
          <p className="my-4 text-sm text-[var(--gray-600)] dark:text-[var(--gray-300)]">
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={`px-2 py-1 rounded-md ${
                data.Status === "Refund"
                  ? "bg-[#FDEAEA] text-[#ED544E]"
                  : "bg-[#E7F9F4] text-[#34CAA5]"
              }`}
            >
              {data.Status}
            </span>
          </p>
          {/* Buttons */}
          <div className="flex items-center gap-3 text-xs text-[var(--gray-600)] w-fulll justify-end mt-10 dark:text-[var(--gray-300)]">
            <button className="flex items-center gap-1 p-1 border rounded-sm border-[var(--gray-400)] dark:border-[var(--gray-700)]">
              <PrintIcon fontSize="small" />
              Print
            </button>
            <button className="flex items-center gap-1 p-1 border rounded-sm border-[var(--gray-400)] dark:border-[var(--gray-700)]">
              <FileDownloadIcon fontSize="small" />
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <span
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
</span>; */
}
