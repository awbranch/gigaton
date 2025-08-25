import React from "react";
import { Navbar1 } from "@/components/relume/navbar-01";
import { Header54 } from "@/components/relume/header-54";
import { Layout134 } from "@/components/relume/layout-134";
// import { Layout353 } from "@/components/relume/layout-353";
import { Team14 } from "@/components/relume/team-14";
import { Footer3 } from "@/components/relume/footer-03";

export default function Page() {
  return (
    <div>
      <Navbar1 />
      <Header54 />
      <Layout134 />
      {/* <Layout353 /> */}

      <Team14 />
      <Footer3 />
    </div>
  );
}
