export const excludeBottomNavRoutes = ["/compose/log"];

export const tickNavRoutes = [
  {
    iconName: "home",
    path: "/home",
    value: 0,
    alabel: "home",
  },
  {
    iconName: "search",
    path: "/search",
    value: 1,
    alabel: "search",
  },
  {
    iconName: "bookmark",
    path: "/bookmarks",
    value: 2,
    alabel: "bookmark",
  },
  {
    iconName: "notification",
    path: "/notifications",
    value: 3,
    alabel: "notification",
  },
];

export const simpleNavRoutes = [
  "/home",
  "/search",
  "/bookmarks",
  "/notifications",
];

export const titleRoutes = [
  {
    path: "/home",
    title: ["Home"],
  },
  {
    path: "/bookmarks",
    title: ["Bookmarks"],
  },
  {
    path: "/notifications",
    title: ["Notifications"],
  },
  {
    path: "/settings",
    title: ["Settings", true],
  },
  {
    path: "/settings/search",
    title: ["Search settings"],
  },
  {
    path: "/settings/bookmarks",
    title: ["Bookmarks", true],
  },
  {
    path: "/settings/notifications",
    title: ["Notifications", true],
  },
];
