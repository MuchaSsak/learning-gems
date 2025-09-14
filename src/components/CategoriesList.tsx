import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

import CategoriesCard from "@/components/CategoriesCard";
import { useModal } from "@/components/ui/animated-modal";
import { AVAILABLE_CATEGORIES, AVAILABLE_COURSES } from "@/lib/constants";

function CategoriesList() {
  const { setOpen } = useModal();

  const categoriesListContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: categoriesListContainerRef,
  });
  const categoriesListContainerTranslateX = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "0rem",
      `${
        window?.innerWidth < 640
          ? AVAILABLE_CATEGORIES.length * -17 + 8
          : AVAILABLE_CATEGORIES.length * -24 + 30
      }rem`,
    ]
  );

  // Open modal on startup if link contains hash
  useEffect(() => {
    const hash = window.location.hash.slice(1).replace("%20", " ");
    console.log(hash);
    const hasFoundCourse = AVAILABLE_COURSES.some(
      (availableCourse) => availableCourse.category === hash
    );
    if (hasFoundCourse) setOpen(true);
  }, [setOpen]);

  return (
    <div className="relative h-[300vh]" ref={categoriesListContainerRef}>
      <motion.div
        style={{ x: categoriesListContainerTranslateX }}
        className="flex w-fit overflow-visible max-sm:-top-8 sm:-top-16 max-sm:pt-36 sm:pt-56 pb-12 max-sm:gap-4 sm:gap-12 h-screen sticky"
      >
        {AVAILABLE_CATEGORIES.map((availableCategory, i) => (
          <CategoriesCard key={i} categoryDetails={availableCategory} />
        ))}
      </motion.div>
    </div>
  );
}

export default CategoriesList;
