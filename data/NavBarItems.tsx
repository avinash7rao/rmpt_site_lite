export const NavBarItems = [
  {
    itemName: "Home",
    link: "/",
  },
  {
    itemName: "About Us",
    link: "/about-us",
    childItems: [
      {
        itemName: "Privacy Policy",
        link: "/about-us/privacy-policy",
      },
      {
        itemName: "Terms of Service",
        link: "/about-us/terms-of-service",
      },
    ],
  },
];
