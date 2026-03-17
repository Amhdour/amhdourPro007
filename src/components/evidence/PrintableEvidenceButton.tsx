"use client";

export default function PrintableEvidenceButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print-hidden px-4 py-2 rounded-md border border-site-primary text-site-primary font-semibold hover:bg-site-primary hover:text-white transition-colors duration-300"
      type="button"
    >
      Download / Print Evidence Pack
    </button>
  );
}
