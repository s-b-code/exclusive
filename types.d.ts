type HexColor = `#${string}`;

type URLString = `${"http" | "https"}://${string}` | "#";

export type Product = {
  id: number;
  image: URLString;
  name: string;
  price: number;
  rating: number;
  reviewsCount: number;
  availableColors?: HexColor[];
};

export type TeamMember = {
  id: number;
  image: URLString;
  name: string;
  designation: string;
  twitterLink: URLString;
  instagramLink: URLString;
  linkedInLink: URLString;
};

export type CartItem = Product & {
  quantity: number;
};

export type Category = {
  id: number;
  name: string;
  icon: string; //TODO: Replace this with URLString as this will be fetched from database
};

export interface FlashSalesProduct extends Product {
  discountPrice: number;
}
