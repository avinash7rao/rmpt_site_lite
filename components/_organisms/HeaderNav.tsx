"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Logo } from "../_atoms/Logo";

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

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleToggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
              gap: 4,
              mr: 2,
            }}>
            {menuItems.map((item) => (
              <Box
                key={item.itemName}
                sx={{
                  position: "relative",
                  "&:hover .submenu": {
                    display: "block",
                  },
                }}>
                <Typography
                  component={Link}
                  href={item.link}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}>
                  {item.itemName}
                </Typography>

                {item.childItems && (
                  <Box
                    className='submenu'
                    sx={{
                      display: "none",
                      position: "absolute",
                      top: "100%",
                      right: 0,
                      left: "auto",
                      bgcolor: "transparent important!",
                      minWidth: 220,
                      maxWidth: "90vw",
                      boxShadow: 3,
                      borderRadius: 1,
                      overflow: "hidden",
                      zIndex: 1000,
                      gap: 2,
                    }}>
                    {item.childItems.map((child) => (
                      <Typography
                        key={child.itemName}
                        component={Link}
                        href={child.link}
                        sx={{
                          display: "block",
                          px: 2,
                          py: 1,
                          color: "white",
                          textDecoration: "none",
                          "&:hover": {
                            bgcolor: "action.hover",
                          },
                        }}>
                        {child.itemName}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
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
        </Toolbar>
      </AppBar>

      <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 300, backgroundColor: "transparent" }}
          role='presentation'
          color='inherit'>
          <List sx={{ backgroundColor: "transparent" }}>
            {menuItems?.map((item, index) => {
              const hasChildren = !!item.childItems?.length;
              const isOpen = openIndex === index;
              return (
                <React.Fragment key={item.itemName}>
                  <ListItemButton
                    onClick={() => {
                      if (hasChildren) {
                        handleToggleSubmenu(index);
                      } else {
                        setDrawerOpen(false);
                      }
                    }}
                    component={!hasChildren ? Link : "div"}
                    href={!hasChildren ? item.link : undefined}>
                    {item.icon && (
                      <Box sx={{ mr: 2, display: "flex" }}>{item.icon}</Box>
                    )}
                    <ListItemText primary={item.itemName} />
                    {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                  {hasChildren && (
                    <Collapse in={isOpen} timeout='auto' unmountOnExit>
                      <List component='div' disablePadding>
                        {item.childItems!.map((child) => (
                          <ListItemButton
                            key={child.itemName}
                            sx={{ pl: 4 }}
                            component={Link}
                            href={child.link}
                            onClick={() => setDrawerOpen(false)}>
                            <ListItemText primary={child.itemName} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </React.Fragment>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
