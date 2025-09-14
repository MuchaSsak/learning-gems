import { Clock, GraduationCap, Star, User } from "lucide-react";

import { ShinyButton } from "@/components/magicui/shiny-button";
import type { AvailableCourse } from "@/lib/constants";
import { formatNumber } from "@/lib/utils";

const starsRatingCount = 5;

function CoursesCard({
  courseDetails: {
    thumbnailImgUrl,
    studentsEnrolled,
    author,
    courseUrl,
    description,
    lastUpdate,
    name,
    raitingAverage,
    raitingCount,
    isFeatured,
  },
}: {
  courseDetails: AvailableCourse;
}) {
  return (
    <div className="relative h-[22.5rem]" onClick={(e) => e.stopPropagation()}>
      {/* Featured course */}
      {isFeatured && (
        <ShinyButton className="absolute cursor-default border-[#BFA70A] max-sm:w-max sm:px-3 max-sm:px8 shadow-sm left-1/2 py-1.5 -translate-x-1/2 -top-[1.125rem] rounded-none bg-gradient-to-br from-[#a2682a] via-[#EDE17B] to-[#e1b453] w-[92%] z-30">
          <span className="max-sm:hidden">
            Extraordinary recommendation by Mateusz!
          </span>
          <span className="sm:hidden">Featured course!</span>
        </ShinyButton>
      )}

      <a
        href={courseUrl}
        target="_blank"
        className="border border-border/50 max-sm:w-sm sm:w-xl h-full relative overflow-hidden flex flex-col justify-end sm:px-8 max-sm:px-5 py-5 rounded-2xl shadow-2xl shadow-black/50 [&:hover_img]:scale-110"
      >
        {/* Black gradient overlay */}
        <div className="h-full w-full bg-gradient-to-t bottom-0 left-0 from-black/70 from-50% to-transparent absolute -z-10" />

        {/* Thumbnail image */}
        <img
          className="w-full h-full object-cover transition-[scale] absolute top-0 left-0 -z-20"
          src={thumbnailImgUrl}
          alt={description}
        />

        {/* Students enrolled */}
        <span className="flex text-white text-sm items-center gap-1">
          <GraduationCap className="size-5" />
          {formatNumber(studentsEnrolled)} students enrolled
        </span>

        {/* Rating */}
        <div className="flex text-white items-center gap-1 text-sm relative w-fit pb-1.5">
          <span className="font-normal">{raitingAverage}</span>

          <div className="flex relative">
            {/* Base gray stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: starsRatingCount }).map((_, i) => (
                <Star key={i} className="size-4 text-gray-300" />
              ))}
            </div>

            {/* Amber stars clipped by width */}
            <div
              className="absolute left-0 overflow-hidden flex items-center gap-1"
              style={{ width: `${100 * (raitingAverage / starsRatingCount)}%` }}
            >
              {Array.from({ length: starsRatingCount }).map((_, i) => (
                <Star
                  key={i}
                  className="size-4 shrink-0 stroke-amber-500 fill-amber-500"
                />
              ))}
            </div>
          </div>

          <span className="font-normal">
            {formatNumber(raitingCount)} raitings
          </span>
        </div>

        {/* Name */}
        <h3 className="max-sm:text-2xl sm:text-4xl line-clamp-3 font-bold text-white">
          {name}
        </h3>

        {/* Description */}
        <p className="line-clamp-3 max-sm:text-sm text-muted mt-2 mb-3">
          {description}
        </p>

        <div className="text-xs text-muted/75 flex items-center justify-between flex-wrap gap-1.5">
          {/* Author */}
          <span className="flex items-center gap-1">
            <User className="size-4" /> {author}
          </span>

          {/* Last updated */}
          <span className="flex items-center gap-1">
            <Clock className="size-4" />
            Last update:{" "}
            {new Intl.DateTimeFormat("en-US", {
              month: "short",
              year: "numeric",
            }).format(lastUpdate)}
          </span>
        </div>
      </a>
    </div>
  );
}

export default CoursesCard;
