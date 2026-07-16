export interface Song {
  id: number;
  title: string;
  artist: string;
  era: string;
  description: string;
  /** Spotify track ID — replace with your song's ID from the share link */
  spotifyTrackId: string;
  theme: "dawn" | "ember" | "ocean" | "twilight" | "pink" | "spectrum" | "gold";
}

/**
 * Replace placeholder content with your five meaningful songs.
 * Spotify track ID: open a song in Spotify → Share → Copy link →
 * the ID is the string after /track/ (e.g. 4cOdK8wGTZErcQfbe0mOtS)
 */
export const songs: Song[] = [
  {
    id: 1,
    title: "Day After Day",
    artist: "Badfinger",
    era: "Childhood · Ages 1–10",
    description:
      "This is one of the first songs I remember hearing in my life. I listened to it when my first dog, Murphy, passed, and again on the way to pick out the second cat of my life, Pixie. This song represents both ends and beginnings — the beginning of my life, and the ending of my childhood.",
    spotifyTrackId: "2XKW8CH8nRZH9cF2DNjBHN",
    theme: "dawn",
  },
  {
    id: 2,
    title: "Vertigo",
    artist: "U2",
    era: "Tween · Ages 8–12",
    description:
      "This is the first song I ever put on a CD. I would always get up and dance when it came on. My kid brain thought that rather than just playing the song on repeat, it would be better to burn the disc with multiple plays of the same song in a row. Somewhere in my dad's CD collection exists a disc with 8 Vertigos in a row.",
    spotifyTrackId: "1gVVSmhWjci8l9Vrsl6HaS",
    theme: "ember",
  },
  {
    id: 3,
    title: "Burn",
    artist: "Ellie Goulding",
    era: "Teenager · Ages 16–19",
    description:
      "This song represents my running career. I enjoyed a normal teenage life, but a lot of it revolved around running. Countless races and runs, I could be found on the sidelines getting mentally prepped whilst listening to this song. I didn't always win, but this song represents my burning spirit and drive to never give up.",
    spotifyTrackId: "0xMd5bcWTbyXS7wPrBtZA6",
    theme: "pink",
  },
  {
    id: 4,
    title: "Spectrum",
    artist: "Zedd",
    era: "College · Ages 18–22",
    description:
      "This song represents my college days — particularly the beginning. I entered college with a naive, but unrelenting curiosity and desire to experience adult life. This song fueled late night runs in the dorm gym, post hangover runs after drinking 4 Lokos (so gross), and fraternity 5Ks. This song represents boundless curiosity and my transition from kid to adult.",
    spotifyTrackId: "1dFkD1JfRMzwO6hwUsE8aS",
    theme: "spectrum",
  },
  {
    id: 5,
    title: "Beauty and A Beat (Hoodtrap Remix)",
    artist: "Justin Bieber",
    era: "Now · Ages 27–29",
    description:
      "This song represents my bodybuilding career — though I don't know if that description does full justice to what this song, this era, or bodybuilding means to me. To me, this song represents the years of mental battles I fought within myself to become the man I am today. In large part, that is what bodybuilding represents to me. Before I dropped out of my competition, I had planned on posing to this song. To me, this song represents following my heart.",
    spotifyTrackId: "5VRpHvP4qGDNhKUGM5Xy08",
    theme: "gold",
  },
];
