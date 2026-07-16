import { AnimatedBackground } from "./AnimatedBackground";
import { SpotifyPlayer } from "./SpotifyPlayer";

const PLAYLIST_ID = "6umtrOlUSi1En7B0trqaZ7";
const PLAYLIST_URL =
  "https://open.spotify.com/playlist/6umtrOlUSi1En7B0trqaZ7?si=48abd68a86fd4967";

export function PlaylistSlide() {
  return (
    <section className="slide slide--outro" aria-label="Full playlist">
      <AnimatedBackground theme="twilight" />

      <div className="glass glass--outro">
        <p className="outro-message">
          Thank you for exploring my life through music! If you want to listen to
          the full songs here is the playlist:
        </p>

        <SpotifyPlayer
          id={PLAYLIST_ID}
          title="The Joe Tape Vol. 1"
          type="playlist"
        />

        <a
          href={PLAYLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="outro-link"
        >
          Open playlist on Spotify
        </a>
      </div>
    </section>
  );
}
