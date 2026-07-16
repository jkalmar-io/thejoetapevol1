interface SpotifyPlayerProps {
  id: string;
  title: string;
  type?: "track" | "playlist";
}

export function SpotifyPlayer({
  id,
  title,
  type = "track",
}: SpotifyPlayerProps) {
  const src = `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`;

  return (
    <div
      className={`spotify-player${type === "playlist" ? " spotify-player--playlist" : ""}`}
    >
      <iframe
        src={src}
        title={`Spotify player for ${title}`}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="spotify-player__iframe"
      />
    </div>
  );
}
