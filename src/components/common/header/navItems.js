export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Treatments",
    href: "/treatments",
  },
  {
    label: "Type of Cancer",
    dropdown: [
      { label: "Blood Cancer", href: "/typeofcancer/blood-cancer" },
      { label: "Brain Cancer", href: "/typeofcancer/brain-cancer" },
      { label: "Bone Cancer", href: "/typeofcancer/bone-cancer" },
      { label: "Breast Cancer", href: "/typeofcancer/breast-cancer" },
      { label: "Cervical Cancer", href: "/typeofcancer/cervical-cancer" },
      { label: "Colorectal Cancer", href: "/typeofcancer/colorectal-cancer" },
      { label: "Lung Cancer", href: "/typeofcancer/lung-cancer" },
      { label: "Mouth and Oral Cancer", href: "/typeofcancer/mouth-cancer" },
      { label: "Prostate Cancer", href: "/typeofcancer/prostate-cancer" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
  {
    label: "Media",
    dropdown: [
      { label: "Photos", href: "/media/gallery" },
      { label: "Videos", href: "/media/videos" },
    ],
  },
];
