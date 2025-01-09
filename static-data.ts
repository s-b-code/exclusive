import { CartItem, Category, FlashSalesProduct } from "./types";

export const languages = ["English", "Hindi", "Bengali"];
export const categories = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];
export const flashDeals = [
  "https://placehold.co/892x344/png",
  "https://placehold.co/1280x344/png",
  "https://placehold.co/892x344/png",
  "https://placehold.co/1280x344/png",
  "https://placehold.co/892x344/png",
];
export const flashSalesProducts: FlashSalesProduct[] = [
  {
    id: 1,
    image: "https://placehold.co/270x250/png",
    name: "HAVIT HV-G92 Gamepad",
    price: 160,
    discountPrice: 120,
    rating: 5.5,
    reviewsCount: 88,
  },
  {
    id: 2,
    image: "https://placehold.co/270x250/png",
    name: "AK-900 Wired Keyboard",
    price: 1160,
    discountPrice: 960,
    rating: 4,
    reviewsCount: 75,
  },
  {
    id: 3,
    image: "https://placehold.co/270x250/png",
    name: "IPS LCD Gaming Monitor",
    price: 400,
    discountPrice: 370,
    rating: 5,
    reviewsCount: 99,
  },
  {
    id: 4,
    image: "https://placehold.co/270x250/png",
    name: "S-Series Comfort Chair ",
    price: 400,
    discountPrice: 375,
    rating: 4.3,
    reviewsCount: 99,
  },
];
export const carouselCategories: Category[] = [
  {
    id: 1,
    name: "Phones",
    icon: "/dummy/category-icons/phone.svg",
  },
  {
    id: 2,
    name: "Computers",
    icon: "/dummy/category-icons/computer.svg",
  },
  {
    id: 3,
    name: "Smart watches",
    icon: "/dummy/category-icons/smart-watch.svg",
  },
  {
    id: 4,
    name: "Cameras",
    icon: "/dummy/category-icons/camera.svg",
  },
  {
    id: 5,
    name: "Headphones",
    icon: "/dummy/category-icons/headphone.svg",
  },
  {
    id: 6,
    name: "Gaming consoles",
    icon: "/dummy/category-icons/game-console.svg",
  },
];
export const cartItems: CartItem[] = [
  {
    id: 1,
    image: "https://placehold.co/270x250/png",
    name: "HAVIT HV-G92 Gamepad",
    price: 160,
    quantity: 1,
    rating: 5.5,
    reviewsCount: 88,
  },
  {
    id: 2,
    image: "https://placehold.co/270x250/png",
    name: "AK-900 Wired Keyboard",
    price: 1160,
    quantity: 3,
    rating: 4,
    reviewsCount: 75,
  },
  {
    id: 3,
    image: "https://placehold.co/270x250/png",
    name: "IPS LCD Gaming Monitor",
    price: 400,
    quantity: 2,
    rating: 5,
    reviewsCount: 99,
  },
  {
    id: 4,
    image: "https://placehold.co/270x250/png",
    name: "S-Series Comfort Chair ",
    price: 400,
    quantity: 5,
    rating: 4.3,
    reviewsCount: 99,
  },
];
