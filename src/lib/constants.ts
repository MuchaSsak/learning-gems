// Links
export const GITHUB_REPO_LINK = "https://github.com/MuchaSsak/learning-gems";

// Available courses
export type AvailableCourse = {
  category: string;
  name: string;
  description: string;
  author: string;
  raitingCount: number;
  raitingAverage: number;
  studentsEnrolled: number;
  lastUpdate: Date;
  courseUrl: string;
  thumbnailImgUrl: string;
  isFeatured: boolean;
};

export const AVAILABLE_COURSES: AvailableCourse[] = [
  {
    category: "Programming",
    name: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    description:
      "Master modern React from beginner to advanced! Next.js, Context API, React Query, Redux, Tailwind, advanced patterns",
    author: "Jonas Schmedtmann",
    raitingCount: 22_586,
    raitingAverage: 4.7,
    studentsEnrolled: 145_254,
    lastUpdate: new Date("05 01 2025"),
    courseUrl: "https://www.udemy.com/course/the-ultimate-react-course",
    thumbnailImgUrl:
      "https://img-c.udemycdn.com/course/750x422/4471614_361e_8.jpg",
    isFeatured: true,
  },
  {
    category: "Programming",
    name: "The Complete JavaScript Course 2025: From Zero to Expert!",
    description:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    author: "Jonas Schmedtmann",
    raitingCount: 227_246,
    raitingAverage: 4.7,
    studentsEnrolled: 1_001_004,
    lastUpdate: new Date("05 01 2025"),
    courseUrl: "https://www.udemy.com/course/the-complete-javascript-course/",
    thumbnailImgUrl:
      "https://img-c.udemycdn.com/course/750x422/851712_fc61_6.jpg",
    isFeatured: true,
  },
  {
    category: "Programming",
    name: "Become a Three.js developer",
    description:
      "Everything you need in one place: 93 hours of video to go from absolute beginner to advanced Three.js developer.",
    author: "Bruno Simon",
    raitingCount: 98,
    raitingAverage: 4.8,
    studentsEnrolled: 47_125,
    lastUpdate: new Date("03 01 2025"),
    courseUrl: "https://threejs-journey.com/",
    thumbnailImgUrl: "/assets/pictures/threejs_journey.jpg",
    isFeatured: true,
  },
  {
    category: "Computer Science",
    name: "CompTIA A+ Core 1 (220-1201) Full Course & Practice Exam",
    description:
      "Pass the CompTIA A+ Core 1 (220-1201) exam with help from a top expert in the field!",
    author: "Jason Dion",
    raitingCount: 35_820,
    raitingAverage: 4.7,
    studentsEnrolled: 145_162,
    lastUpdate: new Date("09 01 2025"),
    courseUrl: "https://www.udemy.com/course/comptia-a-core-1/",
    thumbnailImgUrl:
      "https://img-c.udemycdn.com/course/750x422/4802926_c68f_7.jpg",
    isFeatured: false,
  },
  {
    category: "Computer Science",
    name: "CompTIA Network+ (N10-009) Full Course & Practice Exam",
    description:
      "CompTIA Network+ (N10-009) Bootcamp - Certification preparation course on the most popular networking certification!",
    author: "Jason Dion",
    raitingCount: 33_797,
    raitingAverage: 4.7,
    studentsEnrolled: 176_371,
    lastUpdate: new Date("09 01 2025"),
    courseUrl: "https://www.udemy.com/course/comptia-network-009/",
    thumbnailImgUrl:
      "https://img-c.udemycdn.com/course/750x422/4223486_9c44_3.jpg",
    isFeatured: false,
  },
  {
    category: "3D Graphics",
    name: "Complete Blender Megacourse: Beginner to Expert",
    description:
      "Learn how to work with Blender like a pro with this 3-in-1 course! Now covering the latest updates in Blender 4.0!",
    author: "Skillademia Academy",
    raitingCount: 9_390,
    raitingAverage: 4.5,
    studentsEnrolled: 63_970,
    lastUpdate: new Date("08 01 2025"),
    courseUrl:
      "https://www.udemy.com/course/complete-blender-megacourse-beginner-to-expert/",
    thumbnailImgUrl:
      "https://img-c.udemycdn.com/course/750x422/4651924_4143_2.jpg",
    isFeatured: false,
  },
  {
    category: "Psychology",
    name: "Marketing Psychology and Consumer Behavior",
    description:
      "Apply consumer behaviour, marketing psychology and behavior economics to skyrocket your rate of sales and conversions.",
    author: "Proficient Courses",
    raitingCount: 1_653,
    raitingAverage: 4.6,
    studentsEnrolled: 6_195,
    lastUpdate: new Date("02 01 2025"),
    courseUrl: "https://www.udemy.com/course/marketing-psychology/",
    thumbnailImgUrl:
      "https://img-c.udemycdn.com/course/240x135/3521464_87c3_7.jpg",
    isFeatured: false,
  },
  {
    category: "Psychology",
    name: "Behavioral Psychology: Understanding Human Behavior",
    description:
      "Learn about the fundamentals of human and animal behavior based on behaviorism or behavioural psychology.",
    author: "Proficient Courses",
    raitingCount: 190,
    raitingAverage: 4.5,
    studentsEnrolled: 821,
    lastUpdate: new Date("02 01 2025"),
    courseUrl:
      "https://www.udemy.com/course/ux-writing-the-art-of-user-centered-copy/",
    thumbnailImgUrl:
      "https://img-c.udemycdn.com/course/240x135/5613976_bb58_14.jpg",
    isFeatured: false,
  },
  {
    category: "Psychology",
    name: "UX Writing: Microcopy, User Research, Accessibility & More",
    description:
      "Elevate your UX skills. Learn about UX writing techniques, user research, microcopy, voice, tone, and accessibility.",
    author: "Proficient Courses",
    raitingCount: 525,
    raitingAverage: 4.2,
    studentsEnrolled: 2_165,
    lastUpdate: new Date("09 01 2025"),
    courseUrl:
      "https://www.udemy.com/course/behavioral-psychology-behaviorism/",
    thumbnailImgUrl:
      "https://img-c.udemycdn.com/course/750x422/3794994_cf36_6.jpg",
    isFeatured: false,
  },
  {
    category: "Music",
    name: "Learn To DJ With Just Your Laptop: No DJ Equipment Needed",
    description:
      "Includes 6 FREE music tracks to DJ with - Learn the basics of DJing with just your laptop",
    author: "Jak Bradley",
    raitingCount: 319,
    raitingAverage: 4.7,
    studentsEnrolled: 1_509,
    lastUpdate: new Date("11 01 2024"),
    courseUrl: "https://www.udemy.com/course/no-dj-equipment-needed-dj-course/",
    thumbnailImgUrl:
      "https://img-c.udemycdn.com/course/750x422/4975824_96c3.jpg",
    isFeatured: false,
  },
  {
    category: "Music",
    name: "The Complete DJ Course For Beginners 2025",
    description:
      "Includes 30 FREE music tracks and 40 guided mix tutorials - You can mix along in real time with the exact same tracks",
    author: "Jak Bradley",
    raitingCount: 4_769,
    raitingAverage: 4.7,
    studentsEnrolled: 24_353,
    lastUpdate: new Date("05 01 2025"),
    courseUrl: "https://www.udemy.com/course/10steps2dj/",
    thumbnailImgUrl:
      "https://img-c.udemycdn.com/course/750x422/2042418_41ff_11.jpg",
    isFeatured: false,
  },
  {
    category: "Real-World Languages",
    name: "Complete Spanish Course: Master Spanish Beginner to Advanced",
    description:
      "Learn Spanish FAST with this non-stop Spanish speaking course for BEGINNERS: learning Spanish will be easy and fun!",
    author: "Linguae Learning",
    raitingCount: 10_489,
    raitingAverage: 4.6,
    studentsEnrolled: 127_009,
    lastUpdate: new Date("08 01 2025"),
    courseUrl:
      "https://www.udemy.com/course/spanish-for-beginners-the-ultimate-course-level-1/",
    thumbnailImgUrl:
      "https://img-c.udemycdn.com/course/750x422/3519748_0450_3.jpg",
    isFeatured: false,
  },
  {
    category: "Real-World Languages",
    name: "Speak Any Language in 10 Days - Conversational lvl",
    description:
      "Become a Polyglot using The Active Vocabulary Method! Learn French, Spanish, English, Chinese, Russian, Italian and more",
    author: "Aleksander Garstka",
    raitingCount: 91,
    raitingAverage: 4.2,
    studentsEnrolled: 1_547,
    lastUpdate: new Date("09 01 2025"),
    courseUrl:
      "https://www.udemy.com/course/learn-how-to-speak-a-language-in-10-days/",
    thumbnailImgUrl:
      "https://img-c.udemycdn.com/course/240x135/3665386_b883_16.jpg",
    isFeatured: false,
  },
  {
    category: "Exercise",
    name: "Calisthenics Foundations: Building Your Bodyweight Basics",
    description: "Your First Step Towards a Stronger You!",
    author: "Hiramatsu Daisuke",
    raitingCount: 419,
    raitingAverage: 4.6,
    studentsEnrolled: 6_641,
    lastUpdate: new Date("08 01 2025"),
    courseUrl: "https://www.udemy.com/course/calisthenics-beginner/",
    thumbnailImgUrl:
      "https://img-c.udemycdn.com/course/750x422/4513648_cef6_6.jpg",
    isFeatured: false,
  },
  {
    category: "Exercise",
    name: "The Calisthenics Bridge: From Beginner to Advanced",
    description: "Unlocking New Heights in Bodyweight Training!",
    author: "Hiramatsu Daisuke",
    raitingCount: 39,
    raitingAverage: 4.8,
    studentsEnrolled: 1_010,
    lastUpdate: new Date("08 01 2025"),
    courseUrl: "https://www.udemy.com/course/calisthenics-intermediate-course/",
    thumbnailImgUrl:
      "https://img-c.udemycdn.com/course/750x422/4681636_43d4_2.jpg",
    isFeatured: false,
  },
];

// Available categories
export const AVAILABLE_CATEGORIES = [
  {
    name: "Programming",
    description:
      "Go in-depth into frontend, backend and creative web development 🌐",
    themeColor: "#55A3FF",
    linearGradientColors: ["#4DD5FF", "#2E65EB", "#3340B3"],
    coursesAmount: AVAILABLE_COURSES.filter(
      (availableCourse) => availableCourse.category === "Programming"
    ).length,
    isFeatured: true,
  },
  {
    name: "Computer Science",
    description: "Become a certified IT technician 🔧",
    themeColor: "#C9FAFF",
    linearGradientColors: ["#D2F3F7", "#83C2C7", "#527A7D"],
    coursesAmount: AVAILABLE_COURSES.filter(
      (availableCourse) => availableCourse.category === "Computer Science"
    ).length,
    isFeatured: false,
  },
  {
    name: "3D Graphics",
    description: "Master software for creating 3D computer graphics 🍩",
    themeColor: "#EB6206",
    linearGradientColors: ["#FF9F59", "#F06E0F", "#8A280A"],
    coursesAmount: AVAILABLE_COURSES.filter(
      (availableCourse) => availableCourse.category === "3D Graphics"
    ).length,
    isFeatured: false,
  },
  {
    name: "Psychology",
    description: "Understand human behaviour and use it to your advantage 🧠",
    themeColor: "#FF8CDE",
    linearGradientColors: ["#FA7FD6", "#E31EA8", "#9C0E74"],
    coursesAmount: AVAILABLE_COURSES.filter(
      (availableCourse) => availableCourse.category === "Psychology"
    ).length,
    isFeatured: false,
  },
  {
    name: "Music",
    description: "Mix up your own dream tunes 🎶",
    themeColor: "#9308C7",
    linearGradientColors: ["#CB86F0", "#9018DB", "#600C8A"],
    coursesAmount: AVAILABLE_COURSES.filter(
      (availableCourse) => availableCourse.category === "Music"
    ).length,
    isFeatured: false,
  },
  {
    name: "Real-World Languages",
    description: "Learn to study new languages efficiently 🌍",
    themeColor: "#42FF5E",
    linearGradientColors: ["#7EF792", "#1BD138", "#0B781C"],
    coursesAmount: AVAILABLE_COURSES.filter(
      (availableCourse) => availableCourse.category === "Real-World Languages"
    ).length,
    isFeatured: false,
  },
  {
    name: "Exercise",
    description: "Become fit and in harmony with your body 🏋️",
    themeColor: "#FFF033",
    linearGradientColors: ["#C9C073", "#8A6E13", "#5E5508"],
    coursesAmount: AVAILABLE_COURSES.filter(
      (availableCourse) => availableCourse.category === "Exercise"
    ).length,
    isFeatured: false,
  },
] as const;

export type AvailableCategory = (typeof AVAILABLE_CATEGORIES)[number];
