"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Stack,
  Toolbar,
  IconButton,
  Drawer,
  ListItemText,
  Collapse,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Logo } from "../_atoms/Logo";
import NavMenuButton from "../_atoms/NavMenuButton";
import NavMenuDropDownIconButton from "../_atoms/MenuDropDownIconButton";
import NavMenuDropdown from "./NavMenuDropDown";
import DefaultButton from "../_atoms/DefaultButton";

type MenuItem = {
  itemName: string;
  link: string;
  icon?: React.ReactNode;
  childItems?: MenuItem[];
};

interface HeaderNavProps {
  menuItems: MenuItem[];
}

export function HeaderNav({ menuItems }: HeaderNavProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [menuDropdownToggle, setMenuDropdownToggle] = useState<number | null>(
    null,
  );

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleToggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleMenuDropdownToggle = (index: number) => {
    setMenuDropdownToggle((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "transparent" }}>
        <Toolbar className='navbar'>
          <Box
            sx={{
              border: "2px solid white",
              borderRadius: "8px",
              px: 1,
            }}>
            <Logo />
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
              gap: 2,
              mr: 2,
            }}>
            {menuItems.map((item, index) => {
              const hasChildren = !!item.childItems?.length;
              const isOpen = menuDropdownToggle === index;

              return (
                <Box
                  key={item.itemName}
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <NavMenuButton href={item.link} label={item.itemName} />
                  {hasChildren && (
                    <NavMenuDropDownIconButton
                      open={isOpen}
                      onClick={() => handleMenuDropdownToggle(index)}>
                      <ExpandMore />
                    </NavMenuDropDownIconButton>
                  )}
                  {hasChildren && (
                    <NavMenuDropdown
                      menu
                      open={isOpen}
                      items={item.childItems!}
                      onClose={() => setMenuDropdownToggle(null)}
                    />
                  )}
                </Box>
              );
            })}
          </Box>
          {!drawerOpen && (
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "transparent",
            elevation: 0,
            boxShadow: "none",
          },
        }}>
        <Box
          sx={{ width: 250, backgroundColor: "transparent", my: 3 }}
          role='presentation'
          color='inherit'>
          <Stack sx={{ backgroundColor: "transparent" }}>
            {menuItems?.map((item, index) => {
              const hasChildren = !!item.childItems?.length;
              const isOpen = openIndex === index;
              return (
                <React.Fragment key={item.itemName}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}>
                    <Button
                      component={Link}
                      href={item.link}
                      onClick={() => {
                        setDrawerOpen(false);
                      }}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        textTransform: "none",
                        border: "2px solid transparent",
                        borderRadius: 2,
                        px: 2,
                        py: 1,
                        mb: 1,
                        mr: 1,
                        fontSize: "1rem",
                        bgcolor: "#000",
                        color: "white",
                        transition: "all 0.2s ease",

                        "&:hover": {
                          borderColor: "#f44336",
                        },
                      }}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {item.icon && (
                          <Box sx={{ mr: 2, display: "flex" }}>{item.icon}</Box>
                        )}
                        <ListItemText primary={item.itemName} />
                      </Box>
                      {hasChildren && (
                        <Box
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleToggleSubmenu(index);
                          }}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            ml: 1,
                            cursor: "pointer",
                          }}>
                          {isOpen ? <ExpandLess /> : <ExpandMore />}
                        </Box>
                      )}
                    </Button>
                  </Box>
                  {hasChildren && (
                    <Collapse in={isOpen} timeout='auto' unmountOnExit>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                          pl: 4,
                        }}>
                        {item.childItems!.map((child) => (
                          <DefaultButton
                            key={child.itemName}
                            href={child.link}
                            onClick={() => {
                              setDrawerOpen(false);
                              handleToggleSubmenu(index);
                            }}
                            label={child.itemName}
                          />
                        ))}
                      </Box>
                    </Collapse>
                  )}
                </React.Fragment>
              );
            })}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
