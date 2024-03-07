import { styles } from "../styles";
import Part from "./Part";

const Party = () => {
  return (
    <section className="w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[130px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className={`${styles.paddingX}`}>
          <h1 className={`${styles.partyHeadText} `}>Hi, I'm Dea314</h1>
          <p className={`${styles.partySubText} mt-8 `}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
        <div className="absolute inset-0 max-w-7xl mx-auto flex">
          <Part />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <p>
          <a href="#intern">Scroll down</a>
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Party;
