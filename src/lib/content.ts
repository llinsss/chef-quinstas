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
  {
    title: "In the thick of service",
    category: "Behind the scenes",
    image: "/assets/quinstas/kitchen-lean-in.jpg",
  },
  {
    title: "Standing in her craft",
    category: "Portraits",
    image: "/assets/quinstas/portrait-crossed-arms.jpg",
  },
  {
    title: "Composed and ready",
    category: "Portraits",
    image: "/assets/quinstas/portrait-crossed-arms-side.jpg",
  },
  {
    title: "A quiet confidence",
    category: "Portraits",
    image: "/assets/quinstas/portrait-chin-hand.jpg",
  },
  {
    title: "Assistant Director of Welfare & Membership",
    category: "Behind the scenes",
    image: "/assets/quinstas/capa-welfare-membership.jpg",
  },
  {
    title: "Dinner at altitude",
    category: "Private-jet catering",
    image: "/assets/quinstas/private-jet-dining.jpg",
  },
  {
    title: "On the ground at NFS 2026",
    category: "Behind the scenes",
    image: "/assets/quinstas/event-nfs-2026.jpg",
  },
  {
    title: "Live on stage",
    category: "Event catering",
    image: "/assets/quinstas/cooking-demo-knorr.jpg",
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

export const experience = [
  {
    role: "Head Chef",
    context: "Private-Jet Catering",
    focus:
      "Leading culinary production for private-jet guests, where flavour, presentation and timing all have to hold up against a fixed schedule and a highly specific set of preferences. The work is built on five things in equal measure: culinary excellence, attention to detail, discretion, time management and consistency.",
  },
  {
    role: "Culinary & Operations Lead",
    context: "Hospitality Kitchens",
    focus:
      "Running procurement, inventory and food costing alongside daily staff coordination, hygiene and quality control — the operational backbone that keeps a hospitality kitchen functioning as a business, not just a place that cooks well on a good day.",
  },
  {
    role: "Hospitality Operations Lead",
    context: "Multi-Function Properties",
    focus:
      "Coordinating restaurant, kitchen, bar, housekeeping, laundry, procurement and maintenance as a single operation rather than separate departments, with close attention to guest service, staff performance and the revenue and expense lines behind it all.",
  },
  {
    role: "Recipe Developer & Menu Consultant",
    context: "Independent & Consulting Work",
    focus:
      "Building recipes and menus around flavour, cost, ingredient availability and commercial practicality for independent clients — designed from the outset to be repeatable, scalable, and ready for a live kitchen rather than a one-off plate.",
  },
];
