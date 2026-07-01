import { ClickAwayListener, Stack } from "@mui/material";
import MenuButton from "../_atoms/NavMenuButton";

interface ChildItem {
  itemName: string;
  link: string;
}

interface NavMenuDropdownProps {
  open: boolean;
  menu: boolean;
  items: ChildItem[];
  onClose: () => void;
}

export default function NavMenuDropdown({
  open,
  items,
  onClose,
  menu = false,
}: NavMenuDropdownProps) {
  if (!open) return null;

  return (
    <ClickAwayListener onClickAway={onClose}>
      <Stack
        sx={{
          position: menu ? "absolute" : "static",
          top: "calc(100% + 8px)",
          right: 0,
          minWidth: 220,
          zIndex: 1000,
        }}
        spacing={1}
      >
        {items.map((item) => (
          <MenuButton
            key={item.itemName}
            href={item.link}
            label={item.itemName}
            black
          />
        ))}
      </Stack>
    </ClickAwayListener>
  );
}