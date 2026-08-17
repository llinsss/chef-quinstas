export type PortfolioItem = {
  title: string;
  category: string;
  image?: string;
  video?: string;
  wide?: boolean;
};
export const portfolio: PortfolioItem[] = [
  {
    title: "Chef Quinstas",
    category: "Portraits",
    image: "/assets/quinstas/portrait-editorial.jpg",
    wide: true,
  },
  {
    title: "From the professional kitchen",
    category: "Behind the scenes",
    image: "/assets/quinstas/chef-kitchen.jpeg",
  },
  {
    title: "The story in motion",
    category: "Videos",
    video: "/assets/quinstas/chef-story.mp4",
  },
  {
    title: "A warm Abuja welcome",
    category: "Portraits",
    image: "/assets/quinstas/portrait-smile.jpeg",
  },
  {
    title: "Precision, personality and purpose",
    category: "Videos",
    video: "/assets/quinstas/chef-moment.mov",
  },
  {
    title: "Chef Quinstas in Abuja",
    category: "Behind the scenes",
    image: "/assets/quinstas/abuja-event.jpg",
  },
  {
    title: "The woman behind the cuisine",
    category: "Portraits",
    image: "/assets/quinstas/portrait-close.jpg",
  },
];
export const services = [
  {
    num: "01",
    title: "Aviation & Private Chef Services",
    text: "Time-sensitive culinary production shaped around guest preferences, discretion, presentation, food safety and consistent execution.",
  },
  {
    num: "02",
    title: "Recipe & Menu Development",
    text: "Repeatable, scalable and commercially practical recipes and menus developed around flavour, cost, capacity and target audience.",
  },
  {
    num: "03",
    title: "Culinary Consulting",
    text: "Practical support that helps food businesses improve food quality, kitchen structure, production flow and commercial performance.",
  },
  {
    num: "04",
    title: "Hospitality Operations",
    text: "Operational leadership that connects food, people, service standards, guest experience and financial responsibility.",
  },
  {
    num: "05",
    title: "Kitchen Management",
    text: "Clear systems, accountability and structure for kitchens where quality, hygiene, efficiency and consistency are maintained daily.",
  },
  {
    num: "06",
    title: "Training & Mentorship",
    text: "Professional guidance for emerging culinary teams and practitioners, rooted in strong standards and continuous learning.",
  },
];
