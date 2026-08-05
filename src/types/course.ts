export interface Course {
    id: number;
    title: string;
    teacher: string;
    description: string;
    image: string;
    lessons: number;
    level: string;
    progress: number;
    premium?: boolean;
    status: "all" | "progress" | "completed" | "wishlist";
  }