"use client";
import { HiOutlinePrinter } from "react-icons/hi2";
export function PrintButton() {
  return (
    <button
      className="button-secondary print-button"
      onClick={() => window.print()}
    >
      Print / save PDF <HiOutlinePrinter />
    </button>
  );
}
