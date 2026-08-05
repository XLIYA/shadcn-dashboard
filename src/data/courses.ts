import type { Course } from "@/types/course";


export const courses: Course[] = [
  {
    id: 1,
    title: "React Advanced",
    teacher: "Prof. John Smith",
    description:
      "Learn advanced React concepts, hooks and performance optimization.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    lessons: 24,
    level: "Intermediate",
    progress: 75,
    premium: true,
    status: "progress",
  },
  {
    id: 2,
    title: "TypeScript Basics",
    teacher: "Prof. Sarah Johnson",
    description:
      "Master TypeScript fundamentals and strongly typed JavaScript.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    lessons: 18,
    level: "Beginner",
    progress: 45,
    status: "progress",
  },
  {
    id: 3,
    title: "JavaScript ES6+",
    teacher: "Prof. Mike Brown",
    description:
      "Modern JavaScript features and best practices.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    lessons: 20,
    level: "Beginner",
    progress: 60,
    status: "all",
  },
  {
    id: 4,
    title: "Node.js & Express",
    teacher: "Prof. David Wilson",
    description:
      "Build scalable backend applications using Node.js.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    lessons: 22,
    level: "Intermediate",
    progress: 30,
    status: "wishlist",
  },
  {
    id: 5,
    title: "SQL Fundamentals",
    teacher: "Prof. Emily Davis",
    description:
      "Learn SQL queries and database design.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    lessons: 16,
    level: "Beginner",
    progress: 90,
    status: "completed",
  },
  {
    id: 6,
    title: "Git & GitHub",
    teacher: "Prof. Alex Turner",
    description:
      "Version control and collaboration using Git.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    lessons: 14,
    level: "Beginner",
    progress: 80,
    status: "completed",
  },
];