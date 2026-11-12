import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Layers, Terminal, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

export function CourseCard({ course, featured = false }: CourseCardProps) {
  return (
    <article
      className={`group flex flex-col justify-between rounded-xl border bg-card p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-lg ${
        featured ? "border-primary/30 bg-gradient-to-b from-card via-card to-primary/5" : "border-border"
      }`}
    >
      <div>
        {/* Top meta tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <Badge variant="outline" className="text-[11px] font-medium border-border/80 text-foreground bg-secondary/50">
            {course.category}
          </Badge>
          {course.badge && (
            <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px] font-semibold hover:bg-primary/15">
              <Sparkles className="mr-1 h-3 w-3" />
              {course.badge}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
          <Link to="/courses/$slug" params={{ slug: course.slug }}>
            {course.title}
          </Link>
        </h3>

        {/* Short description */}
        <p className="mt-2.5 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
          {course.shortDescription}
        </p>

        {/* Level and format info */}
        <div className="mt-4 flex flex-wrap items-center gap-y-1.5 gap-x-4 border-t border-border/60 pt-3 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>{course.level}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>{course.curriculum.length} Modules</span>
          </div>
        </div>

        {/* Key skills chips */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {course.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
            >
              {skill}
            </span>
          ))}
          {course.skills.length > 4 && (
            <span className="inline-flex items-center rounded-md bg-secondary/50 px-1.5 py-0.5 text-[10px] text-muted-foreground">
              +{course.skills.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Card footer CTA */}
      <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between gap-3">
        <span className="text-[11px] font-medium text-muted-foreground truncate max-w-[130px]">
          {course.format.split("with")[0]}
        </span>
        <Button asChild size="sm" variant="ghost" className="gap-1.5 text-xs text-primary hover:text-primary hover:bg-primary/10 -mr-2">
          <Link to="/courses/$slug" params={{ slug: course.slug }}>
            <span>View Syllabus</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
