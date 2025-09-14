import { Clock, Maximize2, TvMinimalPlay } from "lucide-react";

import { ShinyButton } from "@/components/magicui/shiny-button";
import { useModal } from "@/components/ui/animated-modal";
import type { AvailableCategory } from "@/lib/constants";

const lastUpdatedCategories = new Date("09 15 2025");

function CategoriesCard({
  categoryDetails: {
    name,
    themeColor,
    linearGradientColors,
    description,
    coursesAmount,
    isFeatured,
  },
}: {
  categoryDetails: AvailableCategory;
}) {
  const { setOpen } = useModal();

  function handleOpenCoursesDialog() {
    window.location.hash = name;
    setOpen(true);
  }

  return (
    // Card container with a colorful gradient background
    <div
      onClick={handleOpenCoursesDialog}
      className="max-sm:w-[17rem] sm:w-sm shadow-xl cursor-pointer shadow-black/40 backdrop-blur-sm border-2 relative before:content-[''] before:absolute before:size-full before:top-0 before:left-0 before:[background:linear-gradient(130deg,transparent_0%_33%,var(--g1)_66%,var(--g2)_83.5%,var(--g3)_100%)] before:[background-size:300%_300%]! before:bg-[0%_0%]! [&:hover:before]:bg-[100%_100%]! before:[transition:background-position_350ms_ease,transform_350ms_ease] [&:hover:before]:transform-[scale(1.05,1.02)] [&:hover>div]:[background-position:-10%_0%]!  before:-z-10 [&:hover_h4>span]:translate-y-[0%] [&:hover_h4>span]:[transition:opacity_200ms_ease,translate_200ms_cubic-bezier(.90,_.06,_.15,_.90)] [&:hover_h4>span]:opacity-100"
      style={
        {
          borderColor: themeColor,
          backgroundColor: themeColor + "26", // Opacity of .15
          "--g1": linearGradientColors[0],
          "--g2": linearGradientColors[1],
          "--g3": linearGradientColors[2],
        } as React.CSSProperties
      }
    >
      {/* Grid dots background */}
      <div className="size-full [background:radial-gradient(rgba(255,255,255,0.2)_8%,transparent_8%)] [background-position:0%_0%]! [background-size:2.5rem_2.5rem]! p-8 [transition:background-position_350ms_ease]">
        {/* Includes featured courses */}
        {isFeatured && (
          <ShinyButton className="absolute border-[#BFA70A] max-sm:w-max px-3 shadow-sm left-1/2 py-1.5 -translate-x-1/2 -top-[1.125rem] rounded-none bg-gradient-to-br from-[#a2682a] via-[#EDE17B] to-[#e1b453] w-[92%]">
            Includes featured courses!
          </ShinyButton>
        )}

        {/* Title */}
        <h3 className="max-sm:text-2xl sm:text-3xl px-1">{name}</h3>

        {/* Description */}
        <h4 className="max-sm:text-md sm:text-lg pt-4">
          {/* Split description into separate words in order to stagger the animation by 40ms each word */}
          {description.split(" ").map((word, i) => (
            <span
              className="inline-block mx-1 relative translate-y-[40%] transition-none opacity-0"
              style={{ transitionDelay: `${i * 40}ms` }}
              key={i}
            >
              {word}
            </span>
          ))}
        </h4>

        {/* Fullscreen icon */}
        <Maximize2 className="absolute right-5 top-7 size-5" />

        <div className="bottom-8 max-sm:text-[0.625rem] sm:text-xs flex items-start w-[calc(100%_-_var(--spacing)*8*2)] flex-col gap-1.5 absolute text-foreground/75">
          {/* Courses amount */}
          <span className="flex items-center gap-1">
            <TvMinimalPlay className="size-4" />
            {coursesAmount} {coursesAmount === 1 ? "course" : "courses"}{" "}
            available
          </span>

          {/* Last updated category */}
          <span className="flex items-center gap-1">
            <Clock className="size-4" />
            Last updated list{" "}
            {new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
              lastUpdatedCategories
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CategoriesCard;
