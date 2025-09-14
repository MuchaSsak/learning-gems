import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { GitHub } from "@/components/icons";
import { Pointer } from "@/components/magicui/pointer";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { GITHUB_REPO_LINK } from "@/lib/constants";

function HeaderTitle() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0.75]);
  const fontSize = useTransform(scrollY, [0, 300], ["4rem", "2rem"]);
  const left = useSpring(useTransform(scrollY, [0, 300], ["50%", "5%"]), {
    damping: 20,
    stiffness: 300,
    bounce: 3,
  });
  const top = useSpring(
    useTransform(
      scrollY,
      [0, 300],
      [window?.innerWidth < 640 ? "2rem" : "4rem", "0.25rem"]
    ),
    {
      damping: 20,
      stiffness: 300,
      bounce: 3,
    }
  );
  const translateX = useSpring(
    useTransform(scrollY, [0, 300], ["-50%", "0%"]),
    {
      stiffness: 450,
      bounce: 3,
      damping: 30,
    }
  );

  return (
    <div>
      <motion.div
        style={{
          left,
          opacity,
          translateX,
          top,
        }}
        className="fixed z-10 hover:opacity-100! transition-opacity duration-300"
      >
        <SparklesText
          className="w-max font-title"
          colors={{ first: "#1A65BD", second: "#78B6FF" }}
        >
          <motion.a
            className="cursor-none"
            tabIndex={-1}
            target="_blank"
            href={GITHUB_REPO_LINK}
            style={{
              fontSize,
            }}
          >
            <h1 className="max-md:text-4xl max-sm:text-2xl">
              💎 Learning Gems 💎
            </h1>
          </motion.a>
        </SparklesText>
      </motion.div>

      <Pointer>
        <GitHub
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 4 }}
          animate={{
            fill: ["#fff", "#FF4242", "#42FF6B", "#426BFF"],
            scale: [1, 1.1],
            rotate: [-5, 5],
          }}
          className="size-8"
        />
      </Pointer>
    </div>
  );
}

export default HeaderTitle;
