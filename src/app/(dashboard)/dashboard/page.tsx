import Link from "next/link";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import { Suspense } from "react";
import { ChevronDown } from "lucide-react";

// Move mock data outside the component to prevent re-creation on each render
const medicalCourses = [
  {
    id: "anatomy-3",
    name: "Anatomie 3",
    icon: "brain",
    difficulty: "qe",
    bgColor: "bg-orange-400/20 dark:bg-orange-500/20",
    iconColor: "text-orange-500",
    progress: 0,
    rank: "no rank yet"
  },
  {
    id: "physiology-1",
    name: "Physiologie 1",
    icon: "syringe",
    difficulty: "easy",
    bgColor: "bg-teal-400/20 dark:bg-teal-500/20",
    iconColor: "text-teal-500",
    progress: 0,
    rank: "no rank yet"
  },
  {
    id: "microbiology",
    name: "Microbiologie",
    icon: "bug",
    difficulty: "medium",
    bgColor: "bg-green-400/20 dark:bg-green-500/20",
    iconColor: "text-green-500",
    progress: 0,
    rank: "no rank yet"
  },
  {
    id: "histology-2",
    name: "Histologie 2",
    icon: "microscope",
    difficulty: "easy",
    bgColor: "bg-blue-400/20 dark:bg-blue-500/20",
    iconColor: "text-blue-500",
    progress: 0,
    rank: "no rank yet"
  },
  {
    id: "semiology-1",
    name: "Sémiologie 1",
    icon: "heart",
    difficulty: "hard",
    bgColor: "bg-red-400/20 dark:bg-red-500/20",
    iconColor: "text-red-500",
    progress: 0,
    rank: "no rank yet"
  },
  {
    id: "medex",
    name: "Medex Et Secourisme",
    icon: "alert-circle",
    bgColor: "bg-pink-400/20 dark:bg-pink-500/20",
    iconColor: "text-pink-500",
    difficulty: "medium",
    progress: 0,
    rank: "ranked 1st"
  }
];

const semesters = [
  { id: "s1-med", name: "s1 med" },
  { id: "s3-med", name: "s3 med", active: true },
  { id: "s5-med", name: "s5 med" },
  { id: "s7-med", name: "s7 med" },
  { id: "s9-med", name: "s9 med" }
];

// Separate components for better code splitting
function CoursesSection() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-6">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicalCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

function RankersSection() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-6">Rankers</h2>
      <div className="bg-card rounded-xl shadow-md p-6 border border-border">
        <div className="flex items-center justify-center py-16">
          <p className="text-center text-muted-foreground">
            Get to <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md mx-1">level 2</span> to see the rankers
          </p>
        </div>
      </div>
    </div>
  );
}

function GlobalProgressSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Global Progress</h2>
      <div className="bg-card rounded-xl shadow-md p-6 border border-border">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <p className="text-muted-foreground mb-3">Start studying to see your global progress</p>
            <Button asChild>
              <Link href="/exams">Browse Exams</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const activeSemester = semesters.find(s => s.active) || semesters[0];

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-2">Dashboard</h1>
          <span className="text-primary font-semibold">{activeSemester.name}</span>
        </div>
        <div className="relative">
          <select className="bg-card text-foreground rounded-md py-2 pl-4 pr-8 border border-border appearance-none focus:outline-none focus:ring-2 focus:ring-primary">
            {semesters.map(semester => (
              <option key={semester.id} value={semester.id}>
                {semester.name}
              </option>
            ))}
          </select>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Main content with Suspense boundaries for progressive loading */}
      <Suspense fallback={<div className="h-20 w-full bg-gray-100 animate-pulse rounded-lg"></div>}>
        <CoursesSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-20 w-full bg-gray-100 animate-pulse rounded-lg"></div>}>
        <RankersSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-20 w-full bg-gray-100 animate-pulse rounded-lg"></div>}>
        <GlobalProgressSection />
      </Suspense>
    </div>
  );
} 