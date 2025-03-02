const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 3,
    title: "Support/Contact Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Explore more",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Gallery",
        path: "/gallery",
        newTab: false,
      },
      {
        id: 42,
        title: "Testimonials",
        path: "/testimonials",
        newTab: false,
      },
      // {
      //   id: 43,
      //   title: "Reviews and Ratings",
      //   path: "/blog-sidebar",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
];
export default menuData;