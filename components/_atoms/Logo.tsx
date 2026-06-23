import Link from "next/link"

export function Logo({ className }: { className?: string }) {
  return (
    <>
      <Link className="px-2" href="/">
        <h2
          className={`${className} font-[Nunito] font-bold tracking-wide flex items-center`}
        >
          <span
            className="text-[#ff0000] italic skew-x-6 animate-flicker
  drop-shadow-[0_0_6px_#ff4d4d]
  drop-shadow-[0_0_14px_#ff0000]
  drop-shadow-[0_0_28px_#cc0000]
  drop-shadow-[0_0_40px_rgba(255,0,0,0.6)]"
          >
            R
          </span>
          <span
            className="text-white
        drop-shadow-[0_0_6px_#ffffff]
        drop-shadow-[0_0_14px_#e6e6e6]
        drop-shadow-[0_0_28px_#cccccc]
        drop-shadow-[0_0_40px_rgba(255,255,255,0.5)]"
          >
            MPT
          </span>
        </h2>
      </Link>
    </>
  )
}
