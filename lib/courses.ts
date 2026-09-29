export type CatalogCourse = {
  title: string;
  subtitle: string;
  image: string;
};

export const catalog: Record<string, CatalogCourse> = {
  "build-digital-asset": {
    title: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    image: "/assets/courses/course-art-2.png",
  },
  "learn-figma-from-basic": {
    title: "Learn Figma from Basic",
    subtitle: "Master Interface Design from the Ground Up",
    image: "/assets/courses/course-art-1.png",
  },
  "the-power-of-big-data": {
    title: "the Power of Big Data",
    subtitle: "Turn Raw Data into Real Insight",
    image: "/assets/courses/course-art-3.png",
  },
  "balancing-productivity-and-self-care": {
    title: "Balancing Productivity and Self-Care",
    subtitle: "Perform at Your Best Without Burning Out",
    image: "/assets/courses/course-art-4.png",
  },
  "mastering-money-management": {
    title: "Mastering Money Management",
    subtitle: "Take Control of Your Financial Future",
    image: "/assets/courses/course-art-5.png",
  },
  "from-idea-to-startup-success": {
    title: "From Idea to Startup Success",
    subtitle: "Build, Launch and Grow Your First Venture",
    image: "/assets/courses/course-art-6.png",
  },
};

export const aboutDescription = `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation. In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm. As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.`;

export const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

export const sidebarLessons = [
  { n: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
  { n: "02", title: "Design Principles for Impacts", duration: "21 mins" },
  { n: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
];

export const modules = [
  {
    title: "Module 1: Introduction to Digital Assets",
    desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export const ratingRows = [
  { stars: 5, count: "720", pct: 92.3 },
  { stars: 4, count: "120", pct: 36.5 },
  { stars: 3, count: "21", pct: 9.5 },
  { stars: 2, count: "12", pct: 3.5 },
  { stars: 1, count: "16", pct: 5.3 },
];

export const reviews = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar: "/assets/avatars/avatar-4.png",
    text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    avatar: "/assets/avatars/avatar-5.png",
    text: '"This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!"',
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    avatar: "/assets/avatars/avatar-6.png",
    text: '"The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process."',
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    avatar: "/assets/avatars/avatar-7.png",
    text: '"The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout."',
  },
];
