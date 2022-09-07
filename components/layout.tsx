import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const RiveNoSSR = dynamic(() => import("./scrolling-rive"), { ssr: false });

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen grid grid-cols-4">
        <div className="xl:col-span-3 col-span-4">
          <main>{children}</main>
        </div>
        <div className="xl:w-1/4 xl:block hidden">
          <RiveNoSSR />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
