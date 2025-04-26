"use client"

import Link from "next/link"
import { Brain, Bug, Heart, AlertCircle, Microscope, Syringe } from "lucide-react"

interface CourseCardProps {
  course: {
    id: string
    name: string
    icon: string
    difficulty: string
    bgColor: string
    iconColor: string
    progress: number
    rank: string
  }
}

const iconMap = {
  brain: Brain,
  bug: Bug,
  heart: Heart,
  "alert-circle": AlertCircle,
  microscope: Microscope,
  syringe: Syringe,
}

export default function CourseCard({ course }: CourseCardProps) {
  const Icon = iconMap[course.icon as keyof typeof iconMap] || AlertCircle

  return (
    <Link href={`/courses/${course.id}`}>
      <div className={`group relative rounded-xl shadow-md border border-border p-6 transition-all hover:shadow-lg ${course.bgColor}`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className={`inline-flex p-2 rounded-lg ${course.bgColor}`}>
              <Icon className={`w-6 h-6 ${course.iconColor}`} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{course.name}</h3>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm text-muted-foreground capitalize">
                {course.difficulty}
              </span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground capitalize">
                {course.rank}
              </span>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-4 h-1.5 w-full bg-background rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>
    </Link>
  )
} 