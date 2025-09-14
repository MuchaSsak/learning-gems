import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import CoursesCard from "@/components/CoursesCard";
import { useModal } from "@/components/ui/animated-modal";
import { AVAILABLE_COURSES } from "@/lib/constants";

function CoursesList() {
  const { setOpen } = useModal();

  const courses = AVAILABLE_COURSES.filter(
    (availableCourse) =>
      availableCourse.category ===
      window.location.hash.slice(1).replace("%20", " ")
  );

  const coursesListContainerRef = useRef<HTMLDivElement>(null);
  const coursesListRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: coursesListRef,
    container: coursesListContainerRef,
  });

  const coursesListContainerTranslateX = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "0rem",
      `${
        window?.innerWidth < 640
          ? courses.length * -24 + 12
          : courses.length * -36 + 56
      }rem`,
    ]
  );

  return (
    <div
      className="overflow-y-scroll relative max-sm:p-8 sm:p-32 overflow-x-hidden"
      ref={coursesListContainerRef}
    >
      <div
        className="h-[300vh] w-screen"
        ref={coursesListRef}
        onClick={() => setOpen(false)}
      >
        <motion.div
          style={{ x: coursesListContainerTranslateX }}
          className="top-1/2 -translate-y-1/2 w-fit flex items-center max-sm:gap-8 sm:gap-16 sticky"
        >
          {courses.map((availableCourse, i) => (
            <CoursesCard key={i} courseDetails={availableCourse} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default CoursesList;
