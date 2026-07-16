interface SlideIndicatorProps {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function SlideIndicator({
  total,
  activeIndex,
  onSelect,
}: SlideIndicatorProps) {
  return (
    <nav className="slide-indicator" aria-label="Mixtape navigation">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          type="button"
          className={`slide-indicator__dot${i === activeIndex ? " slide-indicator__dot--active" : ""}`}
          aria-label={
            i === 0
              ? "Title slide"
              : i === total - 1
                ? "Playlist"
                : `Track ${i}`
          }
          aria-current={i === activeIndex ? "true" : undefined}
          onClick={() => onSelect(i)}
        />
      ))}
    </nav>
  );
}
