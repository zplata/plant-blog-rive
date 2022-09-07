import { CMS_NAME } from "../lib/constants";
import RiveComponent from "@rive-app/react-canvas";

const Intro = () => {
  return (
    <section className="flex-col justify-center flex mb-16 md:mb-12 min-h-screen">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        plants 101
      </h1>
      <h4 className="text-center md:text-left text-xl mt-5">
        a blog about plants and things with{" "}
        <a
          href="https://rive.app/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Rive
        </a>
        .
      </h4>
      <div className="absolute bottom-3 left-0 right-0">
        <RiveComponent src="/assets/rives/waving_tree.riv" />
        <div className="text-center font-semibold">Scroll down for more</div>
      </div>
    </section>
  );
};

export default Intro;
