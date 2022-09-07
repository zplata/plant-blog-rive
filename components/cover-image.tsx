import RiveBlogComponent from "./rive-blog-component";
import dynamic from "next/dynamic";

type Props = {
  title?: string;
  src: string;
  slug?: string;
  artboard?: string;
  animation?: string;
};

const RiveNoSSR = dynamic(() => import("./rive-blog-component"), {
  ssr: false,
});

const CoverImage = (props: Props) => {
  return <RiveNoSSR {...props} />;
};

export default CoverImage;
