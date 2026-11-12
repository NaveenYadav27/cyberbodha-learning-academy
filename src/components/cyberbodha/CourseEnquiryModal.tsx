import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EnquiryForm } from "./EnquiryForm";

interface CourseEnquiryModalProps {
  defaultCourseSlug?: string;
  sourceContext?: string;
  trigger?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function CourseEnquiryModal({
  defaultCourseSlug = "",
  sourceContext = "Course Page Modal",
  trigger,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: CourseEnquiryModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;
  const setIsOpen = isControlled ? setControlledOpen! : setInternalOpen;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Course Enquiry & Enrollment</DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Connect with our academic team to receive full syllabus modules, cohort schedules, and lab access details.
          </DialogDescription>
        </DialogHeader>
        <div className="pt-2">
          <EnquiryForm
            defaultCourseSlug={defaultCourseSlug}
            sourceContext={sourceContext}
            onSuccess={() => {
              // keep modal open so user sees the detailed next-steps confirmation
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
