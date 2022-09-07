import {
  useRive,
  useStateMachineInput,
  Fit,
  Layout as RiveLayout,
  Alignment,
} from "@rive-app/react-canvas";
import { useEffect } from "react";

const ScrollingRive = (props) => {
  const { rive, RiveComponent } = useRive({
    src: "/assets/rives/plant_scroll.riv",
    stateMachines: "ScrollingBehavior",
    layout: new RiveLayout({
      fit: Fit.FitHeight,
      alignment: Alignment.CenterRight,
    }),
    autoplay: true,
  });

  const scrollPct = useStateMachineInput(
    rive,
    "ScrollingBehavior",
    "scrollPct",
    0
  );

  useEffect(() => {
    let scrollListener;
    if (scrollPct) {
      const body = document.querySelector("body");
      const bodyParent = body.parentNode as HTMLElement;
      const pageLength = bodyParent.scrollHeight;

      const scrollCallback = () => {
        const scrollOffset = bodyParent.scrollTop;
        const scrollPctValue =
          (100 * scrollOffset) / (pageLength - bodyParent.clientHeight);
        scrollPct.value = scrollPctValue;
      };

      scrollListener = document.addEventListener("scroll", scrollCallback);
    }

    return () => {
      if (scrollListener) {
        document.removeEventListener("scroll", scrollListener);
      }
    };
  }, [scrollPct]);

  return (
    <RiveComponent className="fixed bottom-0 top-0 right-0 w-full pointer-events-none" />
  );
};

export default ScrollingRive;
