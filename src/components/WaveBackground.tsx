import waveGif from "../assets/images/wave.gif";

export function WaveBackground() {
  return (
    <div className="wave-bg" aria-hidden="true">
      <img src={waveGif} alt="" className="wave-bg__media" />
      <div className="wave-bg__overlay" />
    </div>
  );
}
