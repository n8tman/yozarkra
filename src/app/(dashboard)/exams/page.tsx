import Link from "next/link";
import { Button } from "@/components/ui/button";

// Simplified exam type for display
type ExamForDisplay = {
  id: string;
  title: string;
  type: string;
  year?: number | null;
  session?: string | null;
  module?: { name: string } | null;
  course?: { name: string } | null;
  subModule?: { name: string } | null;
  isPremium: boolean;
  questionsCount: number;
};

const mockExams: ExamForDisplay[] = [
  {
    id: "exam-1",
    title: "Anatomie 3 - Examen Final",
    type: "MCQ",
    year: 2023,
    session: "Spring",
    module: { name: "Anatomie" },
    course: { name: "Anatomie 3" },
    subModule: null,
    isPremium: false,
    questionsCount: 50
  },
  {
    id: "exam-2",
    title: "Physiologie 1 - Midterm",
    type: "MIXED",
    year: 2023,
    session: "Fall",
    module: { name: "Physiologie" },
    course: { name: "Physiologie 1" },
    subModule: null,
    isPremium: true,
    questionsCount: 45
  },
  {
    id: "exam-3",
    title: "Microbiologie - Quiz",
    type: "MCQ",
    year: 2023,
    session: "Spring",
    module: { name: "Microbiologie" },
    course: { name: "Microbiologie" },
    subModule: null,
    isPremium: false,
    questionsCount: 30
  },
  {
    id: "exam-4",
    title: "Histologie 2 - Final",
    type: "MIXED",
    year: 2023,
    session: "Fall",
    module: { name: "Histologie" },
    course: { name: "Histologie 2" },
    subModule: null,
    isPremium: true,
    questionsCount: 55
  },
  {
    id: "exam-5",
    title: "Pathology Practice",
    type: "MIXED",
    year: 2022,
    session: "Fall",
    module: { name: "Pathology" },
    course: { name: "Disease Processes" },
    subModule: null,
    isPremium: false,
    questionsCount: 40
  },
  {
    id: "exam-6",
    title: "Immunology Exam",
    type: "MCQ",
    year: 2022,
    session: "Spring",
    module: { name: "Immunology" },
    course: { name: "Body Systems" },
    subModule: null,
    isPremium: true,
    questionsCount: 35
  }
];

export default function ExamsPage() {
  // For demo purposes, show all exams
  const formattedExams = mockExams;

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Exams</h2>
        <div className="flex items-center space-x-2">
          <Button>
            Create Exam
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {formattedExams.map((exam) => (
          <Link
            key={exam.id}
            href={`/exams/${exam.id}`}
            className="group relative rounded-lg border p-4 hover:bg-accent transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-accent-foreground">
                  {exam.title}
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  {exam.module && (
                    <p>Module: {exam.module.name}</p>
                  )}
                  {exam.course && (
                    <p>Course: {exam.course.name}</p>
                  )}
                  <p>Type: {exam.type}</p>
                  <p>Questions: {exam.questionsCount}</p>
                  {exam.year && exam.session && (
                    <p>{exam.session} {exam.year}</p>
                  )}
                </div>
              </div>
              {exam.isPremium && (
                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                  Premium
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 