import { cn } from "../utils/cn";

export default function Backdrop({ show, setShow }) {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-[51] hidden w-screen h-screen bg-[rgba(0,0,0,0.7)]",
        !show ? "hidden" : "block"
      )}
      onClick={() => setShow(false)}
    ></div>
  );
}
