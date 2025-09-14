import { GridBeams } from "@/components/magicui/grid-beams";

function BodyBackground() {
  return (
    <GridBeams
      className="bg-background fixed left-0 top-0 -z-10 h-screen w-screen"
      gridFadeStart={0}
      raySpeed={3}
      gridColor="rgba(200, 220, 255, 0.05)"
      rayLength="90vh"
      rayOpacity={0.4}
      rayCount={8}
    >
      <></>
    </GridBeams>
  );
}

export default BodyBackground;
