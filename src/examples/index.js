/**
 * Example ReactXS
 */
import createExampleList from "./createExampleList";
import Card from "./Card";
import Divider from "./Divider";
import Tab from "./Tab";
import Profile from "./Profile";
import List from "./List";
import Gallery from "./Gallery";
import ProductCard from "./ProductCard";
import OnBoarding from "./OnBoarding";

export { Card, Divider, List, Tab, Profile, Gallery, ProductCard, OnBoarding };

const listExamples = [
  {
    id: "Card",
    data: Card
  },
  {
    id: "Divider",
    data: Divider
  },
  {
    id: "List",
    data: List
  },
  {
    id: "Tab",
    data: Tab
  },
  {
    id: "Profile",
    data: Profile
  },
  {
    id: "Gallery",
    data: Gallery
  },
  {
    id: "ProductCard",
    data: ProductCard
  },
  {
    id: "OnBoarding",
    data: OnBoarding
  }
];

export default createExampleList(listExamples, "Examples", true);
