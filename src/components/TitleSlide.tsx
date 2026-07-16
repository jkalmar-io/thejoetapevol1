import cdImg from "../assets/images/cd.png";
import topTapeImg from "../assets/images/toptape.png";
import bottomTapeImg from "../assets/images/bottomtape.png";
import { WaveBackground } from "./WaveBackground";

export function TitleSlide() {
  return (
    <section className="slide slide--intro" aria-label="The Joe Tape Vol. 1">
      <WaveBackground />

      <div className="cd-scene">
        <img
          src={cdImg}
          alt=""
          className="cd-scene__disc"
          draggable={false}
        />

        <div className="cd-scene__label cd-scene__label--top">
          <img
            src={topTapeImg}
            alt=""
            className="cd-scene__tape"
            draggable={false}
          />
          <h1 className="cd-scene__title">THE JOE TAPE</h1>
        </div>

        <div className="cd-scene__label cd-scene__label--bottom">
          <img
            src={bottomTapeImg}
            alt=""
            className="cd-scene__tape"
            draggable={false}
          />
          <p className="cd-scene__vol">Vol. 1</p>
        </div>
      </div>
    </section>
  );
}
