import { NavLink } from "../_molecules/NavLink"
import { Logo } from "../_atoms/Logo"
import Box from "@mui/material/Box";

export function HeaderNav({ menuItems }: { menuItems: any }) {
  return (
    <nav className='navbar'>
      <Box
        sx={{
          border: "2px solid white",
          borderRadius: "8px",
          px: 1,
        }}>
        <Logo />
      </Box>
      <Box
        component='ul'
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          listStyle: "none",
          p: 0,
          m: 0,
        }}>
        {/* <NavLink menuItems={menuItems} /> */}
      </Box>
    </nav>
  );
}
