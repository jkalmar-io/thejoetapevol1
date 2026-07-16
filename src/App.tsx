import { useCallback, useEffect, useRef, useState } from "react";
import { songs } from "./data/songs";
import { TitleSlide } from "./components/TitleSlide";
import { SongSlide } from "./components/SongSlide";
import { PlaylistSlide } from "./components/PlaylistSlide";
import { SlideIndicator } from "./components/SlideIndicator";

const TOTAL_SLIDES = 1 + songs.length + 1;

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const index = Math.round(el.scrollTop / window.innerHeight);
    setActiveIndex(Math.min(Math.max(index, 0), TOTAL_SLIDES - 1));
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSlide = (index: number) => {
    containerRef.current?.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div ref={containerRef} className="carousel">
        <TitleSlide />
        {songs.map((song, i) => (
          <SongSlide key={song.id} song={song} trackNumber={i + 1} />
        ))}
        <PlaylistSlide />
      </div>

      <SlideIndicator
        total={TOTAL_SLIDES}
        activeIndex={activeIndex}
        onSelect={scrollToSlide}
      />

      {activeIndex < TOTAL_SLIDES - 1 && (
        <button
          type="button"
          className="scroll-hint"
          aria-label="Scroll to next track"
          onClick={() => scrollToSlide(activeIndex + 1)}
        >
          <span className="scroll-hint__label">Scroll</span>
          <span className="scroll-hint__arrow" aria-hidden="true">
            ↓
          </span>
        </button>
      )}
    </>
  );
}
