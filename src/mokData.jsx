import { FaFire, FaLeaf, FaGlassCheers, FaBreadSlice } from "react-icons/fa";
import { FaBurger, FaFireFlameSimple, FaTachographDigital } from "react-icons/fa6";

export const menuDataa = [
  {
    title: "Kebab",
    icon: <FaFire className="icon" />,
    items: [
      {
        name: "Poulet Kebab",
        description: "mit Salat und Sauce",
        price: "13.00",
      },
      {
        name: "Poulet Dürüm",
        description: "mit Salat und Sauce",
        price: "14.00",
      },
      {
        name: "Poulet Box",
        description: "mit Pommes oder Salat",
        price: "13.00",
      },
      {
        name: "Poulet Kebab Teller",
        description: "mit Pommes und Salat",
        price: "19.00",
      },
      {
        name: "Steak Kebab",
        description: "mit Salat und Sauce",
        price: "15.00",
      },
      {
        name: "Steak Dürüm",
        description: "mit Salat und Sauce",
        price: "16.00",
      },
      {
        name: "Steak Kebab Box",
        description: "mit Pommes oder Salat",
        price: "15.00",
      },
      {
        name: "Steak Kebab Teller",
        description: "mit Pommes und Salat",
        price: "23.00",
      },
    ],
  },
  {
    title: "Vegetarische Gerichte",
    icon: <FaLeaf className="icon" />,
    items: [
      { name: "Vegetarische", description: "Halloumi Sandwich", price: "13.00" },
      { name: "Halloumi Sandwich", price: "13.00" },
      { name: "Falafel Sandwich", price: "13.00" },
      { name: "Falafel Dürüm", price: "14.00" },
      { name: "Falafel Teller", price: "17.00" },
      { name: "Falafel Box", price: "13.00" },
    ],
  },
  {
    title: "Pide",
    icon: <FaBreadSlice className="icon" />,
    items: [
      { name: "Pide Käse", price: "17.00" },
      { name: "Pide Spinat", price: "19.00" },
      { name: "Pide Kebab", price: "20.00" },
      { name: "Pide Sucuk", price: "20.00" },
    ],
  },
  {
    title: "Beilagen",
    icon: <FaFireFlameSimple className="icon" />,
    items: [
      { name: "Pommes klein", price: "7.00" },
      { name: "Pommes groß", price: "10.00" },
      { name: "Twister Fries", price: "12.00" },
      { name: "Nuggets Box", price: "14.00" },
      { name: "Nuggets Teller", price: "18.00" },
      { name: "6er Nuggets", price: "10.00" },
    ],
  },
  {
    title: "Getranke",
    icon: <FaGlassCheers className="icon" />,
    items: [
      { name: "Dose", price: "3.50" },
      { name: "Flasche", price: "4.50" },
      { name: "Ayran", price: "3.50" },
    ],
  },
  {
    title: "French Tacos",
    icon: <FaTachographDigital className="icon" />,
    items: [
      { name: "mit Steak Kebab", price: "18.00" },
      { name: "mit Poulet Kebab", price: "17.00" },
      { name: "mit Falafel", price: "15.00" },
      { name: "mit Chicken Nuggets", price: "16.00" },
    ],
  },
  {
    title: "Burger",
    icon: <FaBurger className="icon" />,
    items: [
      { name: "Hamburger", price: "12.00" },
      { name: "Cheeseburger", price: "14.00" },
      {
        name: "Mexican Burger",
        descr: "Cheeseburger mit Jalapenos",
        price: "15.00",
      },
    ],
  },
  {
    title: "Saucen",
    icon: <FaGlassCheers className="icon" />,
    items: [
      { name: "Samurai", price: "2.00" },
      { name: "Hummus", price: "2.00" },
      { name: "Tzatziki", price: "2.00" },
      { name: "Scharfe", price: "2.00" },
    ],
  },
];
export const menuData = [
  // {
  //   category: "Poulet Kebab",
  //   items: [
  //     { name: "Poulet Kebab", descr: "mit Salat und Sauce", price: "13.00" },
  //     { name: "Poulet Dürüm", descr: "mit Salat und Sauce", price: "14.00" },
  //     { name: "Poulet Box", descr: "mit Pommes oder Salat", price: "13.00" },
  //     { name: "Poulet Kebab Teller", descr: "mit Pommes und Salat", price: "19.00" },
  //   ]
  // },
  // {
  //   category: "Vegetarische Gerichte",
  //   items: [
  //     { name: "Vegetarische", descr: "Halloumi Sandwich", price: "13.00" },
  //     { name: "Halloumi Sandwich", price: "13.00" },
  //     { name: "Falafel Sandwich", price: "13.00" },
  //     { name: "Falafel Dürüm", price: "14.00" },
  //     { name: "Falafel Teller", price: "17.00" },
  //     { name: "Falafel Box", price: "13.00" }
  //   ]
  // },
  // {
  //   category: "Pide",
  //   items: [
  //     { name: "Pide Käse", price: "17.00" },
  //     { name: "Pide Spinat", price: "19.00" },
  //     { name: "Pide Kebab", price: "20.00" },
  //     { name: "Pide Sucuk", price: "20.00" },
  //   ],
  // },
  // {
  //   category: "Steak Kebab",
  //   items: [
  //     { name: "Steak Kebab", descr: "mit Salat und Sauce", price: "15.00" },
  //     { name: "Steak Dürüm", descr: "mit Salat und Sauce", price: "16.00" },
  //     { name: "Steak Kebab Box", descr: "mit Pommes oder Salat", price: "15.00" },
  //     { name: "Steak Kebab Teller", descr: "mit Pommes und Salat", price: "23.00" },

  //   ]
  // },
  // {
  //   category: "French Tacos",
  //   items: [
  //     { name: "mit Steak Kebab", price: "18.00" },
  //     { name: "mit Poulet Kebab", price: "17.00" },
  //     { name: "mit Falafel", price: "15.00" },
  //     { name: "mit Chicken Nuggets", price: "16.00" },
  //   ],
  // },
  // {
  //   category: "Burger",
  //   items: [
  //     { name: "Hamburger", price: "12.00" },
  //     { name: "Cheeseburger", price: "14.00" },
  //     {
  //       name: "Mexican Burger",
  //       descr: "Cheeseburger mit Jalapenos",
  //       price: "15.00",
  //     },
  //   ],
  // },
  // {
  //   category: "Beilagen",
  //   items: [
  //     { name: "Pommes klein", price: "7.00" },
  //     { name: "Pommes groß", price: "10.00" },
  //     { name: "Twister Fries", price: "12.00" },
  //     { name: "Nuggets Box", price: "14.00" },
  //     { name: "Nuggets Teller", price: "18.00" },
  //     { name: "6er Nuggets", price: "10.00" },
  //   ],
  // },
  // {
  //   category: "Getranke",
  //   items: [
  //     { name: "Dose", price: "3.50" },
  //     { name: "Flasche", price: "4.50" },
  //     { name: "Ayran", price: "3.50" },
  //   ],
  // },
  // {
  //   category: "Saucen",
  //   items: [
  //     { name: "Samurai", price: "2.00" },
  //     { name: "Hummus", price: "2.00" },
  //     { name: "Tzatziki", price: "2.00" },
  //     { name: "Scharfe", price: "2.00" }
  //   ]
  // },
];
