import { NavLink } from "../_molecules/NavLink"
import { Logo } from "../_atoms/Logo"

export function HeaderNav({ menuItems }: { menuItems: any }) {
  return (
    <nav className="navbar">
      <Logo className="border-white border-2 rounded-md px-1" />
      <ul className="flex items-center gap-3">
        <NavLink menuItems={menuItems} />
      </ul>
    </nav>
  )
}
