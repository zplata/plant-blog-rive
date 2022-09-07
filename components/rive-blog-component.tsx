import usePerfLoading from "../hooks/use-perf-loading";
import RiveComponent, { Layout, Fit } from "@rive-app/react-canvas";

const RiveBlogComponent = (props) => {
  const isMobileView = usePerfLoading();

  console.log(isMobileView);

  return (
    <div className="sm:mx-0">
      {isMobileView ? (
        <img
          src={"/assets/blog/hello-world/cover.jpg"}
          alt={`Cover Image for ${props.title}`}
          className={"shadow-sm"}
        />
      ) : (
        <RiveComponent
          className={"shadow-sm aspect-square"}
          src={props.src}
          artboard={props.artboard}
          animations={props.animation}
          {...(!props.animation && { stateMachines: "State Machine 1" })}
          layout={new Layout({ fit: Fit.Contain })}
        />
      )}
    </div>
  );
};

export default RiveBlogComponent;
