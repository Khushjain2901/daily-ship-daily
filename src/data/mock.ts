export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type ProofStep = "build" | "github" | "linkedin";

export interface Student {
  name: string;
  track: string;
  currentDay: number;
  totalDays: number;
  completedDays: number;
  currentStreak: number;
  longestStreak: number;
  completion: number;
  week: { label: string; done: boolean }[];
  missedDay: number | null;
}

export interface ChallengeDay {
  day: number;
  title: string;
  objective: string;
  description: string;
  time: string;
  difficulty: Difficulty;
  skills: string[];
  requirements: string[];
  stack: string[];
}

export const student: Student = {
  name: "Khush",
  track: "AI Engineering",
  currentDay: 18,
  totalDays: 60,
  completedDays: 18,
  currentStreak: 12,
  longestStreak: 17,
  completion: 30,
  week: [
    { label: "M", done: true },
    { label: "T", done: true },
    { label: "W", done: true },
    { label: "T", done: true },
    { label: "F", done: true },
    { label: "S", done: true },
    { label: "S", done: false },
  ],
  missedDay: 11,
};

export const todaysMission: ChallengeDay = {
  day: 18,
  title: "Build a Semantic Search API",
  objective:
    "Create an API that converts user queries into embeddings and retrieves the most relevant documents.",
  description:
    "Create an API that converts user queries into embeddings and retrieves relevant documents.",
  time: "45–60 min",
  difficulty: "Intermediate",
  skills: ["Embeddings", "Vector Search", "FastAPI", "Retrieval"],
  requirements: [
    "Embed a small document set",
    "Accept a natural language query",
    "Return top-k ranked results",
    "Handle empty and invalid queries",
  ],
  stack: ["Python", "FastAPI", "pgvector"],
};

export const day12: ChallengeDay = {
  day: 12,
  title: "Build a URL Shortener",
  objective:
    "Build a backend service that converts long URLs into short, shareable links.",
  description:
    "Build a backend service that converts long URLs into short, shareable links.",
  time: "60–90 min",
  difficulty: "Intermediate",
  skills: ["REST APIs", "Backend Architecture", "Validation", "Database Design"],
  requirements: [
    "Accept a long URL",
    "Generate a unique short code",
    "Redirect short URLs",
    "Validate URLs",
    "Handle invalid requests",
  ],
  stack: ["Node.js", "Express", "MongoDB"],
};

export const achievements = [
  { label: "First Week", earned: true },
  { label: "10 Builds", earned: true },
  { label: "10-Day Streak", earned: true },
  { label: "30 Builds", earned: false },
];

export const stats = [
  { value: "18", label: "Builds shipped" },
  { value: "12", label: "Day streak" },
  { value: "3", label: "Milestones" },
];

export const initialProof: Record<ProofStep, boolean> = {
  build: true,
  github: true,
  linkedin: false,
};

export const isValidUrl = (value: string, host: string) => {
  try {
    const url = new URL(value.trim());
    return (
      (url.protocol === "https:" || url.protocol === "http:") &&
      url.hostname.replace(/^www\./, "").endsWith(host)
    );
  } catch {
    return false;
  }
};
