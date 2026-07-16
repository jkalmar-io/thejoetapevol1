import type { Song } from "../data/songs";
import { AnimatedBackground } from "./AnimatedBackground";
import { SpotifyPlayer } from "./SpotifyPlayer";

interface SongSlideProps {
  song: Song;
  trackNumber: number;
}

export function SongSlide({ song, trackNumber }: SongSlideProps) {
  return (
    <section
      className="slide slide--song"
      aria-label={`Track ${trackNumber}: ${song.title} by ${song.artist}`}
    >
      <AnimatedBackground theme={song.theme} />

      <div className="glass glass--track">
        <header className="track-header">
          <span className="track-number">
            {String(trackNumber).padStart(2, "0")}
          </span>
          <span className="track-era">{song.era}</span>
        </header>

        <div className="track-body">
          <h2 className="track-title">{song.title}</h2>
          <p className="track-artist">{song.artist}</p>
          <p className="track-description">{song.description}</p>
        </div>

        <SpotifyPlayer id={song.spotifyTrackId} title={song.title} />
      </div>
    </section>
  );
}
