import type { Song } from "../data/songs";

interface AnimatedBackgroundProps {
  theme: Song["theme"];
}

export function AnimatedBackground({ theme }: AnimatedBackgroundProps) {
  return (
    <div className={`bg bg--${theme}`} aria-hidden="true">
      <div className="bg__mesh" />
      <div className="bg__orb-track bg__orb-track--a">
        <div className="bg__orb bg__orb--a" />
      </div>
      <div className="bg__orb-track bg__orb-track--b">
        <div className="bg__orb bg__orb--b" />
      </div>
      <div className="bg__orb-track bg__orb-track--c">
        <div className="bg__orb bg__orb--c" />
      </div>
      <div className="bg__lines" />
      <div className="bg__grain" />
    </div>
  );
}
