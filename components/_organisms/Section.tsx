import { Logo } from "../_atoms/Logo"
import { CopyRight } from "../_atoms/Icons/CopyRight"

export function Footer({ footer }: { footer: any }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div></div>
      <div className="flex items-center justify-center gap-1">
        <CopyRight />
        <p className="text-sm text-white">
          {footer?.items?.field_company_name} {footer?.items?.field_year}
        </p>
        <hr className="border-white"/>
      </div>
    </div>
  )
}
