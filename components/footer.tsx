import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

const Footer = () => {
  const { rive, RiveComponent } = useRive({
    src: "/assets/rives/heart.riv",
    stateMachines: "stateMachine",
    autoplay: true,
  });

  const checkedInput = useStateMachineInput(
    rive,
    "stateMachine",
    "checked",
    false
  );

  return (
    <footer
      className="bg-neutral-50 border-t border-neutral-200 bg-[#0C3823]"
      onMouseOver={() => {
        if (checkedInput && !checkedInput.value) {
          checkedInput.value = true;
        }
      }}
    >
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center text-white">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <span>
              Made with{" "}
              <RiveComponent className="inline-block h-12 w-12 align-bottom" />{" "}
              at Rive
            </span>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/3">
            <a
              href="https://help.rive.app/runtimes/overview/react"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/rive-app/rive-react`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
