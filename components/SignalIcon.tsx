/** Material-style ascending signal bars (signal_cellular_alt). */
export default function SignalIcon({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex w-5 items-end justify-between ${className}`}
      style={{ height: 16 }}
    >
      <span className="w-[3.5px] rounded-[1px] bg-sg-700" style={{ height: 4 }} />
      <span className="w-[3.5px] rounded-[1px] bg-sg-700" style={{ height: 8 }} />
      <span className="w-[3.5px] rounded-[1px] bg-sg-700" style={{ height: 12 }} />
      <span className="w-[3.5px] rounded-[1px] bg-sg-700" style={{ height: 16 }} />
    </span>
  );
}
