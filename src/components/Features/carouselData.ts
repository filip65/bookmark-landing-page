export type CarouselItem = {
  name: string;
  image: string;
  title: string;
  text: string;
};

const data: CarouselItem[] = [
  {
    name: "simple bookmarking",
    image: "images/features-1.svg",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    name: "speedy searching",
    image: "images/features-2.svg",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    name: "easy sharing",
    image: "images/features-3.svg",
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

export default data;
